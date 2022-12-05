import styles from './Error.module.css';

export const Error = ({ message }: { message: string }) => {
   return (
      <div className='container'>
         <div className={styles.error}>
            <h2>{message}</h2>
         </div>
      </div>
   );
};
