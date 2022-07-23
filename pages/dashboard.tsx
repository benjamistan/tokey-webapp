import React from 'react';

const style = {
  container: 'text-center h-screen bg-white pt-96',
  text: 'inline-block align-middle text-5xl',
};

const account = () => {
  return (
    <div className={style.container}>
      <span className={style.text}>Dashboard</span>
    </div>
  );
};

export default account;
