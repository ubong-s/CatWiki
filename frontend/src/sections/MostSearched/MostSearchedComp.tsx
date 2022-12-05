import { ListItem } from './components/ListItem';
import styles from './MostSearchedComp.module.css';

export const MostSearchedComp = () => {
   return (
      <div className={`container ${styles.search}`}>
         <h1>Top 10 most searched breeds</h1>
         <ul>
            <ListItem />
            <ListItem />
            <ListItem />
         </ul>
      </div>
   );
};
