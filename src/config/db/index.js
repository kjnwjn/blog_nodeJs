const mongoose = require('mongoose');
const uri =
    'mongodb+srv://1412001q:U4tFCGy8i278CVlf@atlascluster.m5scnkt.mongodb.net/BlogNodeJS';

async function connect() {
    try {
        const options = { useNewUrlParser: true, useUnifiedTopology: true   };
        await mongoose.connect(uri, options, () => {
            console.log('✅ Connect to mongoDB successfully!\n\n');
        });
    } catch (error) {
        console.log('❌ Failed to connect to MongoDB!');
        console.log(error.message);
    }
}

module.exports = { connect };
