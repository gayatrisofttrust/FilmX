import json

def get_users(event, context):
    users = [
        {"id": 1, "name": "Alice"},
        {"id": 2, "name": "Bob"}
    ]
    return {
        "statusCode": 200,
        "body": json.dumps(users),
        "headers": {"Content-Type": "application/json"}
    }

def get_purchases(event, context):
    purchases = [
        {"id": 1, "vendor": "Amazon", "amount": 120},
        {"id": 2, "vendor": "eBay", "amount": 85}
    ]
    return {
        "statusCode": 200,
        "body": json.dumps(purchases),
        "headers": {"Content-Type": "application/json"}
    }

def add_purchase(event, context):
    body = json.loads(event.get("body") or "{}")
    new_purchase = {"id": 3, "vendor": body.get("vendor"), "amount": body.get("amount")}
    return {
        "statusCode": 201,
        "body": json.dumps(new_purchase),
        "headers": {"Content-Type": "application/json"}
    }
