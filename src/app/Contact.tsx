const info = [
  { name: 'Name', isUrl: false, value: 'Isaias Laqui Flores', url: '' },
  { name: 'Email', isUrl: false, value: 'isaiaslflores@gmail.com', url: '' },
  { name: 'Phone', isUrl: false, value: '+51 931 994 472', url: '' },
  {
    name: 'GitHub',
    isUrl: true,
    value: 'www.github.com',
    url: 'https://www.github.com'
  },
  {
    name: 'LinkdIn',
    isUrl: true,
    value: 'www.linkedin.com',
    url: 'https://www.linkedin.com/feed/'
  }
]

export default function Contact() {
  return (
    <section className="container mx-auto">
      <div className="mx-2 mt-8">
        <div>
          <h3 className="font-bold text-2xl">About me</h3>
          <p className="mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam at
            exercitationem, ratione neque fugiat consectetur veniam ex culpa
            nihil voluptatum voluptatibus corrupti quae, alias, dolor
            consequatur sequi quo illum repellendus!
          </p>
          <ul className="mt-6 grid gap-6 md:grid-cols-2">
            {info.map((item, index) => {
              return (
                <li key={index} className="flex gap-2">
                  <div className="">
                    <span className="text-muted-foreground">{item.name}</span>
                    <span className="text-ac">:</span>
                  </div>
                  {item.isUrl ? (
                    <a target="_blank" href={item.url}>
                      <div className="text-ac">{item.value}</div>
                    </a>
                  ) : (
                    <div className="text-ac">{item.value}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
