import React , {useState}from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { SunflowerContext } from './components/sunflowerContext/sunflowerContext.jsx';
import App from './App';
import configureStore from './store';

import { restoreCSRF, csrfFetch } from "./store/csrf"
const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  
  
  window.csrfFetch = csrfFetch;
  
  window.store = store;
  
  
}
function Root() {
  const [showTooltips, setShowTooltips] = useState(false);
  
  const toggleTooltips = () => {
    setShowTooltips(!showTooltips);
  };
  return (

    
    
    <Provider store={store}>
   <SunflowerContext.Provider value={{ showTooltips, toggleTooltips }}>

      <App />
   </SunflowerContext.Provider>
    
    </Provider>




  );


}
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
