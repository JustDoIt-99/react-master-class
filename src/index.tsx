import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from "styled-components";
import App from './App';

const darkTheme = {
    textColor: "whitesmoke",
    backgroundColor:"#111"
}

const lightTheme = {
    textColor: "#111",
    backgroundColor: "whitesmoke"
}

const rootElement = document.getElementById('root');

if(!rootElement) {
    throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={lightTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);