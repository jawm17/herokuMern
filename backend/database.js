const mongoose = require('mongoose');
const connection = "mongodb+srv://koikoi5:koikoi5@cluster0.4ywri.mongodb.net/Cluster0?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));