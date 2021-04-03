import ContextStrategy from "./src/base/contextStrategy.js"
import MongoDBStrategy from "./src/strategies/mongoDBStrategy.js"
import PostgresStrategy from "./src/strategies/postgressStrategy.js"

const postgresConnectionString = "postgres://vagner:senha001@localhost:5432/heroes"
const postgresContext = new ContextStrategy(new PostgresStrategy(postgresConnectionString))
await postgresContext.connect()

const mongoDBConnectionString = "mongodb://vagner:senhaadmin@localhost:27017/heroes"
const mongoDBContext = new ContextStrategy(new MongoDBStrategy(mongoDBConnectionString))
await mongoDBContext.connect()

const data = [{
  name: 'erickwendel',
  type: 'transaction'
}, {
  name: 'mariasilva',
  type: 'activityLog'
}]

const contextTypes = {
  transaction: postgresContext,
  activityLog: mongoDBContext
}

for(const {type, name} of data) {
  const context = contextTypes[type]
  await context.create({ name: `${name + Date.now()} +BO`})


  console.log(type, context.dbStrategy.constructor.name)
  console.log(await context.read())
}

