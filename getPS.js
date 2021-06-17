const Responses = require('../common/API_Responses');
const Dynamo = require('../common/Dynamo')

const tableName = process.env.tableName

exports.handler = async event => {
    console.log('event', event)

    if (!event.pathParameters || !event.pathParameters.acct_id) {
        // failed without ID
        return Responses._400({ message: 'missing the ID from path' });
    }

    let acct_id = event.pathParameters.acct_id;

    const user = await Dynamo.get(acct_id, tableName).catch(err => {
        console.log("error in dynamo get", err);
        return null  // callback to line 6, throws error if null
    });

    if (!user) {
        return Responses._400({ message: 'Failed to get user by ID' })
    }

    return Responses._200({ user });
};