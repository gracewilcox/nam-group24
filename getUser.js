const Responses = require('../common/API_Responses')

exports.handler = async event => {
    console.log('event', event)

    if (!event.pathParameters || !event.pathParameters.ID) {
        // failed without ID
        return Responses._400({ message: 'missing the ID from path' })
    }

    let ID = event.pathParameters.ID;

    if (data[ID]) {
        // return the data
        return Responses._200(data[ID])
    }

    // else failed bc ID not in the data
    return Responses._400({ message: 'no ID in data' });
}

const data = {
    1234: { name: 'Anna Jones', age: 25, job: 'journalist' },
    7893: { name: 'Chris Smith', age: 52, job: 'teacher'},
    2983: { name: 'John Bonzalez', age: 33, job: 'musician'}
};