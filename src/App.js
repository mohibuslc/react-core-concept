import logo from './logo.svg';
import './App.css';

function App() {

  var persone = {  
    name: "Dr. Khalik",
    job:"Medicine_Specilst",
    Address: "Dhaka"

  } 

  var style ={

  backgroundColor:'red',
  borderReduis: '10px'

  
  }

  var persone2={
    name: 'Tina',

    job:'singer'

  }

  var style={

    backgroundColor:'yellow'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <h1 className ="" style={style}> Persone Details : {persone.name+"" +persone.job}</h1>
        
        <h3 className ="" style ={style}> Singer: {persone2.name+" "+persone2.job}</h3>
        <p>My First React-App</p> 

       
      </header>
    </div>
  );
}

export default App;
