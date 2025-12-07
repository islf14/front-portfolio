export type PjCardProps = {
  title: string
  image: string
  description: string
  technologies: Array<TechProps>
  links: Array<LinkProps>
}

type TechProps = { name: string; icon: React.ReactNode }
type LinkProps = { url: string; icon: React.ReactNode }

export default function ProjectCard({
  title,
  image,
  description,
  technologies,
  links
}: PjCardProps) {
  return (
    <div className="bg-secondary rounded-md m-1 p-6 max-w-[300px] lg:max-w-[400px] flex flex-col shadow-lg border border-transparent hover:border-ac">
      <h2 className="mb-4 font-bold">{title}</h2>
      <div className="mb-2">
        <a href={links[0].url} target="_blank">
          <img src={image} />
        </a>
      </div>
      <p className="mb-2 grow">{description}</p>
      <hr className="py-2" />
      <ul className="flex flex-wrap gap-2 mb-2">
        {technologies.map((item, index) => {
          return (
            <li
              key={index}
              className=" bg-popover rounded-md shrink-0 inline-flex gap-1 items-center p-1"
            >
              <span className="">{item.name}</span>

              <span className="text-2xl">{item.icon}</span>
            </li>
          )
        })}
      </ul>
      <hr className="py-2" />
      <div className="flex gap-4">
        {links.map((item, index) => {
          return (
            <a key={index} href={item.url} target="_blank">
              <div className="bg-white/5 w-12 h-12 rounded-full flex justify-center items-center border border-ac-h hover:text-ac">
                {item.icon}
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
