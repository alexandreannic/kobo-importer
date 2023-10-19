import {MpcaDbService} from './MpcaDbService'
import {PrismaClient} from '@prisma/client'
import {ApiPaginate, toApiPaginate} from '../../../core/Type'
import {MpcaData, MpcaDataFilter} from './MpcaDbType'
import {Enum} from '@alexandreannic/ts-utils'
import {KoboEvent} from '../../kobo/KoboEvent'
import {KoboAnswerId} from '../../connector/kobo/KoboClient/type/KoboAnswer'

export class MpcaLocalDb {
  private static instance: MpcaLocalDb

  static constructSingleton(prisma: PrismaClient) {
    if (!MpcaLocalDb.instance) MpcaLocalDb.instance = new MpcaLocalDb(prisma)
    return MpcaLocalDb.instance
  }

  private constructor(
    private prisma: PrismaClient,
    private service: MpcaDbService = new MpcaDbService(prisma),
    private koboEvent: KoboEvent = new KoboEvent()
  ) {
    this.koboEvent.listenTagEdited(async (x) => {
      if (!this._cache || !this.idIndex) return
      const cache = await this._cache
      x.answerIds.forEach(id => {
        cache[this.idIndex![id]].tags = {
          ...cache[this.idIndex![id]].tags,
          ...x.tags,
        }
      })
    })
  }

  private _cache: Promise<MpcaData[]> | undefined
  private get cache(): Promise<MpcaData[]> | undefined {
    if (!this._cache) {
      this._cache = this.service.search({}).then(_ => {
        this.idIndex = {}
        _.data.forEach((d, i) => {
          if (this.idIndex![d.id]) throw new Error(`Why ${d.id} exists twice?`)
          this.idIndex![d.id] = i
        })
        return _.data
      })
    }
    return this._cache
  }

  private idIndex: Record<KoboAnswerId, number> | undefined

  readonly warmUp = () => {
    this.cache
  }

  readonly search = async ({start, end, ...filters}: MpcaDataFilter): Promise<ApiPaginate<MpcaData>> => {
    const definedFilters = Enum.entries(filters).filter(([k, v]) => v !== undefined && v.length > 0).map(_ => _[0])
    const data = await this.cache
    const filteredData = data?.filter(_ => {
      for (let i = 0; i < definedFilters.length; i++) {
        const key = definedFilters[i]
        if (!(filters[key]! as any).includes(_[key])) {
          return false
        }
      }
      return true
    })
    return toApiPaginate(filteredData ?? [])
  }
}