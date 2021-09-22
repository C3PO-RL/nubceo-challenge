import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import rocker from '../assets/rocker.png';
import NavBar from './NavBar';
import Footer from './Footer';

const Band = () => {
  const { genre, albums, selectedBand, selectedBandGenre, selectedBandMembers } =
    useContext(AppContext);
  console.log(selectedBand, 'id selectedband in component');
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [filteredGenre, setFilteredGenre] = useState([]);

  useEffect(() => {
    const filterAlbums = albums.filter((album) => {
      return album.bandId === selectedBand;
    });
    const filterGenre = genre.filter((gen) => {
      return gen.code === selectedBandGenre;
    });
    setFilteredAlbums(filterAlbums);
    setFilteredGenre(filterGenre);
  }, []);
  console.log(filteredAlbums, 'album');
  console.log(filteredGenre, 'genre');
  console.log(selectedBandMembers, 'members');
  return (
    <div>
      <NavBar />
      <div className='container d-flex justify-content-center h-100  align-items-center overflow-auto mt-3'>
        <div className='card border shadow p-3 mb-5 bg-white rounded'>
          <div className='  text-center'>
            <img className=' shadow rounded ' src={rocker} />
          </div>

          <div className='card-body d-flex justify-content-around '>
            <div className='row'>
              <h4 className='card-title text-center '>Genre:</h4>
              {filteredGenre.map((value) => {
                return <p className='text-center row-md-2 '> {value.name}</p>;
              })}
            </div>
            <div className='row'>
              <h4 className='card-title text-center '>Members</h4>
              {selectedBandMembers.map((value) => {
                return <p className='card-text text-center text-secondary column'>{value.name}</p>;
              })}
            </div>
            <div className='row'>
              <h4 className='card-title text-center '>Albums</h4>
              {filteredAlbums.map((value) => {
                return <p className='card-text text-center text-secondary column'>{value.name}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Band;
