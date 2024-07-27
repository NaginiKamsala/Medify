import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import MyBookings from "./pages/MyBookings/MyBookings";
import SearchResults from "./pages/ResultsSection/ResultsSection";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/searchresults" element={""} /> */}
        <Route path="/searchresults" element={<SearchResults />} />
        <Route path="/bookings" element={<MyBookings />} />
      </Routes>
    </div>
  );
}

export default App;
