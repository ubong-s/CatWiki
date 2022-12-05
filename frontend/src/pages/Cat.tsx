import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
   InfoLoadingSkeleton,
   InfoSection,
   OtherPhotos,
   OtherPhotosSkeleton,
} from '../sections';
import catService from '../services/catService';
import { StateProps } from '../types';

export const Cat = () => {
   const { id } = useParams();
   const [state, setState] = useState<StateProps>({
      loading: false,
      error: { status: false, message: '' },
      data: null,
   });

   const fetchCatData = async () => {
      setState({
         ...state,
         loading: true,
         error: { status: false, message: '' },
      });
      try {
         const { status, data } = await catService.fetchSingleCat(id);

         if (status === 200) {
            setState({
               ...state,
               loading: false,
               data,
            });
         }
      } catch (error) {
         setState({
            ...state,
            loading: false,
            error: { status: true, message: 'Error fetching data' },
         });
      }
   };

   console.log(state);

   useEffect(() => {
      fetchCatData();
      // eslint-disable-next-line
   }, []);

   if (state.loading) {
      return (
         <>
            <InfoLoadingSkeleton />
            <OtherPhotosSkeleton />
         </>
      );
   }

   if (state.error.status) {
      return <div>{state.error.message}</div>;
   }

   return (
      <>
         <InfoSection
            breed={state.data?.breed}
            photoURL={state.data?.photos[0].url}
         />
         <OtherPhotos photos={state.data?.photos} />
      </>
   );
};
