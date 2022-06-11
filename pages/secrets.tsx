import { GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import { useEffect, useState } from 'react';
import { secretsClient } from '../lib/secretsClient';

const Secrets = () => {
	const [secret, setSecret] = useState('');

	console.log('this is what we are getting from secretsClient:', secretsClient);

	useEffect(() => {
		async function getSecret() {
			const params = {
				SecretId:
					'arn:aws:secretsmanager:eu-west-2:284217827608:secret:/alchemykey/mumbai-Hce4lB',
			};
			const command = new GetSecretValueCommand(params);
			const res = await secretsClient.send(command);
			const json: any = res.SecretString;
			const value = JSON.parse(json);
			const secret = value.NEXT_PUBLIC_ALCHEMY_KEY_POLYGON_MUMBAI;
			setSecret(secret);
		}
		getSecret();
	}, []);

	return (
		<div className='flex justify-center text-center bg-white pt-20 pb-40'>
			Alchemy Key: {secret}
		</div>
	);
};

export default Secrets;
