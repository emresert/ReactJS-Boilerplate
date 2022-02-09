import React, { useContext, useEffect,useState } from 'react';
import { GlobalContext } from "../../context/GlobalContext"
import ReactDOM from "react-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { API_URL } from "../../helper/Utils"
import { useTranslation} from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const catLogo = require("../../assets/images/cat-r.jpg").default
const catLogoB = require("../../assets/images/images.png").default

type direction = "left" | "right"

function List() {

    const [iconState, setIconState] = useState<direction>("left")
    const [defaultLang, setDefaultLang] = useState<string>("TR-tr")
    const endPoint: string | undefined = API_URL
    const { t, i18n} = useTranslation();

    const { globalState, dispatch } = useContext(GlobalContext);
    useEffect(() => {
        console.log("globalState", globalState)
    }, [])

    const handleLangChange = () => {

        switch (defaultLang) {
            case "TR-tr":
                i18n.changeLanguage("en-US");
                setDefaultLang("en-US")
                return;
            case "en-US":
               i18n.changeLanguage("TR-tr");
               setDefaultLang("TR-tr")
               return;
        }
       


    };
    const renderHomeList = () => {
        return (
            <>
                <div className="top">
                    <div className="icon" onMouseOver={() => setIconState("left")}>
                        <a className="link" href="https://github.com/emresert"><FaGithub /></a>
                    </div>
                    <div className="text">{t('WelcomeToFrontEndArchitect')}</div>
                    <div onMouseOver={() => setIconState("right")} className="icon"><a className="link" href="https://www.linkedin.com/in/emresert/"><FaLinkedin /></a></div>
                </div>
                <div className="img-part"><img src={catLogo} className={iconState == "left" ? "cat-logo left" : "cat-logo right"} /></div>
                <div className="img-part"><img width="100" height="100" src={catLogoB} /></div>
                <div>{defaultLang == "en-US" ? <>The project started with {endPoint} mode</> : <>Proje {endPoint} modu ile başlatıldı</>}</div>
                <div onClick={() => handleLangChange()} className="change-lang-part">
                    <FontAwesomeIcon icon={['fas', 'globe']} style={{ marginRight: "10px" }} />
                    {defaultLang == "en-US" ? <span className="lang-text">ENG</span> : <span className="lang-text">TR</span>}
                </div>
            </>
        )
    }
    return (
        <>
        {renderHomeList()}
        </>
    )
}

export default List;
