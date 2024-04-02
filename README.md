# React Movie App
This app is built as part of an assessment given by Cyberspeed using React and the project was initialized using ViteJS with typescript.

## Overview
Assessment provided free API endpoint to build the frontend project. However, due to missing endpoint for listing movies and non-functional endpoints for movie posters, I had to find an alternative. After a quick search I found [themoviesdb.org](https://themoviesdb.org/) almost the best fit for the project. Due to usage of an actual API service a read access token is required from them.

## Setup
1. Clone the repository and install dependencies:
    ```bash
    git clone https://github.com/muhammedriaz/react-assessment.git
    cd react-assessment
    npm install
    ```
2. Register for an account at themoviedb.org and obtain an API Read Access Token from [here](https://www.themoviedb.org/settings/api).

3. Create an env file from the `.env.sample` file:
    ```bash
    cp .env.sample .env.local
    ```
   OR<br>
   Export the `VITE_TMDB_API_ACCESS_TOKEN` variable:
    ```bash
   export VITE_TMDB_API_ACCESS_TOKEN=<token>
    ```

## Running the app
- To run the project in development mode:
    ```bash
    npm run dev
    ```
- For production build and preview:
    ```bash
    npm run build
    npm run preview
    ```
The project is hosted on Vercel, accessible at [react-assessment-iota.vercel.app](https://react-assessment-iota.vercel.app/).
