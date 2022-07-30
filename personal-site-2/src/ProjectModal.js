import './App.css';

import { useState, useEffect } from 'react';

const ProjectModal = (props) => {

    const { height, width } = useWindowDimensions();

    return (
        <div style={{zIndex: 300, width: width, height: height, position: "fixed", left: 0, top: 0}}>
            <div style={{position: "fixed", left: "25%", top: "10%", width: width / 2, padding: 32, backgroundColor: "rgba(242, 238, 218, 0.97)", borderRadius: 40, boxShadow: "30px 30px 100px #f2eeda", overflowY: "scroll"}}>
                
                <div onClick={() => props.setModalInfo(null)} class="billboard" style={{position: "absolute", top: 16, right: 24, fontWeight: 200, fontSize: 48}}>x</div>

                {props.modalInfo.caption.split("\n").map(text => {
                    return <p style={{paddingLeft: 96, paddingRight: 96}}>{text}<br/></p>
                })}

                {props.modalInfo.link.length > 0 ?
                    <h4 style={{textDecoration: "underline"}} onClick={() => window.open(props.modalInfo.link)}>Click for more</h4>
                :
                    null
                }

                <img src={props.modalInfo.image} style={{width: "40%", height: "40%", objectFit: "contain", borderRadius: 16}} alt="billboard"/>


            </div>
        </div>
    )
}


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


export default ProjectModal;
