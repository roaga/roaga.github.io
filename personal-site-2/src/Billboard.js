import React, {useEffect, useState} from 'react';
import './App.css';
import ads from './Ads'

const Billboard = (props) => {

    const [height, setHeight] = useState(Math.floor(Math.random() * (props.height / 4 - 150) + 200));
    const [width, setWidth] = useState(Math.floor(Math.random() * (props.width - 150) + 100));
    const [bottom, setBottom] = useState(Math.random() * (props.height - height));
    const [left, setLeft] = useState(props.align === "left" ? Math.max(0, Math.random() * (props.width / 2 - width)) : Math.min(props.width, Math.random() * props.width / 2 + width / 4));

    const [caption, setCaption] = useState("...");
    const [bgColor, setBgColor] = useState("#f2eeda");
    const [bgImage, setBgImage] = useState();
    const [fontColor, setFontColor] = useState("black");
    const [link, setLink] = useState();

    const [flash, setFlash] = useState(false);

    useEffect(() => {
        let time = Math.random() * 7000 + 8000;
        chooseAd();

        const interval = setInterval(() => {
            chooseAd();
        }, time);

        const flickerInterval = setInterval(() => {
            setFlash(flash => !flash);
        }, Math.round(time / 2));

        return () => {
            clearInterval(interval);
            clearInterval(flickerInterval);
        };
    }, []);

    const chooseAd = () => {
        let i = Math.floor(Math.random() * ads.length);
        let ad = ads[i];
        setCaption(ad.text);
        setBgColor(ad.color);
        setBgImage(ad.image);
        setFontColor(ad.fontColor);
        setLink(ad.link);
    }
    
    return (
      <div 
        className="billboard"
        style={{
            height: height, 
            width: width, 
            position: "absolute",
            bottom: bottom,
            left: left,
            backgroundColor: bgColor, 
            boxShadow: "0px 0px 100px " + bgColor,
            border: "5px solid rgba(31, 31, 31, 0.7)",
            objectFit: "fit",
            overflow: "scroll",
            display: "flex",
            justifyContent: "center",
            padding: 4,
        }}
        onClick={() => {
            if (link) {
                window.open(link);
            }
        }}
      >
          {!flash || !bgImage ?
            <h5 style={{color: fontColor, fontWeight: 700}}>{caption}</h5>
          :
            <img src={bgImage} style={{maxHeight: "100%", maxWidth: "100%", alignSelf: "center", justifyContent: "center"}}/>
          }

          {link ? 
            <h6 style={{color: fontColor, position: "absolute", bottom: -16, right: 4}}>(link)</h6>
          :
            null
          }
      </div>
    );
  };

export default Billboard;
