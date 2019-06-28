import React from 'react';
import './App.css';

import AppRouter from './components/AppRouter';
import AppFooter from './components/AppFooter';
import{Content} from 'react-mdl';

function App() {
    return (
       <div>
          
           
            <Content  className="content">
            <AppRouter className="router"></AppRouter>
            </Content>
        
            
       
    </div>
    )
}
export default App;