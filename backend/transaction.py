import boto3
import os
import json


dynamodb = boto3.client('dynamodb')


def handler(event, context):
    acct_id = event['acct_id']
    amount = event['amount']
    result = dynamodb.update_item(
        TableName=os.environ['DYNAMODB_TABLE'],
        Key={
            'acct_id': {'N': acct_id}
        },
        UpdateExpression='ADD balance :transact',
        ExpressionAttributeValues={
            ':transact': {'N': str(amount)}
        },
        ReturnValues="UPDATED_NEW"
    )
    response = {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"acct_id": acct_id,
                            "balance": result["Attributes"]["balance"]["N"]})
    }
    return response
