import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {theme} from "./theme";
import router from "./Router";
import {ThemeProvider} from "styled-components";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);