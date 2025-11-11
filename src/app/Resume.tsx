import HtmlIcon from '@/components/svg/HtmlIcon'
import ExperienceCard from './ExperienceCard'
import CssIcon from '@/components/svg/CssIcon'
import TsIcon from '@/components/svg/TsIcon'
import NodeIcon from '@/components/svg/NodeIcon'
import ExIcon from '@/components/svg/ExIcon'
import PgIcon from '@/components/svg/PgIcon'
import NestIcon from '@/components/svg/NestIcon'
import GraphIcon from '@/components/svg/GraphIcon'
import LaravelIcon from '@/components/svg/LaravelIcon'
import MongoIcon from '@/components/svg/MongoIcon'
import MysqlIcon from '@/components/svg/MysqlIcon'
import MariaIcon from '@/components/svg/MariaIcon'
import SqliteIcon from '@/components/svg/SqliteIcon'
import SqlIcon from '@/components/svg/SqlIcon'
import JsIcon from '@/components/svg/JsIcon'
import ReactIcon from '@/components/svg/ReactIcon'
import ReactRouterIcon from '@/components/svg/ReactRouterIcon'
import TailwindIcon from '@/components/svg/TailwindIcon'
import ViteIcon from '@/components/svg/ViteIcon'
import NextIcon from '@/components/svg/NextIcon'
import { useState } from 'react'

const description =
  "I am Full-Stack Developer and I have a Bachelor's Degree in Computer Science and Systems Engineering, with experience in different JavaScript's technologies also databases."

const experiences = [
  {
    company: 'District Municipality of Ilabaya',
    place: 'Ilabaya - Tacna, Peru',
    position: 'Project Assistant',
    date: 'April 2023 - October 2024',
    activities: ['Systems administration.', 'Project management and teamwork.']
  },
  {
    company: 'District Municipality of Ilabaya',
    place: 'Ilabaya - Tacna, Peru',
    position: 'ICT Assistant',
    date: 'May 2021 - December 2022',
    activities: [
      'Systems support.',
      'Technical support for computer equipment and structured cabling.',
      'Project management and teamwork.'
    ]
  },
  {
    company:
      'Local Educational Management Unit of Tacna and Regional Directorate of Education of Tacna',
    place: 'Tacna, Perú',
    position: 'Professional Internship',
    date: 'March 2020 - February 2021',
    activities: [
      'Develop new modules for the web-based document processing system.',
      'Verify the correct functioning of the structured cabling.',
      'Resolve any issues.'
    ]
  },
  {
    company: 'District Municipality of Coronel Gregorio Albarracín Lanchipa',
    place: 'Coronel Gregorio Albarracín Lanchipa - Tacna, Perú',
    position: 'Internship',
    date: 'April 2019 - Agost 2019',
    activities: [
      'Develop modules for a mobile application for incident monitoring',
      'Technical support for computer equipment and local network.'
    ]
  }
]

const education = {
  entity: 'Jorge Basadre Grohmann National University',
  place: 'Tacna, Peru',
  grade: "Bachelor's degree in Computer Engineering and Systems",
  date: 'December 2020'
}

const skillsBack = [
  { name: 'NodeJs', icon: <NodeIcon /> },
  { name: 'TypeScript', icon: <TsIcon /> },
  { name: 'NestJS', icon: <NestIcon /> },
  { name: 'Express', icon: <ExIcon /> },
  { name: 'REST API', icon: <CssIcon /> },
  { name: 'GraphQL', icon: <GraphIcon /> },
  { name: 'Laravel', icon: <LaravelIcon /> }
]
const skillsDB = [
  { name: 'PostgreSQL', icon: <PgIcon /> },
  { name: 'MongoDB', icon: <MongoIcon /> },
  { name: 'MySQL', icon: <MysqlIcon /> },
  { name: 'MariaDB', icon: <MariaIcon /> },
  { name: 'SQLite', icon: <SqliteIcon /> },
  { name: 'SQL Server', icon: <SqlIcon /> }
]
const skillsFront = [
  { name: 'Html 5', icon: <HtmlIcon /> },
  { name: 'Css 3', icon: <CssIcon /> },
  { name: 'JavaScript', icon: <JsIcon /> },
  { name: 'TypeScript', icon: <TsIcon /> },
  { name: 'React', icon: <ReactIcon /> },
  { name: 'React Router', icon: <ReactRouterIcon /> },
  { name: 'Tailwind', icon: <TailwindIcon /> },
  { name: 'Vite', icon: <ViteIcon /> },
  { name: 'Next', icon: <NextIcon /> }
]
const skillsMobile = [{ name: 'React Native', icon: <ReactIcon /> }]

// *******************************

export default function Resume() {
  const [exp, setExp] = useState<boolean>(true)
  const [edu, setEdu] = useState<boolean>(false)
  const [ski, setSki] = useState<boolean>(false)

  function manageExp() {
    setExp(true)
    setEdu(false)
    setSki(false)
  }
  function manageEdu() {
    setExp(false)
    setEdu(true)
    setSki(false)
  }
  function manageSki() {
    setExp(false)
    setEdu(false)
    setSki(true)
  }

  const btns = [
    { name: 'Experience', onClick: manageExp, status: exp },
    { name: 'Skills', onClick: manageSki, status: ski },
    { name: 'Education', onClick: manageEdu, status: edu }
  ]

  return (
    <section className="container mx-auto">
      <div className="mx-2 mt-8 md:flex md:gap-6">
        {/* summary */}
        <div className="md:w-1/3">
          <p>{description}</p>
          <div role="tablist" className="flex flex-col mt-4 gap-3 items-center">
            {btns.map((item, index) => {
              return (
                <button
                  key={index}
                  role="tab"
                  tabIndex={0}
                  data-state="active"
                  onClick={item.onClick}
                  className={`${
                    item.status ? 'bg-ac text-black' : 'bg-secondary'
                  } w-2/3 rounded-md outline-1 hover:outline-ac focus:outline-ac-h focus:outline-2`}
                >
                  {item.name}
                </button>
              )
            })}
          </div>
        </div>
        {/* content */}
        <div className="mt-6 mb-9 md:mt-0 md:w-2/3 ">
          {/* experience */}
          <div role="tappanel" tabIndex={0} hidden={!exp} className="">
            <h2 className="font-bold text-2xl">
              Experience<span className="text-ac">:</span>
            </h2>
            <div className="grid mt-4 gap-3 lg:grid-cols-2 2xl:grid-cols-3">
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
          <div hidden={!ski} className="mt-6 md:mt-0">
            <h2 className="font-bold text-2xl">
              Skills<span className="text-ac">:</span>
            </h2>
            {/* Backend */}
            <h3 className="mt-5 font-bold text-xl">Backend:</h3>
            <ul className="my-3 flex gap-3 flex-wrap">
              {skillsBack.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="bg-secondary rounded-md border border-ac dark:border-transparent dark:hover:border-ac flex gap-2 p-1 shrink-0 items-center"
                  >
                    <span className="dark:text-ac">{item.name}</span>
                    <span className="text-xl">{item.icon}</span>
                  </li>
                )
              })}
            </ul>
            {/* Database */}
            <h3 className="mt-5 font-black text-xl">Database:</h3>
            <ul className="my-3 flex gap-3 flex-wrap">
              {skillsDB.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="bg-secondary rounded-md border border-ac dark:border-transparent dark:hover:border-ac flex gap-2 p-1 shrink-0 items-center"
                  >
                    <span className="dark:text-ac">{item.name}</span>
                    <span className="text-xl">{item.icon}</span>
                  </li>
                )
              })}
            </ul>
            {/* Frontend */}
            <h3 className="mt-5 font-black text-xl">Frontend:</h3>
            <ul className="my-3 flex gap-3 flex-wrap">
              {skillsFront.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="bg-secondary rounded-md border border-ac dark:border-transparent dark:hover:border-ac flex gap-2 p-1 shrink-0 items-center"
                  >
                    <span className="dark:text-ac">{item.name}</span>
                    <span className="text-xl">{item.icon}</span>
                  </li>
                )
              })}
            </ul>
            {/* Mobile */}
            <h3 className="mt-5 font-black text-xl">Mobile:</h3>
            <ul className="my-3 flex gap-3 flex-wrap">
              {skillsMobile.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="bg-secondary rounded-md border border-ac dark:border-transparent dark:hover:border-ac flex gap-2 p-1 shrink-0 items-center"
                  >
                    <span className="dark:text-ac">{item.name}</span>
                    <span className="text-xl">{item.icon}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* education */}
          <div hidden={!edu} className="mt-6 md:mt-0">
            <h2 className="font-bold text-2xl">
              Education<span className="text-ac">:</span>
            </h2>
            <div className="grid mt-4 gap-3">
              {/* card education */}
              <div className="bg-secondary p-4 m-2 border border-transparent hover:border-ac rounded-md">
                <div className="flex gap-2 justify-between font-bold">
                  <span>{education.entity}</span>
                  <span className="text-right">{education.place}</span>
                </div>
                <div className="flex gap-2 justify-between">
                  <span className="text-ac font-bold">{education.grade}</span>
                  <span className="text-right italic">{education.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
