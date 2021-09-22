import React, { useEffect, useContext } from 'react';
import Card from './Card';
import AppContext from '../context/AppContext';
import NavBar from './NavBar';
import Footer from './Footer';

const Container = () => {
  const { getBands, bands, currentPage, bandsPerPage, getGenre, getAlbums } =
    useContext(AppContext);

  //pagination
  const indexOfLastBand = currentPage * bandsPerPage;
  const indexOfFirstBand = indexOfLastBand - bandsPerPage;
  const currentBands = bands.slice(indexOfFirstBand, indexOfLastBand);

  //get info (async)
  useEffect(() => {
    getBands();
    getGenre();
    getAlbums();
  }, []);

  return (
    <div>
      <NavBar />
      <div className='container mt-3 d-flex justify-content-center h-100 bg-info align-items-center overflow-auto'>
        <div className='row'>
          {currentBands.map((band) => {
            return (
              <div key={band.id} className='col-md-6 p-3'>
                <Card
                  bandName={band.name}
                  year={band.year}
                  country={band.country}
                  bandId={band.id}
                  bandGenre={band.genreCode}
                  bandMembers={band.members}></Card>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Container;
