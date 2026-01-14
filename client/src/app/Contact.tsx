import GhIcon from '@/components/svg/GhIcon'
import LinkedinIcon from '@/components/svg/LinkedinIcon'
import WpIcon from '@/components/svg/WpIcon'
import { Mail, MapPinHouse, Phone, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const links = [
  { url: 'https://github.com/islf14', icon: <GhIcon /> },
  { url: 'https://www.linkedin.com/in/isyn/', icon: <LinkedinIcon /> },
  { url: 'https://wa.me/+51931994472?text=Hello', icon: <WpIcon /> }
]

export default function Contact() {
  const { t } = useTranslation()

  const info = [
    { name: t('contact.name'), value: 'Isaias Laqui Flores', icon: <User /> },
    {
      name: t('contact.email'),
      value: 'isaiaslflores@gmail.com',
      icon: <Mail />
    },
    { name: t('contact.cellphone'), value: '+51 931 994 472', icon: <Phone /> },
    { name: t('contact.address'), value: 'Tacna - Peru', icon: <MapPinHouse /> }
  ]

  return (
    <section className="container mx-auto">
      <div className="mx-2 mt-8">
        {/* info */}
        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {info.map((item, index) => {
            return (
              <li key={index} className="flex gap-2 items-center">
                <div>{item.icon}</div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-sm">
                    {item.name}
                  </span>
                  <div className="text-ac">{item.value}</div>
                </div>
              </li>
            )
          })}
        </ul>
        <hr className="my-6" />
        {/* links */}
        <ul className="flex flex-wrap gap-4">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a target="_blank" href={item.url}>
                  <div className="rounded-full border flex justify-center items-center border-ac p-1 w-12 h-12 hover:text-ac">
                    {item.icon}
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
