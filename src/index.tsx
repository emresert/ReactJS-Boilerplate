import React, { FC,Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./root/App"
import "../src/styles/styles.scss";
import './i18n';


ReactDOM.render(
    <Suspense fallback="loading">
    <App />
    </Suspense>
    , document.getElementById("root"))