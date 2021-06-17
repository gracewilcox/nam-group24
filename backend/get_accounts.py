import boto3
import os
import json


dynamodb = boto3.client('dynamodb')


def handler(event, context):
    result = dynamodb.scan(
        TableName=os.environ['DYNAMODB_TABLE'],
    )
    accounts = []
    for item in result["Items"]:
        accounts.append({
            "acct_id": item["acct_id"]["N"],
            "balance": item["balance"]["N"],
            "is_checking": item["is_checking"]["BOOL"],
            "name": item["name"]["S"]
        })
    response = {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps(accounts)
    }
    return response
