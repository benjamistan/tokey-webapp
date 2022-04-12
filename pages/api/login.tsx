import { loginHandler } from '@storyofams/next-password-protect';

export default loginHandler('th14', {
	// Options go here (optional)
	cookieName: 'next-password-protect',
	cookieMaxAge: 21600000,
});
