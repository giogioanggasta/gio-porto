import { asset, projects } from '../data/portfolio.js'

export default function ChampStage() {
  const champ = projects.find((project) => project.id === 'champ')
  const stat = champ.results.stats[0]
  return (
    <section
      className="champ-stage"
      aria-label="CHAMP food ordering app — staged product still"
    >
      <div className="stage-phone">
        <div className="stage-phone-frame rise rise-d1">
          <div className="stage-phone-screen">
            <img
              src={asset('/images/champ/1.png')}
              alt="CHAMP food ordering app home screen"
              width="1920"
              height="1080"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
      <div className="satellite rise rise-d2">
        <b>{stat.value}</b>
        <span>{stat.label} — champ testing results</span>
      </div>
    </section>
  )
}
