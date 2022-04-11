import './App.css';
import BookContextProvider from './context/Bookcontext';
import BookForm from './context/components/Bookform';
import BookList from './context/components/BookList';
import Navbar from './context/components/Navbar';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
