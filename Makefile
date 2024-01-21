build:
  docker build . -t victorvsm/angular-build-one:latest
  docker push victorvsm/angular-build-one:latest

run:
  docker run -p 8000:80 -e ENVIRONMENT=Production -t victorvsm/angular-build-one
