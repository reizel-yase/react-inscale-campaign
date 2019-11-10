# React Assignment for Inscale
This project was created for Inscale


## Installation
- In your terminal/CMD, run:
  ```
  git clone https://github.com/reizel-yase/react-inscale-campaign.git
  ```
- After repository has been cloned, run:
  ```
  cd react-inscale-campaign
  npm i
  json-server --watch db.json
  ```
  This is what the terminal/cmd will look like:
  ```
  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/campaigns

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
  ```
- Open the browser and go to `http://localhost:3000/campaigns` to test if JSON server is running. A list of campaigns in JSON format should be displayed
- Go back to terminal/CMD and open a new window, run:
  ```
  npm run build
  npm run start
  ```
- After successful compilation, open the browser and go to `http://localhost:8080` 

## Testing global method `AddCampaigns()` in the browser console

- Open the browser console, run
  *Note: 
    - Please refer to the data structure below
    - Do not add `ID` field, it's automatically added as user add campaigns
  ```
  AddCampaigns([
    {"name":"Lorem Ipsum","startDate":"9/19/2019","endDate":"3/9/2020","Budget":19100}, 
    {"name":"Dolor sit amet","startDate":"9/19/2019","endDate":"3/9/2020","Budget":99100}
  ])
  ```
