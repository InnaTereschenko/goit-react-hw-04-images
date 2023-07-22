import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
    <div className={css.loader}>
    <InfinitySpin 
  width='200'
  color="#0000FF"
/>
</div>
}

export default Loader;

