def handler(event, context):
    users = {"users": ["Alice", "Bob", "Charlie"]}
    return {
        "statusCode": 200,
        "body": str(users)
    }
