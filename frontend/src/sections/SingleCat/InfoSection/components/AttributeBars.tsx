import { Bar } from './Bar';
import styles from './AttributeBars.module.css';

interface AttributeBarsProps {
   attribute: string;
   rating: number;
}

export const AttributeBars = ({ attribute, rating }: AttributeBarsProps) => {
   const tempBars = Array.from({ length: 5 }, (_, index) => {
      const number = index + 0.5;
      return (
         <span key={index}>
            {rating > number ? <Bar fill='true' /> : <Bar />}
         </span>
      );
   });

   return (
      <div className={styles.attribute}>
         <p>
            <strong>{attribute} : </strong>
            <span className={styles.bars}>{tempBars}</span>
         </p>
      </div>
   );
};
