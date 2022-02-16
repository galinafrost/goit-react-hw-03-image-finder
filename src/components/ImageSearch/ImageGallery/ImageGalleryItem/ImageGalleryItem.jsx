import PropTypes from 'prop-types';

import styles from './image-gallery-item.css';

const ImageGalleryItem = ({ webformatURL, tags, onClick }) => {

  return (
    <li onClick={onClick} className={styles.item}>
          <img className={styles.itemFoto} src={webformatURL} alt={tags} />
        </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}