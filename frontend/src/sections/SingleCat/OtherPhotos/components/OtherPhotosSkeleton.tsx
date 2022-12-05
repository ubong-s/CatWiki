import styles from './OtherPhotosSkeleton.module.css';

export const OtherPhotosSkeleton = () => {
   return (
      <div className='container'>
         <div className={styles.photos}>
            <div className={styles.h2}></div>
            <div className={styles.photogrid}>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>
         </div>
      </div>
   );
};
