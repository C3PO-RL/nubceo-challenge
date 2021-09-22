import React,{useContext} from 'react';
import Pagination from './Pagination';
import AppContext from '../context/AppContext';

const Footer = () => {
    const { condRender } = useContext(AppContext);
  return (
    <div>
      <footer className='page-footer font-small blue'>
        <div className='footer-copyright text-center d-flex  justify-content-around py-3'>
          <div>
            <i className='bi bi-github '></i>
            <a href='https://github.com/C3PO-RL' target='_blank' rel='noreferrer'>
              github.com/C3PO-RL
            </a>
          </div>
{condRender ? (
        <div></div>
      ) : (<Pagination />
        
      )}
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
