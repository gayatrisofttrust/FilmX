
def handler(event, context):
    user_id = event.get("user_id")
    if not user_id:
        return {"statusCode": 400, "body": "Missing user_id"}
    result = {"message": f"Subscription for user {user_id} activated"}
    if result:
        return {"statusCode": 200, "body": str(result)}
    else:
        return {"statusCode": 404, "body": "Subscription not found"}
