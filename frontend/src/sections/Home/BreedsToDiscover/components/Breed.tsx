import { Link } from 'react-router-dom';
import styles from './Breed.module.css';

interface BreedProps {
   name?: string;
   imageURL?: string;
   id?: string;
}

export const Breed = ({ name, imageURL, id }: BreedProps) => {
   return (
      <Link to={`/cat/${id}`}>
         <div className={styles.breed}>
            <img src={imageURL} alt={name} />
            <h3>{name}</h3>
         </div>
      </Link>
   );
};
