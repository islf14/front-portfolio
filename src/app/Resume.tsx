import ExperienceCard from './ExperienceCard'

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

export default function Resume() {
  return (
    <section className="container mx-auto">
      <div className="mx-2 mt-8">
        {/* experience */}
        <div>
          <h2 className="font-bold text-2xl">Experience</h2>
          <div className="grid gap-3 lg:grid-cols-2 xl:grid-cols-3">
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
        {/* skills */}
        <div>
          <h2>Skills</h2>
        </div>
        {/* education */}
        <div>
          <h2>Education</h2>
        </div>
      </div>
    </section>
  )
}
