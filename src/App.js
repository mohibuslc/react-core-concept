import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';


function App() {

const Actross = [ 'Kalam', 'Habib','Jamal', 'Tina']


const Products=[
  
  
{name: 'Photoshop', price:'$90.99'}, // {} - is call Array and inside of array intety  are call of OBJECT.


{name:'VB-6.0', price: '$36.00' },

{name : 'TB-code', price: '$81.00'}

]

//const ProductName = Products.map(product => product.name); // use the line for Product Object : 
//console.log(ProductName);

//const Actrossname = Actross.map(Act => Act);

//console.log(Actrossname);


  return (


   
    <div className=" equment" >

<Count></Count>


<ul>

{
  Actross.map(Act => <li>{Act}</li>)

}
{


Products.map(product => <li>{product.name}</li>)

}

</ul>

     
    <Product Prod={Products[0]}></Product>
    <Product Prod={Products[1]}></Product>
    <Product Prod={Products[2]}></Product>
  
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

function Count(){

const[test, setTest]=useState(89);

const handleIncrase = () => setTest(test +1); // Incrase Of Number When click the Button ;


  return(

    <div>
      <h1>Count: {test}</h1>
      <button onClick={handleIncrase}>Incrase-Number</button>  // Incrase Of Number When click the Button ;
    </div>
  )
}
export default App;
