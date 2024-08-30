const mongoose = require('mongoose');

const connectToDB = (URI) => {
    mongoose.connect(URI, {
        dbName: "Pizzeria"
    }).then((c) => {
        console.log(`DB connected to ${c.connection.host}`);
    }).catch((e) => {
        console.log(e);
    });
}

module.exports = {
    connectToDB: connectToDB
};