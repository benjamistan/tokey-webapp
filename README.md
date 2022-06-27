![Tokey](https://s3.eu-west-2.amazonaws.com/tokey.app/tokey_logo300x99.svg)

This is an NFT Marketplace.

<br>

## Running Locally

Create a `.env.local` file at the root of the repo. You'll need to create the following env vars:

ENVIRONMENT=staging
STAGING_PASSWORD=your_local_password

## Pre-build Config

In `next.config.js`, update the AWS_REGION param to your desired region. By default it is eu-west-2 (London).

## Building the Docker image

From the root of this repo, run `docker build . -t tokey-webapp`.

<br>

## Running NFTM in a Docker container

Run it using `docker run -p 3000:3000 tokey-webapp`.
