import './App.css';

import { Provider } from 'react-redux';

import store from './redux/store';


//Importing Components
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CroissantContainer from './components/CroissantContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/userContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <CroissantContainer />
        <NewCakeContainer />
        <ItemContainer cake/>
        <ItemContainer />
      </div>
    </Provider>
  );
}

export default App;
