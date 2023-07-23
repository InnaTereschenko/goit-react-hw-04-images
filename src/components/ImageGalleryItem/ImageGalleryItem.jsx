import React, { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal.jsx';
// import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  // const [webformatURL, setWebformatURL] = useState('');
  // const [largeImageURL, setLargeImageURL] = useState('');
  // const [tags, setTags] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => setIsShowModal(true);
  const closeModal = () => setIsShowModal(false);

  return (
    <li className={css.imageGalleryItem}>
      <img src={webformatURL} alt={tags} onClick={showModal} />
      {isShowModal && (
        <Modal largeImageURL={largeImageURL} tags={tags} onClose={closeModal} />
      )}
    </li>
  );
};

// export class ImageGalleryItem extends Component {
//   state = {
//     webformatURL: '',
//     largeImageURL: '',
//     tags: '',
//     isShowModal: false,

//   };

//   toggleModal = () => {
//     this.setState(({ isShowModal }) => ({ isShowModal: !isShowModal }));
//   };
//   render() {
//     const { isShowModal } = this.state;
//     const  { webformatURL, largeImageURL, tags } = this.props;
//     return (
//       <li className={css.imageGalleryItem}>

// {/* <a href={largeImageURL}>
//           <img src={webformatURL} alt={tags} onClick={this.toggleModal} />
//         </a> */}

//         <img
//           src={webformatURL}
//           alt={tags}
//           onClick={this.toggleModal}

//         />
//         {isShowModal && (
//           <Modal
//             largeImageURL={largeImageURL}
//             tags={tags}
//             onClose={this.toggleModal}
//           />
//         )}
//       </li>
//     );
//   }
// }
