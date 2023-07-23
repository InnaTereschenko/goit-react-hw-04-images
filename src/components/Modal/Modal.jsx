import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ largeImageURL, tags, onClose }) => {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    //закриття модалки при кліку на escape
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  //закриття при кліку на бекдроп
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
};

// export class Modal extends Component {
//  modalRoot = document.querySelector('#modal-root');

// componentDidMount() {
//   window.addEventListener('keydown', this.handleKeyDown);
// }

// componentWillUnmount() {
//   window.removeEventListener('keydown', this.handleKeyDown);
// }
// //закриття модалки при кліку на escape
// handleKeyDown = event => {
//   if (event.code === 'Escape') {
//     this.props.onClose();
//   }
// };
// //закриття при кліку на фон
// handleBackdropClick = event => {
//   if (event.currentTarget === event.target) {
//     this.props.onClose();
//   }
// };

//   render() {
//     const { largeImageURL, tags } = this.props;
//     return createPortal(
//       <div className={css.overlay} onClick={this.handleBackdropClick}>
//         <div className={css.modal}>
//           <img src={largeImageURL} alt={tags} />
//         </div>
//       </div>,
//       this.modalRoot
//     );
//   }
// }
