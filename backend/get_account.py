import boto3
import os
import json


dynamodb = boto3.client('dynamodb')


def handler(event, context):
    result = dynamodb.scan(
        TableName=os.environ['DYNAMODB_TABLE']
    )
    # print(list(event.values())[0])
    acct_id = event['pathParameters']['acct_id']
    account = "default"
    for item in result["Items"]:
        if item["acct_id"]["N"] == acct_id:
            account = {
                 "acct_id": item["acct_id"]["N"],
                 "balance": item["balance"]["N"],
                 "is_checking": item["is_checking"]["BOOL"],
                 "name": item["name"]["S"]
             }
            break
    print("some logging")
    response = {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps(account)
    }
    return response
