import { BreedsToDiscover, Hero, WhyHaveACat } from '../sections';
import { CatProps } from '../types';

export const Home = ({ cats }: { cats: CatProps[] }) => {
   return (
      <>
         <Hero />
         <BreedsToDiscover cats={cats} />
         <WhyHaveACat />
      </>
   );
};
