import {NextFunction, Request, Response} from 'express'
import {KoboSdk} from '../../feature/connector/kobo/KoboClient/KoboSdk'
import * as yup from 'yup'
import {PrismaClient} from '@prisma/client'
import {ApiClient} from '../../core/client/ApiClient'
import {UUID} from '../../core/Type'
import {lazy} from '@alexandreannic/ts-utils'
import {getCsv} from '../../feature/connector/kobo/cleanKoboDb/CleadedKoboDbLoader'
import {format} from 'date-fns'
import {KoboService} from '../../feature/kobo/KoboService'
import {KoboSdkGenerator} from '../../feature/kobo/KoboSdkGenerator'
import {KoboApiService} from '../../feature/kobo/KoboApiService'

interface AnswersFilters {
  start?: Date
  end?: Date
}

const answersFiltersValidation = yup.object({
  start: yup.date(),
  end: yup.date(),
})

export class ControllerKoboApi {


  constructor(
    private pgClient: PrismaClient,
    private service = new KoboApiService(pgClient),
    private koboSdkGenerator = new KoboSdkGenerator(pgClient),
  ) {

  }

  private readonly extractParams = async (req) => {
    const schema = yup.object({
      id: yup.string().required(),
      formId: yup.string().required(),
    })
    return await schema.validate(req.params)
  }

  readonly getForms = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = await this.extractParams(req.params)
    const sdk = await this.koboSdkGenerator.construct(id)
    const forms = await sdk.getForms()
    res.send(forms)
  }

  // readonly importAnswers = async (req: Request, res: Response, next: NextFunction) => {
  //   const {id, formId} = await this.extractParams(req)
  //   const sdk = await this.koboSdkGenerator.construct(id)
  //   const answers = await sdk.getAnswers(formId).then(_ => _.data)
  //   res.status(200).json(answers)
  // }

  readonly getAnswersFromLocalCsv = async (req: Request, res: Response, next: NextFunction) => {
    const filters = await answersFiltersValidation.validate(req.query)
    const sdk = await this.koboSdkGenerator.construct('746f2270-d15a-11ed-afa1-0242ac120002')
    const localForm = await getCsv(sdk)
    const filtered = localForm.filter(_ =>
      (!filters.start || _.end > format(filters.start, 'yyyy-MM-dd')) &&
      (!filters.end || _.end < format(filters.end, 'yyyy-MM-dd'))
    )
    res.send(filtered)
  }

  readonly synchronizeAnswersFromKoboServer = async (req: Request, res: Response, next: NextFunction) => {
    const {id, formId} = await this.extractParams(req)
    this.service.syncImportAnswers(formId, id)
    res.send()
  }

  readonly getAnswers = async (req: Request, res: Response, next: NextFunction) => {
    const {id, formId} = await this.extractParams(req)
    const filters = await answersFiltersValidation.validate(req.query)
    const answers = await this.service.fetchAnswers(id, formId, filters)
    res.send(answers)
  }

  readonly getForm = async (req: Request, res: Response, next: NextFunction) => {
    const {id, formId} = await this.extractParams(req)
    const sdk = await this.koboSdkGenerator.construct(id)
    const form = await sdk.getForm(formId)
    res.send(form)
  }
}
