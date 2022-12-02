import styles from './WhyHaveACat.module.css';

export const WhyHaveACat = () => {
   return (
      <div className='container'>
         <div className={styles.why}>
            <div className={styles.content}>
               <div className={styles.line}></div>
               <h2>Why should you have a cat?</h2>
               <p>
                  Having a cat around you can actually trigger the release of
                  calming chemicals in your body which lower your stress and
                  anxiety leves
               </p>
               <button className='btn-with-icon'>
                  <span>Read More</span>
                  <img src='/assets/arrow-right.svg' alt='arrow right' />
               </button>
            </div>
            <div className={styles.images}>
               <div>
                  <img src='/assets/image2.png' alt='Cat 2' />
               </div>
               <div>
                  <img src='/assets/image1.png' alt='Cat 1' />
               </div>
               <div>
                  <img src='/assets/image3.png' alt='Cat 3' />
               </div>
            </div>
         </div>
      </div>
   );
};
