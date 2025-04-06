import { createRoot } from 'react-dom/client'
import './index.css'
import store from './store/store';
import {Provider} from "react-redux";
import React, {StrictMode} from "react";
import App from "src/App";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
)
