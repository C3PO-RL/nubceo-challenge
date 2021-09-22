import axios from 'axios';
import React, { useReducer } from 'react';
import AppReducer from '../context/AppReducer';
import AppContext from './AppContext';

const AppState = (props) => {
  const initialState = {
    //bands information
    bands: [],
    genre: [],
    albums: [],
    selectedBand: null,
    selectedBandGenre: null,
    selectedBandMembers: [],

    //Pagination information
    currentPage: 1,
      bandsPerPage: 4,
    
      //conditional rendering

      condRender:false
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getBands = async () => {
    const res = await axios.get(
      'https://my-json-server.typicode.com/improvein/dev-challenge/bands',
    );

    dispatch({
      type: 'GET_BANDS',
      payload: res.data,
    });
  };

  const getGenre = async () => {
    const res = await axios.get(
      'https://my-json-server.typicode.com/improvein/dev-challenge/genre',
    );

    dispatch({
      type: 'GET_GENRE',
      payload: res.data,
    });
  };

  const getAlbums = async () => {
    const res = await axios.get(
      'https://my-json-server.typicode.com/improvein/dev-challenge/albums',
    );

    dispatch({
      type: 'GET_ALBUMS',
      payload: res.data,
    });
  };

  return (
    <AppContext.Provider
      value={{
        bands: state.bands,
        genre: state.genre,
        albums: state.albums,
        selectedBand: state.selectedBand,
        selectedBandGenre: state.selectedBandGenre,
        selectedBandMembers: state.selectedBandMembers,
        getBands,
        getGenre,
        getAlbums,
        currentPage: state.currentPage,
        bandsPerPage: state.bandsPerPage,
              dispatch,
        condRender:state.condRender,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
