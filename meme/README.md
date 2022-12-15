At first, you need to create your own Imgflip api account form web [https://imgflip.com/api]
Then set your .env file with 
### `REACT_APP_API_ID=YOU_USER_NAME  REACT_APP_API_KEY=YOUR_PASSWORD`
Then you can run in your local with :
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


If you want to run web from gcloud 
At first, you need to create your own Imgflip api account form web [https://imgflip.com/api]
Then clone the file form gitlab to your google cloud
then run 
###`gcloud builds submit --tag gcr.io/${GOOGLE_CLOUD_PROJECT}/meme `
Build the Docker image for the app

Last run 

###`gcloud run deploy --image gcr.io/${GOOGLE_CLOUD_PROJECT}/meme --set-env-vars REACT_APP_API_ID=YOU_USER_NAME,REACT_APP_API_KEY=YOUR_PASSWORD`
Use cloud run build the app

The website is also on the https://meme-me3odwmlxq-uw.a.run.app

