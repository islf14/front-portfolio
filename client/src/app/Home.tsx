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
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  const priDescription = t('home.description')

  const projects: PjCardProps[] = [
    {
      title: t('home.projects.project1.title'),
      image: shortener,
      description: t('home.projects.project1.description'),
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
      title: t('home.projects.project2.title'),
      image: chat,
      description: t('home.projects.project2.description'),
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
      title: t('home.projects.project3.title'),
      image: business,
      description: t('home.projects.project3.description'),
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
        {
          url: 'https://business-directory-ten.vercel.app/login',
          icon: <LinkIcon />
        },
        { url: 'https://github.com/islf14/business-nest', icon: <GhIcon /> }
      ]
    }
  ]

  return (
    <section className="container mx-auto">
      <div className="mx-2 mt-8">
        {/* about */}
        <div className=" text-center flex flex-col justify-center items-center sm:text-left sm:items-start">
          <span className="text-xl">{t('home.title')}</span>
          <h2 className="text-4xl font-bold mb-6">
            {t('home.name1')} <br />
            <span className="text-ac">{t('home.name2')}</span>.
          </h2>
          <p className="max-w-[500px] m-auto sm:ml-0">{priDescription}</p>
        </div>
        {/* projects */}
        <hr className="my-8" />
        <h2 className="my-6 text-2xl font-bold">{t('home.subtitle')}</h2>
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
