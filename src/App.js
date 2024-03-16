import './App.css';

import { Header } from './component/Header';
import { Balance } from './component/Balance';
import { TranctionList } from './component/TranctionList';
import { AddTranction } from './component/AddTranction';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <TranctionList />
        <AddTranction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
