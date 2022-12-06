import { Link } from 'react-router-dom';
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
            <li>
               <Link to={`/cat/${cat.id}`} className={styles.result}>
                  <img src={cat.image?.url} alt={cat.name} />
                  <div>
                     <h3>
                        {index}. {cat.name}
                     </h3>
                     <p>{cat?.description}</p>
                  </div>
               </Link>
            </li>
         )}
      </>
   );
};
