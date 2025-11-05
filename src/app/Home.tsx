import work1 from '../assets/work/thumb1.png'
import HtmlIcon from '@/components/svg/HtmlIcon'
import CssIcon from '@/components/svg/CssIcon'
import TsIcon from '@/components/svg/TsIcon'
import NodeIcon from '@/components/svg/NodeIcon'
import ExIcon from '@/components/svg/ExIcon'
import PgIcon from '@/components/svg/PgIcon'
import LinkIcon from '@/components/svg/LinkIcon'
import GhIcon from '@/components/svg/GhIcon'
import Card, { type CardProps } from './Card'

const projects: CardProps[] = [
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
    title: 'Project in NestJS',
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
          <div className="">
            <span className="text-xl">Software Developer</span>
            <h2 className="text-4xl font-bold mb-6">
              Hello, I&apos;m <br />
              <span className="text-ac">Isaias Laqui</span>.
            </h2>
            <p className="text-white/80 w-max-[500px]">
              I have practical experience in the MERN stack, specializing in
              Express JS and Nest JS.
            </p>
          </div>
        </div>
        {/* projects */}
        <hr className="my-4" />
        <div className="">
          <h2 className="mb-2 font-bold">Personal Projects</h2>
          {/* all cards */}
          <div className="flex gap-3 flex-col flex-wrap md:flex-row justify-center items-center ">
            {/* Card */}
            {projects.map((item, index) => {
              return (
                <Card
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
      </div>
    </section>
  )
}
