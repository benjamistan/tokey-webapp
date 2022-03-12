import { loginHandler } from '@storyofams/next-password-protect';

export default loginHandler('thierryHenry14', {
	// Options go here (optional)
	cookieName: 'next-password-protect',
	cookieMaxAge: 21600000,
});
