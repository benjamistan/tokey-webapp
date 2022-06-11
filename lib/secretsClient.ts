import { SecretsManagerClient } from '@aws-sdk/client-secrets-manager';

let credentials;
export let secretsClient: SecretsManagerClient;

//Uses creds from env.local in Staging, no creds for Production
if (process.env.ENVIRONMENT == 'staging') {
	credentials = {
		accessKeyId: process.env.STAGING_AWS_ACCESS_KEY_ID as string,
		secretAccessKey: process.env.STAGING_AWS_SECRET_ACCESS_KEY as string,
	};
	secretsClient = new SecretsManagerClient({
		region: process.env.AWS_REGION,
		credentials: credentials,
	});
} else {
	secretsClient = new SecretsManagerClient({ region: process.env.AWS_REGION });
}
