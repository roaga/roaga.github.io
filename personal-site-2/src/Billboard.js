import React, {useEffect, useState} from 'react';
import './App.css';
import ads from './Ads'

const Billboard = (props) => {

    const [height, setHeight] = useState(props.height / 2.5);
    const [width, setWidth] = useState(props.width / 1.2);
    const [bottom, setBottom] = useState(Math.random() * (props.height - height + 10));
    const [left, setLeft] = useState(props.align === "left" ? Math.max(0, Math.random() * (props.width / 2 - width * 4)) : Math.min(props.width, Math.random() * props.width / 2 + width / 4));

    const [caption, setCaption] = useState("...");
    const [bgColor, setBgColor] = useState("#f2eeda");
    const [bgImage, setBgImage] = useState();
    const [link, setLink] = useState();


    useEffect(() => {
        let time = Math.random() * 7000 + 8000;
        chooseAd();

        const interval = setInterval(() => {
            chooseAd();
        }, time);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const chooseAd = () => {
        // example filter url: http://localhost:3000/?tag=animation
        const windowUrl = window.location.href.split('?')[1];
        const params = new URLSearchParams(windowUrl)
        let relAds = params.get('tag') ? ads.filter(ad => ad.tag.includes(params.get('tag'))) : ads;
        let i = Math.floor(Math.random() * relAds.length);
        let ad = relAds[i];
        setCaption(ad.text);
        setBgColor(ad.color);
        setBgImage(ad.image);
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
            backgroundColor: "rgba(31, 31, 31, 1.0)", 
            boxShadow: "0px 0px 100px " + bgColor,
            border: "5px solid rgba(31, 31, 31, 0.7)",
            objectFit: "cover",
            display: "flex",
            justifyContent: "center",
        }}
        onClick={() => {
            props.setModalInfo({image: bgImage, color: bgColor, caption: caption, link: link});
        }}
      >

          <img src={bgImage} style={{maxHeight: "100%", maxWidth: "100%", objectFit: "cover"}} alt="billboard"/>

      </div>
    );
  };

export default Billboard;
