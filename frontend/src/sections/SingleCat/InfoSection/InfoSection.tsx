import { BreedProps } from '../../../types';
import { AttributeBars } from './components/AttributeBars';
import styles from './InfoSection.module.css';

export const InfoSection = ({ breed, photoURL }: BreedProps) => {
   console.log(breed);

   return (
      <div className='container'>
         {breed && Object.keys(breed).length > 0 && (
            <div className={styles.wrapper}>
               <img src={photoURL} alt={breed.name} />

               <div className={styles.info}>
                  <h1>{breed.name}</h1>
                  <p>{breed.description}</p>
                  <p>
                     <strong>Temperament:</strong> {breed.temperament}
                  </p>
                  <p>
                     <strong>Origin:</strong> {breed.origin}
                  </p>
                  <p>
                     <strong>Life Span:</strong> {breed.life_span}
                  </p>
                  <AttributeBars
                     attribute='Adaptability'
                     rating={breed.adaptability}
                  />
                  <AttributeBars
                     attribute='Affection level'
                     rating={breed.affection_level}
                  />
                  <AttributeBars
                     attribute='Child Friendly'
                     rating={breed.child_friendly}
                  />
                  <AttributeBars attribute='Grooming' rating={breed.grooming} />
                  <AttributeBars
                     attribute='Intelligence'
                     rating={breed.intelligence}
                  />
                  <AttributeBars
                     attribute='Health issues'
                     rating={breed.health_issues}
                  />
                  <AttributeBars
                     attribute='Social needs'
                     rating={breed.social_needs}
                  />
                  <AttributeBars
                     attribute='Stranger friendly'
                     rating={breed.stranger_friendly}
                  />
               </div>
            </div>
         )}
      </div>
   );
};
