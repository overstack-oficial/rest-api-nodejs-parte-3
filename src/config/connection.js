const mongoose = require('mongoose');

class Connection {
  constructor() {
    this.dataBaseConnectionMongoDB();
  }

  dataBaseConnectionMongoDB(){
    this.mongoDBConnection = mongoose.connect("mongodb://localhost/nodejs", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then(() => {
      console.log("Conexão estabelicida com o MongoDB");
    })
    .catch((error) => {
      console.log(`Erro ao estabelecer conexão com mongoDB: ${error}`)
    })
  }
}

module.exports = new Connection();