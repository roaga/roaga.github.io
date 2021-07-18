import React from 'react';
import ReactFlow, { Handle } from 'react-flow-renderer';

const ImageNode = ({ data }) => {

    const clicked = () => {
        window.open(data.link, "_blank") //to open new page
    }

    return (
      <div style={{borderRadius: 16, backgroundImage: 'url(' + data.imagePath + ')', backgroundSize: "cover", backgroundPosition: "center", height: data.height, width: data.width}} onClick={data.link ? () => clicked() : null}>
        <Handle type="target" position="left" style={{ borderRadius: 0 }} />
        {data.label ? <div style={{backgroundColor: "rgba(255, 255, 255, 0.5)", padding: 16, fontWeight: 700}}>{data.label}{data.link ? <span> 🔗</span> : null}</div> : null }
        <Handle
          type="source"
          position="right"
          id="b"
          style={{borderRadius: 0 }}
        />
      </div>
    );
  };

export default ImageNode;
