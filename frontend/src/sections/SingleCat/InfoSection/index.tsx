import { AttributeBars } from './components/AttributeBars';
import styles from './InfoSection.module.css';

export const InfoSection = () => {
   return (
      <div className='container'>
         <div className={styles.wrapper}>
            <img src='/assets/CatWiki-sample.png' alt='' />

            <div className={styles.info}>
               <h1>Bengal</h1>
               <p>
                  Bengals are a lot of fun to live with, but they're definitely
                  not the cat for everyone, or for first-time cat owners.
                  Extremely intelligent, curious and active, they demand a lot
                  of interaction and woe betide the owner who doesn't provide
                  it.
               </p>
               <p>
                  <strong>Temperament:</strong> Alert, Agile, Energetic,
                  Demanding, Intelligent
               </p>
               <p>
                  <strong>Origin:</strong> United States
               </p>
               <p>
                  <strong>Life Span:</strong> 12 - 15 years
               </p>
               <AttributeBars attribute='Adaptability' rating={5} />
               <AttributeBars attribute='Affection level' rating={5} />
               <AttributeBars attribute='Child Friendly' rating={4} />
               <AttributeBars attribute='Grooming' rating={1} />
               <AttributeBars attribute='Intelligence' rating={5} />
               <AttributeBars attribute='Health issues' rating={3} />
               <AttributeBars attribute='Social needs' rating={5} />
               <AttributeBars attribute='Stranger friendly' rating={3} />
            </div>
         </div>
      </div>
   );
};
