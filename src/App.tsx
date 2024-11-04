import { BrowserRouter } from "react-router-dom";

import Navbar from "components/Navbar";
import Routing from "components/Routing";
import Footer from "components/Footer";

const App = () => (
  <BrowserRouter>
    <Navbar />

    <div className="container mx-auto px-4 pb-32 sm:pb-16">
      <Routing />
    </div>

    <Footer />
  </BrowserRouter>
);

export default App;
