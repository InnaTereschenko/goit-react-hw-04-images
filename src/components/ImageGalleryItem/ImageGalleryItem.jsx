// import SimpleLightbox from "simplelightbox";
// import 'simplelightbox/dist/simple-lightbox.min.css';
import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal.jsx';

export class ImageGalleryItem extends Component {
  state = {
    webformatURL: '',
    largeImageURL: '',
    tags: '',
    isShowModal: false,
    
  };



// lightbox = null;

//   componentDidMount() {
//     this.lightbox = new SimpleLightbox('.gallery a', {
//       captionDelay: 250,
//       captionsData: 'alt',
//       nav: true,
//     });
//   }



  toggleModal = () => {
    this.setState(({ isShowModal }) => ({ isShowModal: !isShowModal }));
  };
  render() {
    const { isShowModal } = this.state;
    const  { webformatURL, largeImageURL, tags } = this.props; 
    return (
      <li className={css.imageGalleryItem}>


{/* <a href={largeImageURL}>
          <img src={webformatURL} alt={tags} onClick={this.toggleModal} />
        </a> */}


        <img 
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
 
        />
        {isShowModal && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}
          />         
        )}
      </li>
    );
  }
}
