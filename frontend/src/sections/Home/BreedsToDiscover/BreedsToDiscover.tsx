import styles from './BreedsToDiscover.module.css';
import { BreedsGrid } from './components';
import { Link } from 'react-router-dom';
import { CatProps } from '../../../types';

export const BreedsToDiscover = ({ cats }: { cats: CatProps[] }) => {
   return (
      <div className='container'>
         <div className={styles.breeds}>
            <span className={styles.subheading}>
               Most Searched Breeds
               <span></span>
            </span>

            <div className={styles.heading}>
               <h2>66+ Breeds For you to discover</h2>
               <Link to='/most-searched'>
                  <button type='button' className='btn-with-icon'>
                     <span>See More</span>
                     <img src='/assets/arrow-right.svg' alt='arrow right' />
                  </button>
               </Link>
            </div>
            <BreedsGrid cats={cats} />
         </div>
      </div>
   );
};
