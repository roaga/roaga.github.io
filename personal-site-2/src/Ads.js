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
        link: "https://www.metmuseum.org/"
    },
    // Fordham research and publication
    {
        text: "I wanted to get involved in AI, but I was just a high schooler. So I cold emailed professors around NYC for a summer research internship.\n" +
        "The chair of the CIS department of Fordham University replied to me and I ended up assisting on autonomous robot exploration work that summer.\n" +
        "The next summer, I switched to another lab at Fordham and co-authored my own paper in training neural networks in the same way human infants sharpen their vision over time.\n" +
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
        text: "Google DSC was a unique opportunity for me to lead an engineering team in designing and building a solution to a UN Sustainable Development Goal.\n" + 
        "After being selected as a project lead, I recruited a team and led them in designing and building a mobile application using Google Cloud technologies.",
        image: "/assets/images/googledsc.png",
        color: "#00FF00",
        link: ""
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
        image: "/assets/images/createx.png",
        color: "#ffffff",
        link: ""
    },
    // HackGT 8 and other hackathons
    {
        text: "I've participated in multiple hack-a-thons in my time in college to experiment with new technologies and unique business ideas.\n" +
        "I've won awards at HackGT 7 & 8 and at HackRPI, including prizes sponsored by IBM and NCR, for projects involving web and mobile tech, cloud storage, and various AI/ML techniques.",
        image: "/assets/images/hackgt.png",
        color: "#FF00FF",
        link: "https://devpost.com/roaga"
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

