import { loginHandler } from '@storyofams/next-password-protect';

const stagingPassword: any = process.env.STAGING_PASSWORD;

export default loginHandler(stagingPassword, {
  // Options go here (optional)
  cookieName: 'next-password-protect',
  cookieMaxAge: 21600000,
});
