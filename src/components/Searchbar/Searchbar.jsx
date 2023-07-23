import { toast } from 'react-toastify';
import { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import css from './Searchbar.module.css';


export function Searchbar ({onSubmit}) {
  const [query, setQuery] = useState('');

 const handleChangeQ = evt => {
    setQuery(evt.target.value.toLowerCase());
    
  };

   const handleSubmit = evt => {
    evt.preventDefault();

    // перевірка на пусту строку в відправленні запроса
    if (query.trim() === '') {
      toast('Please enter your search query')
      return;
    }
  
    onSubmit(query);
    setQuery('');
  };


 return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={handleSubmit}>
          <button type="submit" className={css.buttonSearch}>
            <span className={css.buttonLabel}><HiMagnifyingGlass size="24" className={css.svg} /></span>
          </button>

          <input
            className={css.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChangeQ}
          />
        </form>
      </header>
    );

}

// export class Searchbar extends Component {
//   state = {
//     query: '',
    
//   };

  // handleChangeQ = evt => {
  //   this.setState({ query: evt.target.value.toLowerCase()});
    
  // };


  // handleSubmit = evt => {
  //   evt.preventDefault();

  //   // перевірка на пусту строку в відправленні запроса
  //   if (this.state.query.trim() === '') {
  //     toast('Please enter your search query')
  //     return;
  //   }
  
  //   this.props.onSubmit(this.state.query);
  //   this.setState({ query: '' });
  // };

//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form className={css.form} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.buttonSearch}>
//             <span className={css.buttonLabel}><HiMagnifyingGlass size="24" className={css.svg} /></span>
//           </button>

//           <input
//             className={css.input}
//             name="query"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.query}
//             onChange={this.handleChangeQ}
//           />
//         </form>
//       </header>
//     );
//   }
// }
