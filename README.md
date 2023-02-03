# Meme Generator Web Application
You can see in this website(https://meme-me3odwmlxq-uw.a.run.app/)
## Introduction
This is a simple meme generator web application that allows users to generate custom memes by uploading an image and adding text to it. This application was built using React as the front-end framework, Google Cloud Run as the hosting platform, and Docker as the containerization technology.

## Requirements
Docker (https://www.docker.com/products/docker-desktop)
Node.js (https://nodejs.org/en/download/)
npm (Node Package Manager) (comes with Node.js)
## Installation
Clone the repository to your local machine:Cancel changes
git clone https://github.com/<your-repo>.git


Navigate to the project directory:
cd meme-generator-web-app


Install the necessary packages:
npm install


Start the development server:
npm start


## Deployment on Google Cloud Run
Build a Docker container for your application:
docker build -t gcr.io/<your-project-id>/meme-generator-web-app .

Push the Docker container to Google Container Registry:
docker push gcr.io/<your-project-id>/meme-generator-web-app


Deploy the Docker container to Google Cloud Run:
gcloud beta run deploy --image gcr.io/<your-project-id>/meme-generator-web-app
## Usage
Once the application is running, simply navigate to the URL provided by Google Cloud Run to use the meme generator. Upload an image, add text to it, and generate your custom meme!

## Conclusion
This meme generator web application provides a simple and user-friendly interface for generating custom memes. By utilizing React for the front-end, Google Cloud Run for hosting, and Docker for containerization, it offers a scalable and secure solution for generating memes on the web.
