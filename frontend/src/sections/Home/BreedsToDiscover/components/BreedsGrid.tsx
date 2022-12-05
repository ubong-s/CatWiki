import { CatProps } from '../../../../types';
import { Breed } from './Breed';
import styles from './BreedsGrid.module.css';

export const BreedsGrid = ({ cats }: { cats: CatProps[] }) => {
   return (
      <div className={styles.grid}>
         {cats.slice(0, 4).map((cat) => (
            <Breed
               key={cat.id}
               id={cat.id}
               name={cat.name}
               imageURL={cat.image?.url}
            />
         ))}
      </div>
   );
};
