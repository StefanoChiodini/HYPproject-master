const express = require('express')
const app = express()
const { Sequelize, DataTypes, where, json } = require('sequelize')
const initialize = require('./initialize').default
app.use(express.json())

// Development section
// npm run dev + node api.js
// const database = new Sequelize(
//   'postgres://postgres:password@localhost:5432/postgres'
// )
// heroku
  const pg = require('pg')
  pg.defaults.ssl = true
  const database = new Sequelize(process.env.DATABASE_URL, {
    // const database = new Sequelize('postgres://ywppkavzeyokbu:4a7cdbb9bfb51468e67e3f1e29680a8fc6a60955394f6b2a197a26e759abc1dc@ec2-52-212-228-71.eu-west-1.compute.amazonaws.com:5432/dcct0h3mbnd5d4', {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
     ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  })

// Function that will initialize the connection to the database

async function initializeDatabaseConnection() {
  await database.authenticate()
  //this code snippet create a table in the database, but this is only a declaration, i have to synchronize it

  // TABLE
  // Point of interest table
  const PointOfInterest = database.define(
    'pointOfInterest',
    {
      pointOfInterestId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      pointOfInterestName: DataTypes.STRING,
      pointOfInterestImage: DataTypes.STRING, // this contains the url to the image of the point of interest
      pointOfInterestMap: DataTypes.STRING, // this contains the url to the image of the point of interest map
      pointOfInterestAddress: DataTypes.STRING,
      pointOfInterestDescription: DataTypes.TEXT,
      pointOfInterestTime: DataTypes.STRING,
    },
    { timestamps: false }
  )
  // Event table
  const Event = database.define('event', {
    eventId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    pointOfInterestId: DataTypes.INTEGER, // this is the id of the point of interest in which the event takes place
    eventName: DataTypes.STRING,
    eventImage: DataTypes.STRING, // this contains the url to the image of the event
    eventDate: DataTypes.STRING,
    eventAddress: DataTypes.STRING,
    eventDescription: DataTypes.TEXT,
    eventSeasonFilter: DataTypes.INTEGER, // this indicate us the season in which the event takes place
  })
  // Itinerary table
  const Itinerary = database.define(
    'itinerary',
    {
      itineraryId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      itineraryName: DataTypes.STRING,
      itineraryImage: DataTypes.STRING, // this contains the url to the image of the itinerary
      itineraryMap: DataTypes.STRING, // this contains the url to the image of the itinerary
      itineraryDescription: DataTypes.TEXT,
      itineraryPath: DataTypes.STRING, // this is a string like "3.7.9.2.6" where the number are the point of interest id
      // so we can retrieve and parse in local the correct order of the itinerary.
      itineraryTime: DataTypes.TEXT,
    },
    { timestamps: false }
  )
  // ServiceType Table
  const ServiceType = database.define('serviceType', {
    serviceTypeId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    serviceTypeName: DataTypes.STRING,
    serviceTypeImage: DataTypes.STRING, // this contains the url to the image of the serviceType
    serviceTypeDescription: DataTypes.TEXT,
    serviceTypeAddress: DataTypes.STRING,
    serviceTypeTime: DataTypes.STRING,
    serviceTypePhone: DataTypes.STRING,
  })
  // joinTable Table
  const Poi_Itinerary = database.define(
    'poi_itinerary',
    {},
    { timestamps: false }
  )

  // ASSOCIATION
  // ManyToMany relationship between PointOfInterest and Itinerary
  PointOfInterest.belongsToMany(Itinerary, { through: Poi_Itinerary })
  Itinerary.belongsToMany(PointOfInterest, { through: Poi_Itinerary })

  // OneToMany relationship between PointOfInterest and Event
  PointOfInterest.hasMany(Event, {
    foreignKey: 'event_id',
  })
  Event.belongsTo(PointOfInterest)

  // here there is the synchronization with remote database
  await database.sync({ force: true })
  return {
    PointOfInterest,
    Event,
    Itinerary,
    ServiceType,
    Poi_Itinerary,
  }
}

async function runMainApi() {
  const models = await initializeDatabaseConnection()
  // node api.js
  // const data = require('./initialize')
  // await data.initialize(models)
  // npm run dev
  await initialize(models)

  // HTTP GETTERS
  // Services - Get All Services ----------------------------------------------------------------------
  app.get('/serviceTypeList', async (req, res) => {
    const result = await models.ServiceType.findAll()
    return res.json(result)
  })

  // Events
  // Get All Events ----------------------------------------------------------------------
  app.get('/eventList', async (req, res) => {
    const result = await models.Event.findAll()
    return res.json(result)
  })
  // Get SUMMER Events ----------------------------------------------------------------------
  app.get('/summerEventList', async (req, res) => {
    const result = await models.Event.findAll({
      where: { eventSeasonFilter: 0 },
    })
    return res.json(result)
  })
  // Get WINTER Events ----------------------------------------------------------------------
  app.get('/winterEventList', async (req, res) => {
    const result = await models.Event.findAll({
      where: { eventSeasonFilter: 1 },
    })
    return res.json(result)
  })
  // Get All events organized in a Specific POI
  app.get('/poiEventList/:id', async (req, res) => {
    const { id } = req.params
    const result = await models.Event.findAll({
      where: { pointOfInterestId: id },
    })
    return res.json(result)
  })

  // Get Specific Event by ID ----------------------------------------------------------------------
  app.get('/eventSpecific/:id', async (req, res) => {
    const { id } = req.params
    const result = await models.Event.findOne({
      where: { eventId: id },
    })
    return res.json(result)
  })

  // Get All POIs ----------------------------------------------------------------------
  app.get('/poiList', async (req, res) => {
    const result = await models.PointOfInterest.findAll()
    return res.json(result)
  })

  // Get Specific POI by ID ----------------------------------------------------------------------
  app.get('/poiList/:id', async (req, res) => {
    const { id } = req.params
    const result = await models.PointOfInterest.findOne({
      where: { pointOfInterestId: id },
      // include: [{model: models.??}]
    })
    return res.json(result)
  })
  // Get POI data by EventID
  app.get('/poiByEvent/:id', async (req, res) => {
    const { id } = req.params
    const event = await models.Event.findOne({
      where: { eventId: id },
    })
    const result = await models.PointOfInterest.findOne({
      where: { pointOfInterestId: event.pointOfInterestId },
    })
    return res.json(result)
  })

  // Get All itineraries ----------------------------------------------------------------------
  app.get('/itineraryList', async (req, res) => {
    const result = await models.Itinerary.findAll()
    return res.json(result)
  })

  // Get Specific Itinerary by ID ----------------------------------------------------------------------
  app.get('/itineraryList/:id', async (req, res) => {
    const { id } = req.params
    const result = await models.Itinerary.findOne({
      where: { itineraryId: id },
    })
    return res.json(result)
  })
  // Get All the Itineraries from the ID of a POI ----------------------------------------------------------------------
  app.get('/getItineraryList/:id', async (req, res) => {
    const { id } = req.params
    const final = []
    const itIds = await models.Poi_Itinerary.findAll({
      where: { pointOfInterestPointOfInterestId: id },
    })
    for (const el of itIds) {
      const temp = await models.Itinerary.findOne({
        where: { itineraryId: el.itineraryItineraryId },
      })
      final.push(temp)
    }
    return res.json(final)
  })

  app.get('/getNames/:id', async (req, res) => {
    const { id } = req.params
    const final = []
    const itinerary = await models.Itinerary.findOne({
      where: { itineraryId: id },
    })
    const list = itinerary.itineraryPath.split(',')
    for (const el of list) {
      const temp = await models.PointOfInterest.findOne({
        where: { pointOfInterestId: el },
      })
      final.push(temp)
    }
    return res.json(final)
  })

  // const pois = result_json.itineraryPath.split(',').map(Number);
}

runMainApi()

// npm run dev
export default app
// node api.js
// module.exports = { app }
