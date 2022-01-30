import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Root from "./root";

const linkItems = {
    "dashboard": {url: '/', active: true},
    "customizations": {url: '/customizations', active: false},
    "settings": {url: '/settings', active: false},
    "account": {url: '/account-details', active: false},
    "changelog": {url: '/changelog', active: false}
};
export const ThemeContext = React.createContext(linkItems);

function App() {
    return (
        <ThemeContext.Provider value={linkItems}>
            <BrowserRouter>
                <Root/>
            </BrowserRouter>
        </ThemeContext.Provider>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
