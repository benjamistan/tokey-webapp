import { Client } from '@hubspot/api-client';
import type { NextApiRequest, NextApiResponse } from 'next';

const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;
// const HUBSPOT_PORTAL_ID = '26228023';
// const HUBSPOT_FORM_GUID = 'b46eeabc-f062-44f8-ae5b-43f62b64f708';

type Response = {
  success: boolean;
  email?: string;
  message?: string;
};

const postToHubspot = async function (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  console.log('Inbound req to this API is', req);
  const { email } = req.body;

  const hubspotClient = new Client({ accessToken: HUBSPOT_API_KEY });

  const contactObject = {
    properties: {
      email: email,
    },
  };

  if (email == '') {
    return res
      .status(200)
      .json({ success: false, message: 'Hmmm...that looked empty...' });
  }

  try {
    await hubspotClient.crm.contacts.basicApi.create(contactObject);
  } catch (error) {
    //console.log('Error calling Hubspot:', error);
    //console.log('res', res);
    return res.status(200).json({
      success: false,
      message: `Either that wasn't a real email or we already have it 😔`,
    });
  }

  res
    .status(200)
    .json({ success: true, email, message: 'Success! Check your inbox!' });
};

export default postToHubspot;
