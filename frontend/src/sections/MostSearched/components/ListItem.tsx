import styles from './ListItem.module.css';

interface ListItemProps {
   index?: number;
}

export const ListItem = ({ index }: ListItemProps) => {
   return (
      <li className={styles.result}>
         <img src='/assets/CatWiki-sample.png' alt='' />
         <div>
            <h3>1. Bengal</h3>
            <p>
               Bengals are a lot of fun to live with, but they're definitely not
               the cat for everyone, or for first-time cat owners. Extremely
               intelligent, curious and active, they demand a lot of interaction
               and woe betide the owner who doesn't provide it.
            </p>
         </div>
      </li>
   );
};
