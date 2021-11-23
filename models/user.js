const mongodb = require("mongodb");
const db = require("../utils/database").getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email) {
    (this.name = username), (this.email = email);
  }

  save() {
    const db = getDb();
    return db.collection("users").insetOne(this);
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .find({ _id: new ObjectId(userId) })
      .next();
  }
}

module.exports = User;
