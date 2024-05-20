import React from 'react';
import Layout1 from './Layout1';
import Layout2 from './Layout2';

function Layout() {
  return (
    <div className='container '>
      <div className='row'>
        <div className='col'><Layout1 /></div>
        <div className='col'><Layout2 /></div>
      </div>
    </div>
  );
}

export default Layout;
