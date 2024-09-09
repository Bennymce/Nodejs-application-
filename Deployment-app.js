apiVersion: apps/v1
kind: Deployment
metadata:
  name: bosslady-deployment
  namespace: ingress-nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: bosslady
  template:
    metadata:
      labels:
        app: bosslady
    spec:
      containers:
      - name: bosslady-app
        image: 010438494949.dkr.ecr.us-east-2.amazonaws.com/new-app:1.0
        ports:
        - containerPort: 8080



---
apiVersion: v1
kind: Service
metadata:
  name: bosslady-service
  namespace: ingress-nginx
spec:
  type: LoadBalancer
  selector:
    app: bosslady
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
