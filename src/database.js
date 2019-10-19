const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://jsnicdb:JSDB2019@ds335678.mlab.com:35678/jsnic';
const connect = async() => {
    try {
        const client = await MongoClient.connect(url, { useUnifiedTopology: true });
        // console.log('DB Coneected');
        return client.db();
    } catch (error) {
        console.log(error);
    }

}

module.exports = connect;