import styles from './Hero.module.css';

export const Hero = () => {
   return (
      <div className='container'>
         <div className={styles.hero}>
            <div className={styles.content}>
               <h1>
                  <span>CatWiki</span>
                  <img src='/assets/CatwikiLogoWhite.svg' alt='CatWiki Logo' />
               </h1>
               <p>Get to know more about your cat breed</p>
               <label htmlFor='search' className={styles.label}>
                  <input
                     type='text'
                     placeholder='Search'
                     className={styles.mobile}
                  />
                  <input
                     type='text'
                     placeholder='Enter your Breed'
                     className={styles.tablet}
                  />
                  <img src='/assets/search.svg' alt='search' />
               </label>
            </div>
         </div>
      </div>
   );
};
