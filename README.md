# NFTM

This is a basic NFT Marketplace.

## Building the Docker image

From the root of this repo, run `docker build -t . nftm`.

## Running NFTM in a Docker container

Run it using `docker run -p 3000:3000 nftm`.

## Testing against a local hardhat node

From the repo root, run `npx hardhat node`.
In a separate window, run `npx hardhat run scripts/deploy.js --network localhost`. This will deploy the contracts to the local node. Assuming no changes have been made to HH config, the addresses for the NFT and Market contracts should be the same each time. No need to update `config.js`.

## Testing against Mumbai testnet

Ensure you have a `.secret` file at the root of the repo which contains only the PK of your Matic Mumbai account, no quotes. This account must have Matic in it, or the tx to create the contracts will fail.

From the root, run `npx hardhat run scripts/deploy.js --network mumbai`.

Ensure you update the hardcoded contract address values in `config.js`.
