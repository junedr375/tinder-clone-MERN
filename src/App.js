import './App.css';
import Header from './Header';
import SwipeButton from './SwipeButton';
import TinderCards from './TinderCards';


function App() {
    return ( 
      //BEM class naming convention
        <div className = "app" >
      <Header></Header>
      <TinderCards></TinderCards>
      <SwipeButton></SwipeButton>
      </div>
    );
}

export default App;