import { Breed } from './Breed';
import styles from './BreedsGrid.module.css';

export const BreedsGrid = () => {
   return (
      <div className={styles.grid}>
         <Breed name='Bengal' imageURL='/assets/CatWiki-sample.png' />
         <Breed name='Savannah' imageURL='/assets/CatWiki-sample.png' />
         <Breed
            name='Norwegian Forest Cat'
            imageURL='/assets/CatWiki-sample.png'
         />
         <Breed name='Selkirk Rex' imageURL='/assets/CatWiki-sample.png' />
      </div>
   );
};
