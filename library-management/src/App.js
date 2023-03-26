import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import SignUp from './component/SignUp';
import AddImage from './component/AddImage';
import Account from './component/Account';
import Admin from './component/Admin';
import LibraryOrder from './component/LibraryOrder';
import LibraryHistory from './component/LibraryHistory';
import Opinion from './component/Opinion';
import BookStore from './component/BookStore';
import UserBorrowHistory from './component/UserBorrowHistory';
import WriteOpinion from './component/WriteOpinion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/admin" element={<Admin/>} />
        <Route exact path="/:username/addimage" element={<AddImage/>} />
        <Route exact path="/:username/info" element={<Account />} />
        <Route exact path="/:username/write-opinion" element={<WriteOpinion/>} />
        <Route exact path="/:username/history" element={<UserBorrowHistory />} />
        <Route exact path="/library/order" element={<LibraryOrder/>} />
        <Route exact path="/opinion/list" element={<Opinion/>} />
        <Route exact path="/book/list" element={<BookStore/>} />
        <Route exact path="/library/history" element={<LibraryHistory/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
