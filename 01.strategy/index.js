import ContextStrategy from "./src/base/contextStrategy.js"
import MongoDBStrategy from "./src/strategies/mongoStrategy.js"
import PostgressDBStrategy from "./src/strategies/postgressStrategy.js"

const postgressDBStrategy = new ContextStrategy(new PostgressDBStrategy())
postgressDBStrategy.connect()

const data = [{
  name: 'erickwendel',
  type: 'transaction'
}, {
  name: 'mariasilva',
  type: 'activityLog'
}]
