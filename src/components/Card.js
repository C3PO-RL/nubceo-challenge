import React, { useContext } from 'react';
import band from '../assets/band.png';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Card = ({ bandName, year, country, bandId, bandGenre, bandMembers }) => {
  const { dispatch } = useContext(AppContext);

  const bandInfo = () => {
    dispatch({
      type: 'SELECTED_BAND',
      payload: bandId,
    });
    dispatch({
      type: 'SELECTED_BAND_GENRE',
      payload: bandGenre,
    });
    dispatch({
      type: 'SELECTED_BAND_MEMBERS',
      payload: bandMembers,
    });
      dispatch({
      type: 'CONDITIONAL_RENDERING',
      payload: true,
    });
  };
  return (
    <div className='card border shadow p-3 mb-5 bg-white rounded'>
      <img className=' shadow   bg-black rounded' src={band} alt='' />
      <div className='card-body'>
        <h4 className='card-title text-center'>{bandName}</h4>
        <p className='card-text text-center text-secondary'>{year}</p>
        <p className='card-text text-center text-secondary'>{country}</p>
      </div>
      <div className='mb-2   text-center'>
        <Link
          to={`/band/${bandName}`}
          type='button'
          className='btn btn-info'
          onClick={() => bandInfo()}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default Card;
