const data = {
    "acct-num": "123456789",
    "balance": "100.00",
    "is_checking": true,
    "name": "Default User"
}

const Responses = {
    _200(data = {}){
        return {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 200,
            body: JSON.stringify(data)
        }
    },
    _400(data = {}){
        return {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 400,
            body: JSON.stringify(data)
        }
    }
}

exports.handler = async (event) => {
    console.log('TESTING')
    
    if (!event.pathParameters) {
        return Responses._400({message: 'Missing parameters'})
    }

    try {
        // create account in dynamo
        console.log('testing')
        console.log(event.pathParameters)
        return Responses._200({message: 'Success'})
    }
    catch(error) {
        // throw 400 error 
        return Responses._400(error)
    }
};
  