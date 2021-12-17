import { useEffect, useRef, useState } from "react";

const Dialogue = (props) => {
    const [placeholder, setPlaceholder] = useState('');
    const index = useRef(0);
    const line = useRef(0);

    useEffect(() => {
        const tick = () => {
          setPlaceholder(prev => prev + script[line.current][index.current]);
          index.current++;
        }
        if (index.current < script[line.current].length) {
          let addChar = setInterval(tick, 50);
          return () => clearInterval(addChar);
        } else if (index.current >= script[line.current].length && line.current < script.length) {
            console.log('hi')
            index.current = 0;
            line.current++;
            let nextline = setInterval(() => setPlaceholder(''), 1000);
            return () => clearInterval(nextline);
        }
    }, [placeholder]);

    if (placeholder.length > 0) {
        return (
            <div style={{position: "absolute", zIndex: 200, bottom: 96, left: '35%', width: "30%", border: "5px solid rgba(255, 255, 255, 0.5)", borderRadius: 40, borderBottomRightRadius: 0, padding: 16}}>
                <h2 style={{color: "white"}}>{placeholder}</h2>
            </div>
        );
    } else {
        return null;
    }
}

const script = [
    "Hey you. ",
    "Yeah you. ",
    "You don't look like you're from around here. ",
    "If you have any doubt if you're tough enough for this city, just click the links in the top right to get the info you need about Rohan. ",
    "Otherwise, let me tell you... ",
    "This city is owned by Rohan Agarwal. ",
    "Don't worry, this isn't one of those dystopias. ",
    "Though it is kinda boring since the only thing here are ads about his professional experiences. ",
    "It's kinda fun to watch though. Seems like a smart, creative guy. ",
    "Rohan LOVES software and computer science, especially AI and media technology. ",
    "And he's passionate about creating an impact! ",
    "I mean, he created ME! ",
    "But you can read. Go look at the ads. Click 'em too. ",
    "Anyway, I got to get back to...uh...walking around in this void down here. ",
    "It's all Rohan coded me to do anyway. ",
    ""
];

export default Dialogue;
