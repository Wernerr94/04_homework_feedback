// import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Loader from '../Loader';
import Button from '../Button';
import Modal from '../Modal';
import './ImageFinderApp.css';
import imageAPI from '../services/pixabay-api';

export default function ImageFinderApp() {
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);
  const [totalImages, setTotalImages] = useState(0);
  const [pickedImage, setPickedImage] = useState(null);
  const [pages, setPages] = useState(1);
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleLoadMore = () => {
    setPages(pages + 1);
  };
  const toggleModal = img => {
    setShowModal(!showModal);
    setPickedImage(img);
  };
  const handleSubmit = value => {
    setValue(value);
    setPages(1);
  };

  useEffect(() => {
    if (value === '') {
      return;
    }
    setShowLoader(true);
    setTimeout(() => {
      imageAPI
        .getImages(value, pages)
        .then(res => {
          setImages(prevState => [...prevState, ...res.hits]);
          setTotalImages(res.total);
        })
        .finally(() => setShowLoader(false));
    }, 200);
  }, [value, pages]);

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} modalOpener={toggleModal} />
      {images.length !== totalImages && !showLoader && (
        <Button onLoad={handleLoadMore} />
      )}
      {showLoader && <Loader color="#457b9d" height={300} width={300} />}

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={pickedImage.largeImageURL} alt={pickedImage.tags} />
        </Modal>
      )}
    </div>
  );
}
