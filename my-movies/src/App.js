import { Header } from "./components/Header";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { MovieDetail } from "./views/MovieDetail";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <Router>
            <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/movie/:id" element={<MovieDetail />} />
                </Routes>
        </Router>
    </div>
  );
}

export default App;
