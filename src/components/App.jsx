import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as pixabayapi from '../services/pixabayapi';
import React, { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import Loader from './Loader/Loader.jsx';
import Button from './Button/Button.jsx';

export function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoadMoreBtnVisible, setIsLoadMoreBtnVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleClickLoadMore = () => {
    return setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchImages = async (query, page) => {
      try {
        setIsLoading(true);
        const data = await pixabayapi.fetchImages({ query, page });
        if (data.hits <= 0) {
          toast.warning('Sorry. There are no images ... 😭');
          return;
        }
        if (page === 1) {
          toast.info(`Found ${data.total} images`);
        }
        setImages(prevImages => [...prevImages, ...data.hits]);
        setTotalHits(data.totalHits);
        setIsLoadMoreBtnVisible(page < Math.ceil(data.totalHits / 12));
      } catch (err) {
        toast.error('Sorry, something goes wrong');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages(query, page);
  }, [query, page]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      <Searchbar onSubmit={handleFormSubmit} />

      {images.length > 0 && <ImageGallery images={images}></ImageGallery>}

      {isLoading && <Loader />}

      {isLoadMoreBtnVisible && !isLoading && (
        <Button onClick={handleClickLoadMore} />
      )}

      <ToastContainer autoClose={1500} position="top-center" theme="light" />
    </div>
  );
}

// export class App extends Component {
//   state = {
//     query: '',
//     images: [],
//     page: 1,
//     totalHits: 0,
//     isLoadMoreBtnVisible: false,
//     isLoading: false,

//   };

// async componentDidUpdate(prevProps, prevState) {
//   const { query, page } = this.state;
//   // перевірка на пусту строку та введення нового запиту, а також що поточна сторінка змінилась
//   if (
//     (prevState.query !== query && query !== '') ||
//     prevState.page !== page
//   ) {
//     try {
//       this.setState({ isLoading: true }); //*поки пішов запит показується лоадер

//       const images = await pixabayapi.fetchImages({ query, page });
//       if (images.hits <= 0) {
//         toast.warning('Sorry. There are no images ... 😭');
//         return;
//       }
//       if (page === 1) {
//         toast.info(`Found ${images.total} images`);
//       }

//       // розпиляємо об'єкт з отриманими раніше результатами + об'єкт з новими результатами
//       this.setState(prevState => ({
//         images: [
//           ...prevState.images,
//           ...this.getNormalizedImages(images.hits),
//         ],
//         isLoadMoreBtnVisible: page < Math.ceil(images.totalHits / 12),
//       }));
//     } catch (err) {
//       toast.error('Sorry, something goes wrong');
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   }
// }
// // витягуємо для збереження в стейт тільки ті поля, які нам потрібні
// getNormalizedImages(array) {
//   return array.map(({ id, webformatURL, largeImageURL, tags }) => ({
//     id,
//     webformatURL,
//     largeImageURL,
//     tags,
//   }));
// }

// handleFormSubmit = query => {
//   this.setState({ query, images: [], page: 1 });
// };

// handleClickLoadMore = () => {
//   return this.setState(prevState => ({ page: prevState.page + 1 }));
// };

//   render() {
//     return (
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: '1fr',
//           gridGap: '16px',
//           paddingBottom: '24px',
//         }}
//       >

//         <Searchbar onSubmit={this.handleFormSubmit} />

//         {this.state.images.length > 0 && (
//           <ImageGallery images={this.state.images}></ImageGallery>
//         )}

//         {this.state.isLoading && <Loader />}

//         {this.state.isLoadMoreBtnVisible && !this.state.isLoading && (
//           <Button onClick={this.handleClickLoadMore} />
//         )}

//         <ToastContainer autoClose={1500} position="top-center" theme="light" />
//       </div>
//     );
//   }
// }
