import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Book from "./components/Book";
function App() {
  return (
<Router>
     <Routes>
      <Route path="/" element={<Book/>}/>
     </Routes>
</Router>
  );
}

export default App;
