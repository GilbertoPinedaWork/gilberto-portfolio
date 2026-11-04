function Projects(){
    const projectList =[
        {
            title: "Portfolio Website",
            description: "First project and homebase for all my projects,"+
            " contributions and skills acquired through time and effort"+
            " it serves as my tech digital portfolio.",
            technologies: ["React", "JavaScript", "CSS", "Vite"],
            status: "In Progress",
            link: "#"
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