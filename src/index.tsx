import React, { FC, Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./root/App"
import "../src/styles/styles.scss";
import './i18n';
import { GlobalContextProvider } from './context/GlobalContext';

ReactDOM.render(
    <Suspense fallback="loading">
        <GlobalContextProvider>
            <App />
        </GlobalContextProvider>
    </Suspense>
    , document.getElementById("root"))