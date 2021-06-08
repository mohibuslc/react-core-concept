import logo from './logo.svg';
import './App.css';

function App() {


const Products=[
  
  
{name: 'Photoshop', price:'$90.99'},

{name:'VB-6.0', price: '$36.00' },

{name : 'TB-code', price: '$81.00'}

]

  return (
    <div className="header" >
    <Product name={Products[0].name} price={Products[0].price}></Product>
    
     
    </div>
  );
}
function Product (props){


const ProductStyle = {

  border: '1px solid  gray',
  borderRadius: '10px',
  backgroundColor: 'gray',
  height: '200px',
  width :'200px',
  float: 'left'

  }

  return (

    <div style={ProductStyle}>

      <h3>{props.name}</h3>
      <h2>{props.price}</h2>
      <button>Buy now</button>
      </div>
  )
}

export default App;
