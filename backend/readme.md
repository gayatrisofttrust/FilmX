npm install -g serverless


sls deploy

sls offline start


python3 -m uvicorn main:app --reload


pip install -r requirements.txt --target ./package
cp -r src main.py package/
cd package
zip -r ../lambda.zip .




docker run -it -v "$PWD":/app public.ecr.aws/lambda/python:3.11 bash
cd /app/backend
mkdir build && cd build
pip install -r ../requirements.txt -t .

cp ../main.py .
cp -r ../src .

zip -r9 ../lambda.zip .





python run_migrations.py
