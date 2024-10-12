import { BrowserRouter } from 'react-router-dom';

import Navbar from "components/Navbar";
import Routing from "components/Routing";


const App = () => (
  <BrowserRouter>
    <Navbar />

    <div className="container mx-auto px-4">
      <Routing />
    </div>
  </BrowserRouter>
);

export default App;
