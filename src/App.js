
import './App.css';
import Question from './Component/Ans/Question';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
        <Shop></Shop> 
        <Question></Question>                           
    </div>
  );
}

export default App;
