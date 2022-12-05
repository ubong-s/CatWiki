import { MostSearchedComp } from '../sections';
import { CatProps } from '../types';

export const MostSearched = ({ cats }: { cats: CatProps[] }) => {
   return (
      <>
         <MostSearchedComp cats={cats} />
      </>
   );
};
