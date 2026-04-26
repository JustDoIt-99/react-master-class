import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from "styled-components";
import App from './App';
import {darkTheme} from "./theme";

const rootElement = document.getElementById('root');

if(!rootElement) {
    throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);