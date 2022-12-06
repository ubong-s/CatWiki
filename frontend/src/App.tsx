import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import { Home, Cat, MostSearched, NotFound } from './pages';
// components
import { Footer, NavBar } from './sections';
import catService from './services/catService';
import { CatProps } from './types';

function App() {
   const [mostSearched, setMostSearched] = useState<{
      loading: boolean;
      error: string | null;
      cats: CatProps[];
   }>({
      loading: false,
      error: null,
      cats: [],
   });

   const fetchCats = async () => {
      setMostSearched({
         ...mostSearched,
         loading: true,
         error: null,
      });
      try {
         const { status, data } = await catService.mostSearchedCats();

         if (status === 200) {
            setMostSearched({
               ...mostSearched,
               loading: false,
               cats: data,
            });
         }
      } catch (error: any) {
         setMostSearched({
            ...mostSearched,
            loading: false,
            error: error.response.data.error,
         });
      }
   };

   useEffect(() => {
      fetchCats();
   }, []); //eslint-disable-line

   return (
      <Router>
         <NavBar />
         <main>
            <Routes>
               <Route path='/' element={<Home cats={mostSearched?.cats} />} />
               <Route
                  path='/most-searched'
                  element={<MostSearched cats={mostSearched?.cats} />}
               />
               <Route path='/cat/:id' element={<Cat />} />
               <Route path='*' element={<NotFound />} />
            </Routes>
         </main>
         <Footer />
      </Router>
   );
}

export default App;
