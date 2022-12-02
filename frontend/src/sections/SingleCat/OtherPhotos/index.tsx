import styles from './OtherPhotos.module.css';

export const OtherPhotos = () => {
   return (
      <div className='container'>
         <div className={styles.photos}>
            <h2>Other Photos</h2>
            <div className={styles.photogrid}>
               <img src='/assets/CatWiki-sample.png' alt='Cat' />
               <img src='/assets/CatWiki-sample.png' alt='Cat' />
               <img src='/assets/CatWiki-sample.png' alt='Cat' />
               <img src='/assets/CatWiki-sample.png' alt='Cat' />
               <img src='/assets/CatWiki-sample.png' alt='Cat' />
               <img src='/assets/CatWiki-sample.png' alt='Cat' />
               <img src='/assets/CatWiki-sample.png' alt='Cat' />
               <img src='/assets/CatWiki-sample.png' alt='Cat' />
            </div>
         </div>
      </div>
   );
};
