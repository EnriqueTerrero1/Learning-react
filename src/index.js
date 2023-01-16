import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Car from './Car';
import Football from './Football';
import Goal from './Goal';
import Garage from './Garage';
import MyForm from './MyForm';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import NoPage from './NoPage';
import Blogs from './Blogs';

const myFirstElement = <h1>Hello React</h1>
let myElement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const x = 5;
let text = "goodbye";
if(x<10){
  text = "Hello";
}

myElement=<h1>{text}</h1>

// function Car(props){
//   return(<><h2>Hi, I'am a {props.color} Car!</h2>
//   <input type="text"></input></>);
// }

const cars = [
  {id:1,brand:'ford'},
  {id:2, brand:'bmw'},
  {id:3,brand:'audi'}
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Garage cars={cars}></Garage> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout></Layout>}></Route>
      <Route index element={<Home></Home>}></Route>
      <Route path="blogs" element={<Blogs></Blogs>}></Route>
      <Route path="*" element={<NoPage></NoPage>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
