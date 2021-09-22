import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Auth from './Auth';

const NavBar = () => {
  const { bands, dispatch, condRender } = useContext(AppContext);

  const [filteredId, setFilteredId] = useState(0);
  const [filteredBandGenre, setFilteredBandGenre] = useState('');
  const [filteredBandMembers, setFilteredBandMembers] = useState([]);
  const [filteredBandName, setFilteredBandName] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = bands.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === '') {
      setFilteredId(0);
      setFilteredBandGenre('');
      setFilteredBandMembers([]);
      setFilteredBandName('');
    } else {
      setFilteredId(newFilter.map((x) => x.id));
      setFilteredBandGenre(newFilter.map((x) => x.genreCode));
      setFilteredBandMembers(newFilter.map((x) => x.members));
      setFilteredBandName(newFilter.map((x) => x.name));
    }
  };

  let history = useHistory();
  const handleClick = () => {
    dispatch({
      type: 'SELECTED_BAND',
      payload: filteredId[0],
    });
    dispatch({
      type: 'SELECTED_BAND_GENRE',
      payload: filteredBandGenre[0],
    });
    dispatch({
      type: 'SELECTED_BAND_MEMBERS',
      payload: filteredBandMembers[0],
    });

    history.push(`/band/${filteredBandName}`);
    setFilteredId(0);
    setFilteredBandGenre('');
    setFilteredBandMembers([]);
    setFilteredBandName('');

    if (filteredId !== 0) {
      dispatch({
        type: 'CONDITIONAL_RENDERING',
        payload: true,
      });
    }
  };

  const goBack = () => {
    history.push('/home');
    dispatch({
      type: 'CONDITIONAL_RENDERING',
      payload: false,
    });
  };

  const logOut = () => {
    dispatch({
      type: 'CONDITIONAL_RENDERING',
      payload: false,
    });
    Auth.logout(() => {
      history.push('/login');
    });
  };

  return (
    <div>
      <nav className='navbar navbar-light bg-light '>
        <div className='container-fluid  '>
          <div>
            <button onClick={goBack} className='btn btn-primary '>
              HOME
            </button>
            <button onClick={logOut} className='btn btn-danger ml-10'>
              LOGOUT
            </button>
          </div>

          {condRender ? (
            <div></div>
          ) : (
            <div>
              <form className='d-flex '>
                <input
                  onChange={handleFilter}
                  className='form-control me-2'
                  type='search'
                  placeholder='Band search'
                  aria-label='Search'
                />
                <div className='btn btn-success' onClick={handleClick}>
                  Search
                </div>
              </form>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
