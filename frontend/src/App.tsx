import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import { Home, Cat, MostSearched, NotFound } from './pages';
// components
import { Footer, NavBar } from './sections';

function App() {
   return (
      <Router>
         <NavBar />
         <main>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/most-searched' element={<MostSearched />} />
               <Route path='/cat/:id' element={<Cat />} />
               <Route path='*' element={<NotFound />} />
            </Routes>
         </main>
         <Footer />
      </Router>
   );
}

export default App;
