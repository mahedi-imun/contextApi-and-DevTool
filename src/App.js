
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ReviewOrder from './Components/ReviewOrder/ReviewOrder';
import TShirt from './Components/TShirts/TShirt';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/tShirt' element={<TShirt/>}></Route>
        <Route path='/OrderReview' element={<ReviewOrder/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
