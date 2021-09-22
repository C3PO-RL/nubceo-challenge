import React from 'react';
import Auth from './Auth';
import landing from '../assets/landing.png';

const LandingPage = (props) => {
  const logIn = () => {
    Auth.login(() => {
      props.history.push('/home');
    });
  };
  return (
    <div className='container  mt-4 h-100 text-center  col d-flex justify-content-center'>
      <div className='card shadow'>
        <img className=' shadow   bg-black rounded' src={landing} alt='' />
        <div className='card-body'>
          <h1 className='card-title'>Bands Page</h1>
          <div className='mb-2 text-center'>
            <button onClick={logIn} className='btn btn-success'>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
