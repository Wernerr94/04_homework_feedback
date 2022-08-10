import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
export default function ImageGallery({ images, modalOpener }) {
  if (!images) {
    return null;
  }

  return (
    <ul className={css.gallery}>
      {images.map(img => (
        <ImageGalleryItem
          key={img.id}
          previewURL={img.webformatURL}
          onOpenModal={() => modalOpener(img)}
        />
      ))}
    </ul>
  );
}
