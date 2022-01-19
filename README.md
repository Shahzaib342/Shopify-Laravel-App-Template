# prerequisite
1. **composer**

[Linux](https://getcomposer.org/download/)

[windows](https://getcomposer.org/download/)

2. **Ngrok**

[Download and install](https://ngrok.com/download)

# Setup
After cloning the folder

Run
```bash
composer install
```
Run
```bash
npm install & npm run dev
```
After this
Run
```bash
php artisan serve
```

and then run NGROK for the App URL

```bash
ngrok http 8000
```

# Environment Changes
Create a .env file and paste content of .env.example

Replace the `APP_URL` in .env with your ngrok Https Url.

Change SHOPIFY_API_KEY and SHOPIFY_API_SECRET in .env file

Create the database whatever name you like and add the details in .env file

```bash
DB_DATABASE=your_dbname
DB_USERNAME=your_usename
DB_PASSWORD=your_password
```

# Migrations
Run this command for migrations
```bash
php artisan migrate
```

# Steps to create app on development store
1. From the Shopify App Store, click on the app you’d like to add.
2. Click on the Add app button.
3. Enter your ngrok address in App URL like
   https://b2dd-110-93-199-138.ngrok.io
and in Allowed redirection URL(s)
https://b2dd-110-93-199-138.ngrok.io/authenticate
to authenticate the app.
4. Confirm the installation of the app.
5. Start using the app.


# Shopify configuration
In config folder update the shopify-app.php
1. replace the name `app_name` with your Shopify App name which you have created
2. copy the Api key from the Shopify App and paste in `api_key`  
3. copy the Secret key from the Shopify App and paste in `api_secret`

# Video Tutorial
[Youtube](https://www.youtube.com/watch?v=0SF0S2wn3cM&t=537s)

# Detail Documentation to setup from scratch 
[Doc](https://shamsuljewel.medium.com/make-a-shopify-app-with-laravel-framework-724c7095815c)
