import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import router from "./Router";
import {RecoilRoot} from "recoil";
import {HelmetProvider} from "react-helmet-async";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <HelmetProvider>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router}/>
                </QueryClientProvider>
            </RecoilRoot>
        </HelmetProvider>
    </React.StrictMode>
);