import { CatProps } from '../../../types';
import styles from './ListItem.module.css';

interface ListItemProps {
   index?: number;
   cat?: CatProps;
}

export const ListItem = ({ index, cat }: ListItemProps) => {
   return (
      <>
         {cat && (
            <li className={styles.result}>
               <img src={cat.image?.url} alt={cat.name} />
               <div>
                  <h3>
                     {index}. {cat.name}
                  </h3>
                  <p>{cat?.description}</p>
               </div>
            </li>
         )}
      </>
   );
};
