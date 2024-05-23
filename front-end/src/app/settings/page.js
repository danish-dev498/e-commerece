import { getPizza } from '@/services/apiServices';
import React from 'react';

const Setting = async () => {
  const users = await getPizza();

  console.log('===============check users 0ver here=============', users);
  return <div>Setting</div>;
};

export default Setting;
