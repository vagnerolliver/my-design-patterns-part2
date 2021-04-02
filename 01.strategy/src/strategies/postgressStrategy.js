export default class PostgressDBStrategy  {
  constructor(dbStrategy) {
    this.dbStrategy = dbStrategy
  }

  async connect() {
    console.log("connected")
  }

  async create(item) {
  }

  async read(item) {
  }
}
