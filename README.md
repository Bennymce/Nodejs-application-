# Nodejs-application-
Deploying a Nodejs app to an EKS cluster 
Overview
Requests from browser > Mongo Express external service > forward to Mongo Express pod > connect to Mongo db internal service(db URL) > forward to Mongo db pod


Dockerfile 
i already built my dokcerfile and pushed to ECR (amazon container registry)

Docker needs the login of aws in order to authenticate and push images to amazon ECR
 
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 010438494949.dkr.ecr.us-east-2.amazonaws.com

