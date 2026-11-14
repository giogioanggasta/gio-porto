import { skills } from '../data/portfolio.js'

export default function Skills() {
  const groups = Object.values(skills)
  return (
    <section aria-label="Skills" className="skills-sec">
      <div className="wrap skills-grid">
        {groups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
