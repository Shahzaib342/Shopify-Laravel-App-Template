FROM php:8.0.13-fpm-alpine

WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql