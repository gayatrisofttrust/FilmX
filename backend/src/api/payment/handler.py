
def handler(event, context):
    user_id = event.get("user_id")
    amount = event.get("amount")
    if not user_id or not amount:
        return {"statusCode": 400, "body": "Missing user_id or amount"}
    result = {"message": f"Payment of {amount} for user {user_id} processed"}
    return {"statusCode": 200, "body": str(result)}
