import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateWallet from './components/CreateWallet';
import WalletList from './components/WalletList';
import MakeTransection from './components/MakeTransection';
import WalletTransection from './components/WalletTransection';


function App(){
    return(
        <BrowserRouter>
        <Navbar />
        <br/>
        <Routes>
        <Route path="/create"  element={<CreateWallet/>}/>
        <Route path="/"  element={<WalletList/>}/>
        <Route path="/makeTransection"  element={<MakeTransection/>}/>
        <Route path="/walletTransection"  element={<WalletTransection/>}/>

        

        </Routes>
        </BrowserRouter>
    )
}

export default App;