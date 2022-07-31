import Particles from "react-tsparticles";
import { useEffect, useRef, useState } from "react";

import './App.css';
import Building from './Building'
import BackgroundBuilding from './BackgroundBuilding'
import Dialogue from "./Dialogue";
import ProjectModal from './ProjectModal'


function App() {

    const [modalInfo, setModalInfo] = useState(null);

    const { height, width } = useWindowDimensions();


    return (
        <div className="App" style={{height: "100%", width: "100%", backgroundColor: "#5a6282"}}>
            <div style={{backgroundColor: "#5a6282", height: 1000, width: "100%"}}/>
            <div style={{backgroundColor: "#1f1f1f", height: 1000, width: "100%", position: "absolute", top: "40%"}}/>

            {width > 1000 ? 
                <div>
                    {[...Array(20)].map((e, i) => {
                        return <BackgroundBuilding left={4.55 * i + "%"}/>
                    })}
                    {[...Array(5)].map((e, i) => {
                        return <Building left={9 * (4 - i) + "%"} layer={i} align={"right"} start={i} setModalInfo={setModalInfo}/>
                    })}
                    {[...Array(5)].map((e, i) => {
                        return <Building left={43 + 9 * i + "%"} layer={i} align={"left"} start={5 + i} setModalInfo={setModalInfo}/>
                    })}
                </div>
            :
                <h3 style={{color: "white", position: "absolute", left: 16, top: "40%", textAlign: "left"}}>Please view this site on a desktop with a wide window for the full experience!</h3>
            }

            <div style={{backgroundColor: "rgba(31, 31, 31, 0.9)", height: 500, width: "100%", position: "absolute", top: "90%", zIndex: 101, boxShadow: "0px -100px 100px rgba(31, 31, 31, 1)"}}/>

            <h1 style={{color: "#5a6282", position: "absolute", right: 96, top: 32, zIndex: 100, padding: 32, borderRadius: 200, backgroundColor: "rgba(242, 238, 218, 0.8)", boxShadow: "30px 30px 100px #f2eeda"}}>
                Rohan<br/>Agarwal
            </h1>
            <div style={{display: "flex", flexDirection: "column", position: "absolute", right: 8, top: 8}}>
                <div 
                    style={{color: "#5a6282", zIndex: 100, padding: 16, margin: 8, borderRadius: 200, height: 32, width: 32, backgroundColor: "rgba(242, 238, 218, 0.8)", boxShadow: "30px 30px 100px #f2eeda"}}
                    onClick={() => window.open("https://linkedin.com/in/r-agarwal")}
                >
                    <img className="billboard" src={"/assets/icons/linkedinlogo.png"} height={32} width={32}/>
                </div>
                <div 
                    style={{color: "#5a6282", zIndex: 100, padding: 16, margin: 8, borderRadius: 200, height: 32, width: 32, backgroundColor: "rgba(242, 238, 218, 0.8)", boxShadow: "30px 30px 100px #f2eeda"}}
                    onClick={() => window.open("https://github.com/roaga")}
                >
                    <img className="billboard" src={"/assets/icons/githublogo.png"} height={32} width={32}/>
                </div>
                <div 
                    style={{color: "#5a6282", zIndex: 100, padding: 16, margin: 8, borderRadius: 200, height: 32, width: 32, backgroundColor: "rgba(242, 238, 218, 0.8)", boxShadow: "30px 30px 100px #f2eeda"}}
                    onClick={() => window.open("https://us6.list-manage.com/contact-form?u=a5d513a7641adabd212fc49e3&form_id=c27dc84f3921e89d6c9d64a3f597c553")}
                >
                    <img className="billboard" src={"/assets/icons/mailicon.png"} height={32} width={32} color={"white"}/>
                </div>
            </div>
            

            <Particles
                id="tsparticles"
                zIndex={100}
                height={100}
                options={{
                    fpsLimit: 60,
                    particles: {
                    color: {
                        value: "#ffffff",
                    },
                    move: {
                        enable: true,
                        speed: 10,
                        direction: "bottom",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                    },
                    number: {
                        density: {
                        enable: true,
                        value_area: 800,
                        },
                        value: 60,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 8,
                    },
                    },
                }}
            />

            <div style={{position: "absolute", left: "40%", bottom: 0, zIndex: 101, width: "20%"}}>
                <h6 style={{color: "white"}}>Built by Rohan with {"<3"} (and React.js)</h6>
            </div>

            <Dialogue/>

            {modalInfo ?
                <ProjectModal setModalInfo={setModalInfo} modalInfo={modalInfo}/>
            :
                null
            }

        </div>
    );
}

export default App;

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
    function handleResize() {
        setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}