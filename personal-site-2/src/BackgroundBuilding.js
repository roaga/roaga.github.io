import React, {useEffect, useState} from 'react';

const BackgroundBuilding = (props) => {

    const color = `hsla(${Math.random() * 360}, 10%, 10%, 1)`;

    const [height, setHeight] = useState(300);
    const [generated, setGenerated] = useState(false);
    const [items, setItems] = useState([]);
    const width = 200;
    const windowSize = 15;

    useEffect(() => {
        let h = Math.floor((Math.random() * 400))
        setHeight(h);   
        
        if (!generated) {
            setItems([...Array(Math.floor(height / (1 * windowSize)))].map((e, i) => {
                return ([...Array(Math.floor(width / (1 * windowSize)))].map((f, j) => {
                    let ans = Math.random();
                    return (
                        <div style={{
                            width: 1 * windowSize, 
                            height: 1 * windowSize, 
                            backgroundColor: ans > 0.15 ? color : "#d6d1ba", 
                            position: "absolute", 
                            top: (100 / (height / (1 * windowSize)) * i) + "%", 
                            left: (100 / (width / (1 * windowSize)) * j) + "%",
                            boxShadow: ans > 0.15 ? "none" : "1px 1px 20px #d6d1ba",
                        }}/>
                    )
                }))
            }))
            setGenerated(true);
        }
    }, []);
    return (
      <div 
        style={{
            height: height, 
            width: width, 
            position: "absolute", 
            bottom: "50%", 
            left: props.left, 
            backgroundColor: color, 
            zIndex: 0,
        }}
      >
          {items}
        
      </div>
    );
  };

export default BackgroundBuilding;
