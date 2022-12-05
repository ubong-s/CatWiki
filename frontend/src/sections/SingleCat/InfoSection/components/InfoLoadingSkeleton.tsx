import styles from './InfoLoadingSkeleton.module.css';

export const InfoLoadingSkeleton = () => {
   return (
      <div className='container'>
         <div className={styles.wrapper}>
            <div className={styles.img}></div>
            <div className={styles.info}>
               <div className={styles.h1}></div>
               <div className={styles.desc}></div>
               <div className={styles.text}></div>
               <div className={styles.text}></div>
               <div className={styles.text}></div>

               <div className={styles.attr}>
                  <div className={styles.attrText}></div>
                  <div className={styles.bars}>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
               </div>
               <div className={styles.attr}>
                  <div className={styles.attrText}></div>
                  <div className={styles.bars}>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
               </div>
               <div className={styles.attr}>
                  <div className={styles.attrText}></div>
                  <div className={styles.bars}>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
               </div>
               <div className={styles.attr}>
                  <div className={styles.attrText}></div>
                  <div className={styles.bars}>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
