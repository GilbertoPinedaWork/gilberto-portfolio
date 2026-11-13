function Projects(){
    const projectList =[
        {
            title: "Portfolio Website",
            description: "First website project and homebase for all my projects,"+
            " contributions and skills acquired through time and effort"+
            " it serves as my tech digital portfolio. By building this project I learned"+
            " about component-based development and how version control works.",
            technologies: ["React", "JavaScript", "CSS", "Vite","Git"],
            status: "In Progress",
            link: "https://gilberto-portfolio-iota.vercel.app"
        },
        {
            title: "Voice to command Interface",
            description:"Back in Highschool I made a research project that involved"+
            " turning one word and assigning each letter a set of functions. The idea was to"+
            " be able to control different devices and execute different sequential task with"+
            " just one word. By making this project I learned to design interfaces,"+
            " the basics of system design, microcontroller programing and hardware integration."+
            " Fun fact: one year after the proposal"+
            " ALEXA was launched wich was in a way similar to what i wanted to achieve albeit different in scope",
        
            technologies: ["Arduino UNO","Servos","Bluetooth modules", "Hardware Inegration"],
            status:"DONE",
            link:"#"
        },
        {
            title:"Life Dashboard",
            description:"This is a personal project that serves three purposes:"+
            " Organize and Improve my life, Learn how to code with AI and Practice Reading and detangling AI."+
            " This project have many feature  I have found useful and that they work for me and I have put them all into" +
            " one seamless and interactive interface. This also helped learn about Firebase aswell",
            status:"DONE but Always Improving.",
            link:"https://gilslifedashboard-life-os.vercel.app/",
            technologies:["Vercel","Firebase","Javascript","AI coding"] 
        }
    ]
return(
<section className = "projects" id= "projects">

    <h3 className = "projects-title">Projects</h3>
    <div className = "projects-container">
        <div className="projects-grid">
            {projectList.map((project) => (
                <div className="project-card" key={project.title}>

                    <div className="project-info">
                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <div className="project-technologies">
                        {project.technologies.map((technology) => (
                            <span className="project-tag" key={technology}>
                            {technology}
                            </span>
                        ))}
                        </div>

                        <span className="project-status">
                        {project.status}
                        </span>
                    </div>

                </div>
            ))}
        </div>
    </div>
</section>
)
}

export default Projects