import { useState } from 'react'
import { hokbenIA } from '../data/portfolio.js'

function InfoList({ items }) {
  return (
    <ul className="ia-list">
      {items.map((item) =>
        typeof item === 'string' ? (
          <li key={item}>{item}</li>
        ) : (
          <li key={item.label}>
            {item.label}
            <ul>
              {item.items.map((sub) => (
                <li key={sub}>{sub}</li>
              ))}
            </ul>
          </li>
        ),
      )}
    </ul>
  )
}

function IaBlock({ title, info, actions }) {
  return (
    <div className="ia-block">
      <h4>{title}</h4>
      <div className="ia-cols">
        <div>
          <h5>information</h5>
          <InfoList items={info} />
        </div>
        <div>
          <h5>action</h5>
          <InfoList items={actions} />
        </div>
      </div>
    </div>
  )
}

export default function HokBenIA() {
  const [active, setActive] = useState('home')
  const section = hokbenIA.sections.find((s) => s.id === active)

  return (
    <section className="ia">
      <h3>{hokbenIA.title}</h3>
      <p className="ia-note">{hokbenIA.note}</p>
      <div className="ia-tabs" role="tablist" aria-label="HokBen app sections">
        {hokbenIA.sections.map((s) => (
          <button
            key={s.id}
            type="button"
            className={s.id === active ? 'ia-tab active' : 'ia-tab'}
            onClick={() => setActive(s.id)}
            aria-pressed={s.id === active}
          >
            {s.label}
          </button>
        ))}
      </div>
      {section.sub ? (
        <div className="ia-grid">
          {section.sub.map((sub) => (
            <IaBlock key={sub.label} title={sub.label} info={sub.info} actions={sub.actions} />
          ))}
        </div>
      ) : (
        <IaBlock title={section.label} info={section.info} actions={section.actions} />
      )}
      <h4 className="ia-flows-title">order flows</h4>
      <div className="ia-grid">
        {hokbenIA.flows.map((flow) => (
          <IaBlock key={flow.mode} title={flow.mode} info={flow.info} actions={flow.actions} />
        ))}
      </div>
    </section>
  )
}
