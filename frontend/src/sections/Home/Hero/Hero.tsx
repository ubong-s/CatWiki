import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import catService from '../../../services/catService';
import { CatProps } from '../../../types';
import { MobileSearch } from './components/MobileSearch';
import styles from './Hero.module.css';

export const Hero = () => {
   const [search, setSearch] = useState('');
   const [results, setResults] = useState<CatProps[]>([]);
   const [searchOpen, setSearchOpen] = useState(false);

   const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;
      setSearch(value);
      try {
         const { status, data } = await catService.searchCats(search);

         if (status === 200) {
            setResults(data);
         }
      } catch (error) {}
   };

   const toggleMobileSearch = () => {
      setSearchOpen(!searchOpen);
   };

   const closeMobileSearch = () => {
      setSearchOpen(false);
      setSearch('');
   };

   return (
      <div className='container'>
         <div className={styles.hero}>
            <div className={styles.content}>
               <h1>
                  <span>CatWiki</span>
                  <img src='/assets/CatwikiLogoWhite.svg' alt='CatWiki Logo' />
               </h1>
               <p>Get to know more about your cat breed</p>
               <div className={styles.formWrap}>
                  <form
                     onSubmit={(e) => {
                        e.preventDefault();
                     }}
                  >
                     <label htmlFor='search' className={styles.label}>
                        <button
                           type='button'
                           className={styles.mobile}
                           onClick={toggleMobileSearch}
                        >
                           Search
                        </button>
                        <input
                           type='text'
                           placeholder='Enter your Breed'
                           className={styles.tablet}
                           value={search}
                           onChange={handleChange}
                        />
                        <img src='/assets/search.svg' alt='search' />
                     </label>
                  </form>

                  {searchOpen && (
                     <MobileSearch
                        search={search}
                        results={results}
                        handleChange={handleChange}
                        closeSearch={closeMobileSearch}
                     />
                  )}
                  {search && (
                     <div className={styles.results}>
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
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};
