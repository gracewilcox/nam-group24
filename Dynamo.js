const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const Dynamo = {
    async get (acct_id, TableName) {
        const params = {
            TableName,
            Key: {
                acct_id
            }
        };

        const data = await documentClient
            .get(params)
            .promise()

        if (!data || !data.Item) {
            throw Error(`There was an error fetching the data for ID of ${acct_id} from ${TableName}`)
        }
        console.log(data);

        return data.Item;
    }
};
module.exports = Dynamo;