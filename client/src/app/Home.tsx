import shortener from '../assets/work/shortener.png'
import chat from '../assets/work/chat.png'
import business from '../assets/work/business.png'
import HtmlIcon from '@/components/svg/HtmlIcon'
import CssIcon from '@/components/svg/CssIcon'
import TsIcon from '@/components/svg/TsIcon'
import NodeIcon from '@/components/svg/NodeIcon'
import ExIcon from '@/components/svg/ExIcon'
import PgIcon from '@/components/svg/PgIcon'
import LinkIcon from '@/components/svg/LinkIcon'
import GhIcon from '@/components/svg/GhIcon'
import ProjectCard, { type PjCardProps } from './ProjectCard'
import MongoIcon from '@/components/svg/MongoIcon'
import JsIcon from '@/components/svg/JsIcon'
import SqliteIcon from '@/components/svg/SqliteIcon'
import NestIcon from '@/components/svg/NestIcon'
import ReactIcon from '@/components/svg/ReactIcon'
import ReactRouterIcon from '@/components/svg/ReactRouterIcon'
import TailwindIcon from '@/components/svg/TailwindIcon'
import ViteIcon from '@/components/svg/ViteIcon'

const priDescription =
  'I have practical experience in MERN stack, with mastery in Express JS, NestJS and also Laravel, with the intention of providing my skills in web applications, mobile applications, databases and API development to contribute to innovative projects.'

const projects: PjCardProps[] = [
  {
    title: 'URL Shortener',
    image: shortener,
    description:
      'This application shortens URLs. It takes the first three characters of the provided URL, along with three numbers, and creates a six-character path. If the path is already in use, it modifies the last letter and the following one until it is available.',
    technologies: [
      { name: 'NodeJs', icon: <NodeIcon /> },
      { name: 'TypeScript', icon: <TsIcon /> },
      { name: 'Express.JS', icon: <ExIcon /> },
      { name: 'MongoDB', icon: <MongoIcon /> },
      { name: 'Html', icon: <HtmlIcon /> },
      { name: 'Css', icon: <CssIcon /> },
      { name: 'JavaScript', icon: <JsIcon /> }
    ],
    links: [
      { url: 'https://is-url.vercel.app', icon: <LinkIcon /> },
      {
        url: 'https://github.com/islf14/url-shortening-service',
        icon: <GhIcon />
      }
    ]
  },
  {
    title: 'Chat',
    image: chat,
    description:
      'This web application creates a chat room where anyone can join and send messages. It is not possible for two users to have the same name. When the last user logs out, the chat closes and users are reset. Then, the new user logs in and creates a new chat.',
    technologies: [
      { name: 'NodeJs', icon: <NodeIcon /> },
      { name: 'TypeScript', icon: <TsIcon /> },
      { name: 'ExpressJS', icon: <ExIcon /> },
      { name: 'SQLite', icon: <SqliteIcon /> },
      { name: 'Html', icon: <HtmlIcon /> },
      { name: 'Css', icon: <CssIcon /> },
      { name: 'JavaScript', icon: <JsIcon /> }
    ],
    links: [
      { url: 'https://chat-a3gg.onrender.com', icon: <LinkIcon /> },
      { url: 'https://github.com/islf14/broadcast-server', icon: <GhIcon /> }
    ]
  },
  {
    title: 'Business Directory',
    image: business,
    description:
      'This application allows you to register users, categories, and companies. It uses jsonwebtoken for authentication, bcrypt for password hashing, and blob storage for images. I also configure CSP and CORS for added security.',
    technologies: [
      { name: 'NodeJs', icon: <NodeIcon /> },
      { name: 'TypeScript', icon: <TsIcon /> },
      { name: 'NestJS', icon: <NestIcon /> },
      { name: 'PostgreSQL', icon: <PgIcon /> },
      { name: 'Vite', icon: <ViteIcon /> },
      { name: 'React', icon: <ReactIcon /> },
      { name: 'React Router', icon: <ReactRouterIcon /> },
      { name: 'Tailwind CSS', icon: <TailwindIcon /> }
    ],
    links: [
      { url: 'https://business-directory-ten.vercel.app', icon: <LinkIcon /> },
      { url: 'https://github.com/islf14/business-nest', icon: <GhIcon /> }
    ]
  }
]

export default function Home() {
  return (
    <section className="container mx-auto">
      <div className="mx-2 mt-8">
        {/* about */}
        <div className=" text-center flex flex-col justify-center items-center sm:text-left sm:items-start">
          <span className="text-xl">Software Developer</span>
          <h2 className="text-4xl font-bold mb-6">
            Hello, I&apos;m <br />
            <span className="text-ac">Isaías Laqui</span>.
          </h2>
          <p className="max-w-[500px] m-auto sm:ml-0">{priDescription}</p>
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
