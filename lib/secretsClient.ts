import { SecretsManagerClient } from '@aws-sdk/client-secrets-manager';

let credentials;

//Uses creds from env.local in staging env
if (process.env.ENVIRONMENT == 'staging') {
	credentials = {
		accessKeyId: process.env.STAGING_AWS_ACCESS_KEY_ID as string,
		secretAccessKey: process.env.STAGING_AWS_SECRET_ACCESS_KEY as string,
	};
} else {
	credentials = undefined;
}

export const secretsClient = new SecretsManagerClient({
	region: process.env.AWS_REGION,
	credentials: credentials,
});
