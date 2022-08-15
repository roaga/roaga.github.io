const ads = [
    // HCHS
    {
        text: "Hunter College High School in NYC is a school many want to go to but few can, so I was fortunate to be selected after the entrance exam.\n" +
            "It's home to alumnni like Justice Elena Kagan and Broadway star Lin-Manuel Miranda.\n" + 
            "I did math and science of course, but I dove deep into the arts and humanities. I wrote and acted in plays, played music representative of South Asian culture, joined the board for a multicultural magazine, discussed the science of music, and made experimental short films with Unity.",
        image: "/assets/images/HCHS.png",
        color: "#800080",
        link: "https://en.wikipedia.org/wiki/Hunter_College_High_School"
    },
    // GT
    {
        text: "I study computer science at Georgia Tech. The hard-working, high-striving environment has left an impact on me, not to mention all that I learn in class. \n" +
        "I've worked on projects such as training sports ML models and building raytracing systems from scratch.\n" +
        "But I also learn a lot from orgs like Seek Discomfort and DramaTech Theatre's improv troupe, helping me step out of my comfort zone and grow as a person.",
        image: "/assets/images/techtower.png",
        color: "#d4af37",
        link: "https://www.gatech.edu/"
    },
    // InterTutor
    {
        text: "While at Hunter College High School, as a math tutor myself, I realized how inefficient our Google Form matching system was.\n" +
        "So I created this website that matched students based on scheduling and self-described learning style. \n" +
        "It also organized study sheets for different classes for all students to share, instead of the mess in our Facebook group. \n" + 
        "After getting together a small team of other students, we helped grow it to serve over half the grade.",
        image: "/assets/images/intertutor.jpg",
        color: "#87CEEB",
        link: "https://www.youtube.com/watch?v=fif2iGE3m1Y"
    },
    // RK and Met Art
    {
        text: "As a self-taught hobbyist artist in 8th grade, I was fortunate to receive a 4 year scholarship to study art under professional artists at 92Y in New York--the Recanati Kaplan Scholarship.\n" +
        "I experienced everything from oil painting to metalworking, the world's best museums to niche galleries.\n" +
        "Over that time, I won 7 Scholastic Art and Writing awards across NYC and exhibited my work at the Metropolitan Museum of Art as a result.",
        image: "/assets/images/bluevase.jpg",
        color: "#0000FF",
        link: "https://photos.app.goo.gl/e1Uk7pjdsrQxi5K28"
    },
    // Fordham research and publication
    {
        text: "I wanted to get involved in AI, but I was just a high schooler. So I cold emailed professors around NYC for a summer research internship.\n" +
        "The chair of the CIS department of Fordham University replied to me and I ended up assisting on autonomous robot exploration work that summer.\n" +
        "The next summer, I switched to another lab at Fordham and co-authored my own paper on training neural networks in the same way human infants sharpen their vision over time.\n" +
        "That work, besides being published, was a finalist at NYCSEF and semifinalist at JSHS 2020.",
        image: "/assets/images/fordham.png",
        color: "#00FF00",
        link: "https://jov.arvojournals.org/article.aspx?articleid=2771800"
    },
    // Kore.ai
    {
        text: "As a high school student interested in AI and communication, the opportunity to intern at a leading enterprise conversational AI company -- Kore.ai -- was irresistible.\n" +
        "I designed, programmed, and trained chatbot systems using the company's proprietary tech to demonstrate to Fortune 500 and Global 500 companies at sales meetings.",
        image: "/assets/images/kore.png",
        color: "#008080",
        link: "https://kore.ai"
    },
    // Google DSC
    {
        text: "Google DSC was a unique opportunity for me to lead an engineering and design team in building a solution to a UN Sustainable Development Goal.\n" + 
        "After being selected as a project lead, I recruited a team and led them in designing and building a mobile application with a unique gamification system using Google Cloud technologies.\n" +
        "Personally, I got experience with mobile development, backend development, design using tools like Figma, and user research.",
        image: "/assets/images/solu.png",
        color: "#00FF00",
        link: "https://www.youtube.com/watch?v=JhWZspMDih0"
    },
    // YJSP
    {
        text: "Being surrounded by other forms of engineering at Georgia Tech, I thought the Yellow Jacket Space Program, a student team building a liquid-fueled rocket to go to space, was a unique opportunity.\n" +
        "I worked in a cross-disciplinary team on a low-level C++ system for our rocket avionics.",
        image: "/assets/images/YJSP.png",
        color: "#FFD700",
        link: "https://www.reddit.com/r/space/comments/mgpe3z/studentdesigned_studentbuild_studenttested_were/"
    },
    // VGDev
    {
        text: "Interested in the intersection of technology and art, and having played with Unity and Unreal Engine before on my own, I joined VGDev, an org where teams of students make games over the course of a semester.\n" +
        "My first semester, I built a custom 3D enemy AI system from scratch to meet the unique artistic vision of the team, as well as some programmatic VFX and shader effects.\n" +
        "In another semester, I developed our VR avatar system, including techniques such as inverse kinematics, for devices such as the Oculus Quest.",
        image: "/assets/images/StarIsGone.png",
        color: "#ffffff",
        link: "https://www.youtube.com/watch?v=fpk1uZ9n5v4"
    },
    // CREATE-X
    {
        text: "I took a crash course in startup development from experienced investors and entrepreneurs one summer at Georgia Tech's CREATE-X accelerator.\n" +
        "I learned business development from true startup veterans, conducted dozens of user interviews, let my team to build an NLP product that could scale to millions of data points, and built relationships with multiple multi-billion dollar companies, all in one summer.",
        image: "/assets/images/notitia.png",
        color: "#ffffff",
        link: ""
    },
    // projects
    { // Mechanic-ease
        text: "At Stanford's TreeHacks, I built a Unity plugin to make game accessibility easy to implement while following the vision of the creator.\n" +
        "Game developers just need to set game variables in the plugin and ideal values to match their creative intent, and the backend uses ML curve fitting to study player behavior and optimize these variables in real time to match that creative intent.",
        image: "/assets/images/mechanicease.png",
        color: "#ADD8E6",
        link: "https://devpost.com/software/test-08kpx3"
    },
    { // Publixmon
        text: "At Georgia Tech's HackGT 8, I built a new model for grocery retail for a challenge posed by NCR, a Fortune 500 company and leader in retail and banking payments.\n" +
        "The app turned normal shopping into a chance to collect virtual, AI-generated collectibles, like toys in a cereal box, turned unique through NFT technology. With live social features, users could trade these collectibles with each other at stores, promoting traffic, and redeem promos as they expanded their collection.\n" + 
        "This project won first place for NCR's challenge to use their retail APIs and was a great experiment in ML style transfer, blockchain tech, and real-time location features.",
        image: "/assets/images/publixmon.png",
        color: "#808000",
        link: "https://devpost.com/software/publixmon"
    },
    { // Stonklytics
        text: "At Georgia Tech's Hacklytics, in response to the recent controversies surrounding Reddit and stock trading, I developed a system to monitor social media and analyze sentiment around different stocks.\n" + 
        "The unique value to my system, however, was the visualization, which was done through a 4D graph in Unity, with models made in Blender. It let users explore stock perception in more detail than plain sentiment, and quickly visualize and understand which ones to pay attention to.\n" + 
        "This was a great experiment in 3D graphics and interaction, along with IBM and Google Cloud services.",
        image: "/assets/images/stonklytics.png",
        color: "##F8C8DC",
        link: "https://devpost.com/software/stonklytics"
    },
    { // SALON
        text: "At Georgia Tech's HackGT 7, I wanted to see if I could help make our polarized public discourse more productive.\n" + 
        "SALON is a web app that allows users to discuss important issues with each other over a live voice call, bringing the much-needed human touch back into debate.\n" + 
        "As users talk, AI analyzes the conversation and flags speech that seems unsupported by evidence or highly emotional or opinionated, visually nudging the user back into productive, civil conversation.\n" + 
        "The transcripts generated through this are also published on the site for readers to learn from these discussions.\n" + 
        "This was a challenging experiment in designing human interaction online, audio processing and NLP, and socket technology, that also won the best web dev award.",
        image: "/assets/images/salon.png",
        color: "#FFBF00",
        link: "https://devpost.com/software/hackgt2020"
    },
    { // Textbook Solution
        text: "A personal project that explore the question: can textbooks be fun?\n"+
        "Students can paste in any note sheet, textbook page, or other document and the tool will parse the text and turn it into a jigsaw puzzle.\n" +
        "It is a useful way to study that makes use of game design principles to make plain text entertaining and exciting.\n" + 
        "I made this project using the Godot game engine and made it free to use.",
        image: "/assets/images/textbooksolution.png",
        color: "#CC7722",
        link: "https://roaga.github.io/textbook-solution/"
    },
    // CZI
    {
        text: "For my first software engineering internship, I got the amazing opportunity to work at the Chan Zuckerberg Initiative. With billions in funding, the company focuses on its two pillars of science and education.\n" +
        "I joined the Single Cell Biology team, building CELLxGENE, an open-source tool to analyze genetic data at a scale of millions ot unlock insights that can potentially cure disease.\n" +
        "I integrated a novel data format that can handle millions of cells, repaired and sped up internal infrastructure, and redesigned and reimplemented our entire database in a new technology to prevent data loss.\n" +
        "I also got the opportunity to learn from some amazing people, such as ex-Google, ex-Sun Microsystems, and ex-NeXT engineers, people who helped create Linux and Java, startup veterans, the man who led Hotmail and OneDrive, and of course the founder of Facebook himself.",
        image: "/assets/images/cellxgene.png",
        color: "#ff0000",
        link: "https://chanzuckerberg.com/science/programs-resources/single-cell-biology/"
    },
    // EI Lab
    {
        text: "The Entertainment Intelligence Lab stood out to me for its sole focus on AI for creativity. With my experience in AI/ML and in fine art, I was welcomed in and joined the co-creativity project. How can humans and AI collaborate creatively, like when writing a story?\n" + 
        "Now I've published my first paper on a novel co-creative framework and continue to make progress on this idea.",
        image: "/assets/images/eilab.png",
        color: "#ff0000",
        link: "https://eilab.gatech.edu"
    },
]

export default ads;

