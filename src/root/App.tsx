import React, { FC, useState } from "react";
import ReactDOM from "react-dom";
import { FaGithub, FaLinkedin, FaSpinner } from "react-icons/fa"
import {endPointUrlForApi} from "../helper/Utils"


const catLogo = require("../assets/images/cat-r.jpg").default
const catLogoB = require("../assets/images/images.png").default

type direction = "left" | "right"
const App: FC = () => {
    const [iconState, setIconState] = useState<direction>("left")
    const endPoint:string = endPointUrlForApi

    return (
        <div className="App">
            <div className="top">
                <div className="icon" onMouseOver={() => setIconState("left")}><a className="link" href="https://github.com/emresert"><FaGithub /></a></div><div className="text">Welcome to Front End Architect</div><div onMouseOver={() => setIconState("right")} className="icon"><a className="link" href="https://www.linkedin.com/in/emresert/"><FaLinkedin /></a></div>
            </div>
            <div className="img-part"><img src={catLogo} className={iconState == "left" ? "cat-logo left" : "cat-logo right"} /></div>
            <div className="img-part"><img width="100" height="100" src={catLogoB} /></div>
            <div>The project started with {endPoint} mode</div>
        </div>
    )
}

export default App