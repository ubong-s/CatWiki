import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { CatProps } from '../../../../types';
import styles from './MobileSearch.module.css';

interface MobileSearchProps {
   search: string;
   results: CatProps[];
   handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
   closeSearch: () => void;
}

export const MobileSearch = ({
   search,
   results,
   handleChange,
   closeSearch,
}: MobileSearchProps) => {
   return (
      <div className={styles.mobileSearch}>
         <div className='container'>
            <div className={styles.close}>
               <button onClick={closeSearch}>
                  <img src='/assets/close-icon.svg' alt='close' />
               </button>
            </div>
            <label htmlFor='search' className={styles.label}>
               <input
                  type='text'
                  placeholder='Search'
                  className={styles.mobile}
                  value={search}
                  onChange={handleChange}
               />
               <img src='/assets/search.svg' alt='search' />
            </label>
            <div className={styles.mobileResults}>
               {search && (
                  <>
                     {results.length > 0 ? (
                        <ul>
                           {results.map((result) => (
                              <li key={result.id}>
                                 <Link to={`/cat/${result.id}`}>
                                    {result.name}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     ) : (
                        <p>No results for "{search}"</p>
                     )}
                  </>
               )}
            </div>
         </div>
      </div>
   );
};
