import styles from './BreedsToDiscover.module.css';
import { BreedsGrid } from './components';

export const BreedsToDiscover = () => {
   return (
      <div className='container'>
         <div className={styles.breeds}>
            <span className={styles.subheading}>
               Most Searched Breeds
               <span></span>
            </span>

            <div className={styles.heading}>
               <h2>66+ Breeds For you to discover</h2>
               <button>
                  <span>See More</span>
                  <img src='/assets/arrow-right.svg' alt='arrow right' />
               </button>
            </div>
            <BreedsGrid />
         </div>
      </div>
   );
};
