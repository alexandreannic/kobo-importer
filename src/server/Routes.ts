import express from 'express'
import {AppController} from './controller/AppController'
import {Mongo} from '../mongodb/Mongo'
import {KoboClient} from '../connector/kobo/KoboClient/KoboClient'
import {Client} from 'pg'
import {KoboController} from './controller/KoboController'
import {Logger} from '../utils/Logger'
import {EcrecSdk} from '../connector/ecrec/EcrecSdk'

export const getRoutes = (
  pgClient: Client,
  koboClient: KoboClient,
  ecrecSdk: EcrecSdk,
  logger: Logger,
) => {
  const router = express.Router()
  const app = new AppController(pgClient, koboClient, ecrecSdk, logger)
  const kobo = new KoboController(pgClient, koboClient)
  router.get('/', app.index)
  router.get('/kobo/import', kobo.importAnswers)
  return router
}
