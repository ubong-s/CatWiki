import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export const NavBar = () => {
   return (
      <nav className={styles.navbar}>
         <div className='container'>
            <Link to='/'>
               <img
                  className={styles.logo}
                  src='/assets/CatwikiLogo.svg'
                  alt='Cat Wiki'
               />
            </Link>
         </div>
      </nav>
   );
};
