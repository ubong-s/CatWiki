import { OtherPhotoProps } from '../../../types';
import styles from './OtherPhotos.module.css';

export const OtherPhotos = ({ photos }: OtherPhotoProps) => {
   return (
      <div className='container'>
         {photos && photos.length > 0 && (
            <div className={styles.photos}>
               <h2>Other Photos</h2>
               <div className={styles.photogrid}>
                  {photos.map((photo) => {
                     return <img key={photo.id} src={photo.url} alt='Cat' />;
                  })}
               </div>
            </div>
         )}
      </div>
   );
};
