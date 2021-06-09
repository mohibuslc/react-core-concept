import logo from './logo.svg';
import './App.css';

function App() {

const Actross = [ 'Kalam', 'Habib','Jamal', 'Tina']


const Products=[
  
  
{name: 'Photoshop', price:'$90.99'}, // {} - is call Array and inside of array intety  are call of OBJECT.


{name:'VB-6.0', price: '$36.00' },

{name : 'TB-code', price: '$81.00'}

]

//const ProductName = Products.map(product => product.name); // use the line for Product Object : 
//console.log(ProductName);

const Actrossname = Actross.map(Act => Act);

console.log(Actrossname);


  return (


   
    <div  >

     
    <Product Prod={Products[0]}></Product>
    <Product Prod={Products[1]}></Product>
    <Product Prod={Products[2]}></Product>
     <ul>

          {
            Actross.map(Act => <li>{Act}</li>)
  
        }
       
       </ul>
    </div>
   
  )
}
function Product (props){


const ProductStyle = {

  border: '1px solid  gray',
  borderRadius: '10px',
  backgroundColor: 'gray',
  height: '230px',
  width :'200px',
  margin: '10px',
  marginLeft:'24px',
  marginTop:'20px'

  }

 const {name, price}= props.Prod;


  return (
  
    <div style={ProductStyle}>

      <h3>{name}</h3>
      <br></br>
      <h2>{price}</h2>
      <hr></hr>
      <br></br>
      <button>Buy now</button>
      </div>
  )
}

export default App;
