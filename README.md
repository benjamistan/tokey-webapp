![Tokey](https://s3.eu-west-2.amazonaws.com/tokey.app/tokey_logo300x99.svg)

This is an NFT Marketplace configured to run on AWS.

Note to the casual observer - this repo uses a Sanity store for enriching metadata on NFTs in the marketplace. As such, you will not be able to run this locally on your side and have the full site experience.

<br><br>

# Running Locally

Create a `.env.local` file at the root of the repo. You'll need to create the following env vars:

ENVIRONMENT=staging
STAGING_PASSWORD=your_staging_password
TOKEY_MKT_ADDRESS_MUMBAI=your_marketplace_contract_address
ALCHEMY_KEY_POLYGON_MUMBAI=your_alchemy_API_key

Navigate to the `studio` folder and run `npx @sanity/cli init`. This will require you to authenticate to Tokey's Sanity DB.

Once you're authenticated, run `npm install -g @sanity/cli` to install the cli. You can then run Sanity from the `studio` folder at a command line by sanity start. The Dashboard is available at http://localhost:3333.

Sanity will only accept connections from http://localhost:3000, so if your local site is running on another port, you will see errors.

## Pre-build Config

In `next.config.js`, update the AWS_REGION param to your desired region. By default it is eu-west-2 (London).

## Building the Docker image

From the root of this repo, run `docker build . -t client`.

<br>

## Running NFTM in a Docker container

Run it using `docker run -p 3000:3000 client`.
