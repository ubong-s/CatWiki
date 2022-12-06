import { Link } from 'react-router-dom';

export const NotFound = () => {
   return (
      <div className='container not-found'>
         <h2>404</h2>
         <Link to='/'>
            <button>Back to Home</button>
         </Link>
      </div>
   );
};
