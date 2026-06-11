#!/bin/bash

# Define timestamp function
timestamp() {
  date +"%Y-%m-%d_%H-%M-%S"
}

# Define image name
IMAGE_NAME=paysages-azureens-$(timestamp)
# Display IMAGE_NAME
echo $IMAGE_NAME
# Create image of the app 
docker build -t $IMAGE_NAME .
# Stop current container
docker stop paysages-azureens-1
# Remove current container
docker rm paysages-azureens-1
# Run the image
docker run -d -it -p 3001:3000 --rm --name paysages-azureens-1 $IMAGE_NAME