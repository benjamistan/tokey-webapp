import dynamic from 'next/dynamic';

const HubspotForm = dynamic(() => import('react-hubspot-form'), { ssr: false });

export default function Form(props) {
  return (
    <HubspotForm
      portalId="26228023"
      formId="b46eeabc-f062-44f8-ae5b-43f62b64f708"
      onSubmit={() => console.log('submitted')}
      loading={<div>Loading...</div>}
    />
  );
}
