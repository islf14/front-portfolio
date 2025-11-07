import work1 from '../assets/work/work1.png'
import work2 from '../assets/work/work2.png'
import HtmlIcon from '@/components/svg/HtmlIcon'
import CssIcon from '@/components/svg/CssIcon'
import TsIcon from '@/components/svg/TsIcon'
import NodeIcon from '@/components/svg/NodeIcon'
import ExIcon from '@/components/svg/ExIcon'
import PgIcon from '@/components/svg/PgIcon'
import LinkIcon from '@/components/svg/LinkIcon'
import GhIcon from '@/components/svg/GhIcon'
import ProjectCard, { type PjCardProps } from './ProjectCard'

const priDescription =
  'I have practical experience in MERN stack, with mastery in Express JS, NestJS and also Laravel, with the intention of providing my skills in web applications, mobile applications, databases and API development to contribute to innovative projects.'

const projects: PjCardProps[] = [
  {
    title: 'Chat Online',
    image: work1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, provident officia? Corporis et deserunt deleniti nemo in aut! Est aperiam et sequi minima architecto debitis in ea soluta facilis ullam.',
    technologies: [
      { name: 'Html', icon: <HtmlIcon /> },
      { name: 'Css', icon: <CssIcon /> },
      { name: 'TypeScript', icon: <TsIcon /> },
      { name: 'NodeJs', icon: <NodeIcon /> },
      { name: 'Express', icon: <ExIcon /> },
      { name: 'PostgreSQL', icon: <PgIcon /> }
    ],
    links: [
      { url: 'github.com', icon: <LinkIcon /> },
      { url: 'github.com', icon: <GhIcon /> }
    ]
  },
  {
    title: 'Back',
    image: work2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, provident officia? Corporis et deserunt detis in ea soluta facilis ullam.',
    technologies: [
      { name: 'TypeScript', icon: <TsIcon /> },
      { name: 'NodeJs', icon: <NodeIcon /> },
      { name: 'Express', icon: <ExIcon /> },
      { name: 'PostgreSQL', icon: <PgIcon /> }
    ],
    links: [
      { url: 'github.com', icon: <LinkIcon /> },
      { url: 'github.com', icon: <GhIcon /> }
    ]
  },
  {
    title: 'Project in NestJS',
    image: work1,
    description: 'Lorem ipsum d ?cilis ullam.',
    technologies: [
      { name: 'Html', icon: <HtmlIcon /> },
      { name: 'TypeScript', icon: <TsIcon /> },
      { name: 'Express', icon: <ExIcon /> },
      { name: 'PostgreSQL', icon: <PgIcon /> }
    ],
    links: [
      { url: 'github.com', icon: <LinkIcon /> },
      { url: 'github.com', icon: <GhIcon /> }
    ]
  },
  {
    title: 'URL shortener',
    image: work1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, provident officia? Corporis et deserunt deleniti nemo in aut! Est aperiam et sequi minima architecto debitis in ea soluta facilis ullam.',
    technologies: [
      { name: 'Html', icon: <HtmlIcon /> },
      { name: 'Css', icon: <CssIcon /> },
      { name: 'TypeScript', icon: <TsIcon /> },
      { name: 'NodeJs', icon: <NodeIcon /> },
      { name: 'Express', icon: <ExIcon /> },
      { name: 'PostgreSQL', icon: <PgIcon /> }
    ],
    links: [
      { url: 'github.com', icon: <LinkIcon /> },
      { url: 'github.com', icon: <GhIcon /> }
    ]
  }
]

export default function Home() {
  return (
    <section className="container mx-auto">
      <div className="mx-2 mt-8">
        {/* about */}
        <div className=" text-center sm:text-left">
          <span className="text-xl">Software Developer</span>
          <h2 className="text-4xl font-bold mb-6">
            Hello, I&apos;m <br />
            <span className="text-ac">Isaías Laqui</span>.
          </h2>
          <p className=" w-max-[500px]">{priDescription}</p>
        </div>
        {/* projects */}
        <hr className="my-8" />
        <h2 className="my-6 text-2xl font-bold">Projects</h2>
        {/* all cards */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {/* Card */}
          {projects.map((item, index) => {
            return (
              <ProjectCard
                key={index}
                title={item.title}
                image={item.image}
                description={item.description}
                technologies={item.technologies}
                links={item.links}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
