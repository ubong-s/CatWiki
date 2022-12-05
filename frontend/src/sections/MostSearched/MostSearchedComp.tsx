import { CatProps } from '../../types';
import { ListItem } from './components/ListItem';
import styles from './MostSearchedComp.module.css';

export const MostSearchedComp = ({ cats }: { cats: CatProps[] }) => {
   return (
      <div className={`container ${styles.search}`}>
         <h1>Top 10 most searched breeds</h1>
         <ul>
            {cats.map((cat, index) => (
               <ListItem key={cat.id} index={index + 1} cat={cat} />
            ))}
         </ul>
      </div>
   );
};
