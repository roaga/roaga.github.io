import { useEffect, useRef, useState } from "react";
import cityAmbience from './cityambience.mp3'

const Dialogue = (props) => {
    const [placeholder, setPlaceholder] = useState('');
    const [playing, setPlaying] = useState(false);
    const index = useRef(0);
    const line = useRef(0);

    let audioRef = useRef(new Audio(cityAmbience));

    useEffect(() => {

    }, []);

    useEffect(() => {
        if (playing) {
            audioRef.current.loop = true;
            audioRef.current.play();

            const tick = () => {
                setPlaceholder(prev => prev + script[line.current][index.current]);
                index.current++;
            }
            if (index.current < script[line.current].length) {
                let addChar = setInterval(tick, 20);
                return () => clearInterval(addChar);
            } else if (index.current >= script[line.current].length && line.current < script.length - 1) {
                index.current = 0;
                line.current++;
                let nextline = setInterval(() => setPlaceholder(''), 2000);
                return () => clearInterval(nextline);
            } else {
                setPlaying(false);
            }
        } else {
            index.current = 0;
            line.current = 0;
            setPlaceholder('');
        }
    }, [placeholder, playing]);

    if (placeholder.length > 0 || playing) {
        return (
            <div>
                <div 
                    style={{zIndex: 200, position: "absolute", left: "30%", bottom: 128, color: "#5a6282", padding: 16, borderRadius: 200, height: 32, width: 32, backgroundColor: "rgba(242, 238, 218, 0.8)", boxShadow: "30px 30px 100px #f2eeda"}}
                    onClick={() => setPlaying(false)}
                >
                    <img className="billboard" src={"/assets/icons/stopbutton.png"} height={32} width={32}/>
                </div>

                <div style={{ position: "absolute", zIndex: 200, bottom: 96, left: '35%', width: "30%", border: "5px solid rgba(255, 255, 255, 0.5)", borderRadius: 40, borderBottomRightRadius: 0, padding: 16}}>
                    <h2 style={{color: "white"}}>{placeholder}</h2>
                </div>
            </div>

        );
    } else {
        return (
            <div 
                style={{color: "#5a6282", position: "absolute", zIndex: 200, bottom: 96, left: "48%", width: "30%", padding: 16, margin: 8, borderRadius: 200, height: 32, width: 32, backgroundColor: "rgba(242, 238, 218, 0.8)", boxShadow: "30px 30px 100px #f2eeda"}}
                onClick={() => setPlaying(true)}
            >
                <img className="billboard" src={"/assets/icons/playbutton.png"} height={32} width={32}/>
            </div>
        )
    }
}

const script = [
    "Hey there. Welcome to my virtual city! Let me tell you my story.",
    "But before that, if you just want a professional overview, click the LinkedIn icon above. This is more of a creative portfolio.",
    "I'm an engineer, an artist, and a student trying to make a better world through creation.",
    "I grew up in the heart of New York City, hence the billboards of my experiences.",
    "They're not great for telling a continuous story, but they're great snapshots into various pieces of one, especially when there's so much to tell.",
    "So anyway,",
    "I always was fascinated by the Caterpillar machines around me, the towering skyscrapers they built, and the cool cars on the street.",
    "Design-meets-engineering was my calling and he didn't even know it, but I began teaching himself art and coding in 5th grade.",
    "I became good enough at art through years of practice at home that I got a 4 year scholarship to a NYC art school alongside high school. I won a bunch of awards and exhibited in the Met Museum.",
    "At the same time, I learned to build apps and games, and built a free service for my school to match peer tutors and organize study materials.",
    "I also did two summers of research at Fordham University in robotics AI and computer vision, including one publication, plus an internship at an AI chatbot startup.",
    "All while studying theater, history, literature, and more at one of NYC's best high schools.",
    "Then college -- Georgia Tech, Georgia Institute of Technology, GT.",
    "Coursework, hack-a-thons, startup programs, liquid-fueled rockets -- ideas in my head of doing something big for the world with tech.",
    "I tried one with some smart guys from the hack-a-thon they won together. Got far, but not enough.",
    "But it was still in the back of my head.",
    "I joined a lab and began researching how language models can collaborate with humans on creative tasks, like storytelling and game design. I just published my first paper after one semester and is continuing work.",
    "That summer, I interned at Mark Zuckerberg's philanthropy, the Chan Zuckerberg Initiative. Did some core backend and infrastructure engineering on tools to help scientists analyze genetic data and cure disease.",
    "Now I'm here. The story isn't finished being written yet.",
    "And the idea is still there, though a bit different: doing something big for the world with creation.",
    "Explore these snapshots of my experiences and projects above."
];

export default Dialogue;
