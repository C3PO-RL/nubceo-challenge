import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Pagination = () => {
  const { bands, bandsPerPage, dispatch } = useContext(AppContext);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(bands.length / bandsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumber) => {
    dispatch({
      type: 'CHANGE_PAGE',
      payload: pageNumber,
    });
  };

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item p-1'>
            <a onClick={() => paginate(number)} className='btn btn-outline-primary '>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
