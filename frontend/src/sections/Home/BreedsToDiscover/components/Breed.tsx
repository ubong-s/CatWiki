import styles from './Breed.module.css';

interface BreedProps {
   name: string;
   imageURL: string;
}

export const Breed = ({ name, imageURL }: BreedProps) => {
   return (
      <div className={styles.breed}>
         <img src={imageURL} alt={name} />
         <h3>{name}</h3>
      </div>
   );
};
