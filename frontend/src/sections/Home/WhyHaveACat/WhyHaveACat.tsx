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
               <a
                  href='https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm#:~:text=Owning%20a%20cat%20can%20bring,be%20an%20extremely%20rewarding%20relationship.'
                  target='_blank'
                  rel='noreferrer noopener'
                  className='btn-with-icon'
               >
                  <span>Read More</span>
                  <img src='/assets/arrow-right.svg' alt='arrow right' />
               </a>
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
