import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

import styles from './image-gallery.module.css';

const ImageGallery = ({ images, handleClick }) => {
  const elements = images.map(({ id, ...props }) => (
    <ImageGalleryItem key={id} {...props} onClick={() => handleClick(props)} />
  ));
  console.log(elements);
  return (
    <div>
      <ul className={styles.list}>{elements}</ul>
    </div>
  );
};

export default ImageGallery;

ImageGallery.defaultProps = {
  images: [],
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ),
  handleClick: PropTypes.func.isRequired,
};
