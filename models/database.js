const mongoose = require('mongoose');
const dbName = 'test';
const connectDB = async () => {
    try {
      // Nho doi ten db_name
        await mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`)
        .then(() => console.log(`MongoDB connected to collection ${dbName}`));
    
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    }

module.exports = connectDB;