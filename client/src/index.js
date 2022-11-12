import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserMobX from "./mobx/User.MobX";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserMobX()

    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);