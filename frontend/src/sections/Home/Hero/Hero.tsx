import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import catService from '../../../services/catService';
import { CatProps } from '../../../types';
import styles from './Hero.module.css';

export const Hero = () => {
   const [search, setSearch] = useState('');
   const [results, setResults] = useState<CatProps[]>([]);

   console.log(results);

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

   return (
      <div className='container'>
         <div className={styles.hero}>
            <div className={styles.content}>
               <h1>
                  <span>CatWiki</span>
                  <img src='/assets/CatwikiLogoWhite.svg' alt='CatWiki Logo' />
               </h1>
               <p>Get to know more about your cat breed</p>
               <form
                  onSubmit={(e) => {
                     e.preventDefault();
                  }}
               >
                  <label htmlFor='search' className={styles.label}>
                     <input
                        type='text'
                        placeholder='Search'
                        className={styles.mobile}
                        value={search}
                        onChange={handleChange}
                     />
                     <input
                        type='text'
                        placeholder='Enter your Breed'
                        className={styles.tablet}
                        value={search}
                        onChange={handleChange}
                     />
                     <img src='/assets/search.svg' alt='search' />
                  </label>

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
               </form>
            </div>
         </div>
      </div>
   );
};
