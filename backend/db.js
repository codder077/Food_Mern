const mongoose = require('mongoose');

// Correct connection string with the proper database name 'Cluster0'
const mongoURI = 'MongoUri';

const Mongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");

        const foodCollection = mongoose.connection.db.collection("food_items");
        const data = await foodCollection.find({}).toArray();
        console.log(data);
    } catch (err) {
        console.error("Connection error: ", err);
    }
};

module.exports = Mongo;
