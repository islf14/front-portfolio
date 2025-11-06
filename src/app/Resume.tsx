import HtmlIcon from '@/components/svg/HtmlIcon'
import ExperienceCard from './ExperienceCard'
import CssIcon from '@/components/svg/CssIcon'
import TsIcon from '@/components/svg/TsIcon'
import NodeIcon from '@/components/svg/NodeIcon'
import ExIcon from '@/components/svg/ExIcon'
import PgIcon from '@/components/svg/PgIcon'

const experiences = [
  {
    company: 'Municipalidad Distrital de Ilabaya',
    place: 'Ilabaya - Tacna, Perú',
    position: 'Full Stack Developer',
    date: 'Abril 2023 - Octubre 2024',
    activities: ['Gestión de proyectos', 'Trabajo en equipo']
  },
  {
    company: 'Municipalidad Distrital de Ilabaya',
    place: 'Ilabaya - Tacna, Perú',
    position: 'Full Stack Developer',
    date: 'Abril 2023 - Octubre 2024',
    activities: ['Gestión de proyectos', 'Trabajo en equipo']
  },
  {
    company: 'Municipalidad Distrital de Ilabaya',
    place: 'Ilabaya - Tacna, Perú',
    position: 'Full Stack Developer',
    date: 'Abril 2023 - Octubre 2024',
    activities: ['Gestión de proyectos', 'Trabajo en equipo']
  }
]

const skills = [
  { name: 'Html', icon: <HtmlIcon /> },
  { name: 'Css', icon: <CssIcon /> },
  { name: 'TypeScript', icon: <TsIcon /> },
  { name: 'NodeJs', icon: <NodeIcon /> },
  { name: 'Express', icon: <ExIcon /> },
  { name: 'PostgreSQL', icon: <PgIcon /> }
]

export default function Resume() {
  return (
    <section className="container mx-auto">
      <div className="mx-2 mt-8">
        {/* experience */}
        <div>
          <h2 className="font-bold text-2xl">
            Experience<span className="text-ac">:</span>
          </h2>
          <div className="grid mt-4 gap-3 lg:grid-cols-2 xl:grid-cols-3">
            {/* card experience */}
            {experiences.map((item, index) => {
              return (
                <ExperienceCard
                  key={index}
                  company={item.company}
                  place={item.place}
                  position={item.position}
                  date={item.date}
                  activities={item.activities}
                />
              )
            })}
          </div>
        </div>

        {/* education */}
        <div className="mt-6">
          <h2 className="font-bold text-2xl">
            Education<span className="text-ac">:</span>
          </h2>
          <div className="mt-4 bg-secondary p-4 m-2 border border-transparent hover:border-ac rounded-md">
            <div className="flex gap-2 justify-between font-bold">
              <span>Universidad Nacional Jorge Basadre Grohmann</span>
              <span className="text-right">Tacna, Perú</span>
            </div>
            <div className="flex gap-2 justify-between">
              <span className="text-ac font-bold">
                Bachiller en Ingeniería en Informática y Sistemas
              </span>
              <span className="text-right italic">Diciembre 2020</span>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="mt-6">
          <h2 className="font-bold text-2xl">
            Skills<span className="text-ac">:</span>
          </h2>
          <ul className="my-6 flex gap-3 flex-wrap">
            {skills.map((item, index) => {
              return (
                <li
                  key={index}
                  className="bg-popover rounded-md flex gap-2 p-1 shrink-0 items-center"
                >
                  <span className="text-ac">{item.name}</span>
                  <span className="text-xl">{item.icon}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
