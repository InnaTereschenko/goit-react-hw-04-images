import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import css from './Modal.module.css';



export class Modal extends Component {
 modalRoot = document.querySelector('#modal-root');

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  //закриття модалки при кліку на escape
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  //закриття при кліку на фон
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>,
      this.modalRoot
    );
  }
}
