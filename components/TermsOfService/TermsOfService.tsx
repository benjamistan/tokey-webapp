import React from 'react';

const style = {
  container: 'text-center h-screen bg-white pt-96',
  text: 'inline-block align-middle text-5xl',
};

function TermsOfService() {
  return (
    <div className={style.container}>
      <span className={style.text}>Terms of Service</span>
    </div>
  );
}

export default TermsOfService;
