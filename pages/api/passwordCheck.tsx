import { passwordCheckHandler } from '@storyofams/next-password-protect';

const stagingPassword: any = process.env.STAGING_PASSWORD;

export default passwordCheckHandler(stagingPassword, {
	// Options go here (optional)
	cookieName: 'next-password-protect',
});
