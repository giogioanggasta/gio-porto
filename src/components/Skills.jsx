import { skills } from '../data/portfolio.js'

export default function Skills() {
  const groups = Object.values(skills)
  return (
    <div>
      {groups.map((group) => (
        <div className="skill-row" key={group.title}>
          <h3>{group.title}</h3>
          <div className="chips">
            {group.items.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
