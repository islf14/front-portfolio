import { Check } from 'lucide-react'

type ExCardProps = {
  company: string
  place: string
  position: string
  date: string
  activities: Array<string>
}

export default function ExperienceCard({
  company,
  place,
  position,
  date,
  activities
}: ExCardProps) {
  return (
    <div className="bg-secondary rounded-md p-4 m-2 shadow-md">
      <div className="flex gap-2 justify-between font-bold">
        <h3>{company}</h3>
        <span className="text-right">{place}</span>
      </div>
      <div className="flex gap-2 justify-between mt-2">
        <h3 className="font-bold">{position}</h3>
        <span className="italic text-right">{date}</span>
      </div>
      <ul className="mt-2">
        {activities.map((item, index) => {
          return (
            <li key={index} className="flex gap-2 ">
              <Check className="h-4 w-4 mt-1" />
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
