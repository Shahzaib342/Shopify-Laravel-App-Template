
# Dcoker Setup Guide

To run this application in your local machine, you need to install Docker along with ```docker-compose ``` utility.
## Step 0: Installation
- Install latest stable version of Docker
    - For [Linux]
    - For [Windows] 
- Install the latest stable version of ```docker-compose``` along with that.

## Step 1: Configuration

Assuming you already have cloned the repo, you need to update the following configurations to start the services. Please note that crrent configuration utilizes ports `4040` and `8000` of the host machine. If these ports are not available, please update the `docker-compose.yaml` and replace the left side of the colon under ports configuration of `nginx` and `ngrok` services with available ports.

1. #### Configure MySQL Credentials
    - Create a new file in `env` folder with the name `mysql.env`
    - Copy the contents of `env/example.mysql.env` to `env/mysql.env`
    - Update the `env/mysql.env` file with your credentials (this doesn't need to be the same on your host machine)
    - Name your mysql user other than root to avoid errors
    - Copy database name, user and password to your project's `.env` file
    - Update the `DB_HOST` in the `.env` file of your project and name it `mysql`. To connect it to your mysql provider you need to get the IP of the mysql container. 
2. #### Configure Ngrok Credentials
    - Create a new file in `env` folder with the name `ngrok.env`
    - Copy the contents of `env/example.ngrok.env` to `env/ngrok.env`
    - Replace the `NGROK_AUTH` placeholder with your Ngrok Auth key. You need to sign up to Ngrok.io to get your auth key
3. #### Shopify App Credentials
    - Obtain Shopify credentials from partner dashboard and update the relevant `SHOPIFY_*` fields in the `.env` file of your project as well as the config/shopify-app.php

## Step 2: Running Docker Containers

After completing the above steps, you need to run the following command in project's root directory:

```
$ docker-compose up -d server
```
if the setup was successful, you will see the running containers by typing the following command (Linux): 
```
$ docker container ls
```
## Step 3: Running Composer

If you are cloning your app for the first time, you need to install dependencies first. You can do it by the following command: 
```sh
$ docker-compose run --rm composer install
```

Similarly you can run `composer update` to update dependencies when needed.

## Step 4: Migrating the Database

Either you are installing your app for the first time or running a subsequent migrations, you'll need to run the following command, 
```sh
$ docker-compose run --rm artisan migrate
```

Similarly, you can run any artisan command.


## Step 5: Copying Ngrok URL

While all your services running, go to `http://localhost:4040/inspect/http` and copy the https URL from the dashboard screen.  Paste this URL in your Shopify app's URL and test it by installing the app on a test store.




   [Linux]: <https://www.google.com/search?q=how+to+install+docker+on+ubuntu&source=hp&ei=oujbYcbvIai5gwf4-pSQBA&iflsig=ALs-wAMAAAAAYdv2sslLyMc1_bSV9PTORz227gP-Bxmc&oq=how+to+install+docker+on+&gs_lcp=Cgdnd3Mtd2l6EAEYADIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CAgAEIAEELEDOggILhCxAxCDAToLCAAQgAQQsQMQgwE6BQguEIAEOggIABCxAxCDAToLCC4QsQMQxwEQowI6BQgAELEDUPMcWNVAYI1QaAFwAHgAgAGxAogB0iySAQYyLTI0LjGYAQCgAQGwAQA&sclient=gws-wiz>
   [Windows]: <https://www.google.com/search?q=how+to+install+docker+on+windows&ei=r-jbYdepDYqzkwX6krHQCA&ved=0ahUKEwiXve7Z3Kb1AhWK2aQKHXpJDIoQ4dUDCA4&uact=5&oq=how+to+install+docker+on+windows&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgcIABCwAxBDOgQIABBDSgQIQRgASgQIRhgAUIUEWIsSYOYdaAFwAngAgAHyAYgBhQ6SAQMyLTiYAQCgAQHIAQrAAQE&sclient=gws-wiz>
