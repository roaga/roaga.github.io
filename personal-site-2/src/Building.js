import React, {useEffect, useState} from 'react';
import Billboard from './Billboard';

const Building = (props) => {

    const color = `hsla(${Math.random() * 360}, 10%, 30%, 1)`;

    const [height, setHeight] = useState(500);
    const layerScale = (1 + props.layer / 5) / 1.5;
    const width = 250 * layerScale;
    const windowSize = 15 * layerScale;

    useEffect(() => {
        setHeight(Math.floor((Math.random() * 400 + 300) * layerScale));        
    }, []);

    return (
      <div 
        style={{
            height: height, 
            width: width, 
            position: "absolute", 
            bottom: 30 - (props.layer * 4) + "%", 
            left: props.left, 
            backgroundColor: color, 
            boxShadow: "0px -50px 100px #000000", 
        }}
      >
          {[...Array(Math.floor(height / (1 * windowSize)))].map((e, i) => {
            return ([...Array(Math.floor(width / (1 * windowSize)))].map((f, j) => {
                let ans = Math.random();
                return (
                    <div style={{
                        width: 1 * windowSize, 
                        height: 1 * windowSize, 
                        backgroundColor: ans > 0.25 ? color : "#f2eeda", 
                        position: "absolute", 
                        top: (100 / (height / (1 * windowSize)) * i) + "%", 
                        left: (100 / (width / (1 * windowSize)) * j) + "%",
                        boxShadow: ans > 0.25 ? "none" : "1px 1px 20px #f2eeda",
                    }}/>
                )
            }))
          })}

          <Billboard width={width} height={height} align={props.align} start={props.start}/>
        
      </div>
    );
  };

export default Building;
