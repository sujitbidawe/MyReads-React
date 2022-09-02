import "./App.css";
import { Route, Routes } from 'react-router-dom';
import SearchBooks from "./components/SearchBooks";
import DisplayBooks from "./components/DisplayBooks";

function App() {

  return (
    <Routes>
      <Route exact path="/" element={
        <DisplayBooks />
      }
      />
      <Route exact path='/add' element={
        <SearchBooks />
      }
      />
    </Routes>
  )
}

export default App;
