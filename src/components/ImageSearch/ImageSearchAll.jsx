import { Component } from 'react';
import { Hearts } from  'react-loader-spinner'


import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from '../../shared/components/Button';
import Modal from '../../shared/components/Modal';

import { searchImages } from '../../shared/services/images';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import styles from './image-search.module.css';

class ImageSearchAll extends Component {
  state = {
    images: [],
    page: 1,
    search: '',
    error: null,
    loading: false,
    modalOpen: false,
    modalContent: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (search !== prevState.search || page !== prevState.page) {
      this.setState({
        loading: true,
      });
      this.fetchImages();
    }
  }

  async fetchImages() {
    const { page, search } = this.state;

    try {
      const data = await searchImages(page, search);
      this.setState(prevState => {
        return {
          images: [...prevState.images, ...data.hits],
          loading: false,
          error: null,
        };
      });
    } catch (error) {
      // console.log('error', error)
      this.setState({
        error: error.message,
        loading: false,
      });
    }
  }

  changeSearch = ({ search }) => {
    this.setState({ search, images: [] });
  };

  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });

    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 500);
  };


  showModal = image => {
    this.setState({
      modalOpen: true,
      modalContent: image,
    });
  };

  hideModal = () => {
    this.setState({
      modalOpen: false,
      modalContent: null,
    });
  };

  

  render() {
    const { changeSearch, loadMore, showModal, hideModal } = this;
    const { loading, images, error, search, modalContent, modalOpen } =
      this.state;

    return (
      <div className={styles.container}>
        <Searchbar onSubmit={changeSearch} />
        {error && <p>Упс, что-то пошло не так</p>}
        {!images.length && search && !loading && !error && (
          <p>Упс, а ничего нет, попробуйте найти синоним</p>
        )}
        <ImageGallery handleClick={showModal} images={images} />
        {loading && <Hearts color="#c576b4" height={80} width={80} />}
        {modalOpen && (
          <Modal handleClose={hideModal}>
            <div>
              <img src={modalContent.largeImageURL} alt={modalContent.tags} />
            </div>
          </Modal>
        )}
        {Boolean(images.length) && (
          <Button onClick={loadMore} text="Еще" />
        )}
      </div>
    );
  }
}

export default ImageSearchAll;

