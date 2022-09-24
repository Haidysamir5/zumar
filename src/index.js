import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductContainer from './components/Product/ProductContainer/ProductContainer';
import BreadCrumbList from './components/BreadCrumbList/BreadCrumbList';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/poppins/Poppins-Regular.ttf';
import store from './store/store'
import { Provider } from 'react-redux'
import NavbarContainer from './components/Navbar/NavbarContainer/NavbarContainer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <NavbarContainer/>
      <BreadCrumbList/>
      <ProductContainer />
    </React.StrictMode>
  </Provider>  
);
``
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
