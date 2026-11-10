function Skills() {

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      title: "Backend Languages",
      skills: ["C++", "C#","Python"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Vite","Lex Talionis"]
    },
    {
      title: "Other Skills",
      skills: ["Bilingual: English and Spanish","Music Production: FL Studio", "Hardware and Software Integration Design","Interface Design"]
    }
  ]

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <h2 className="skills-title">
          Skills & Technologies
        </h2>

        <p className="section-label">WHAT I WORK WITH</p>

        <p className="skills-description">
          Technologies and tools I'm learning and currently using
          to build projects and improve my skills.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-card" key={category.title}>

              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
export default Skills