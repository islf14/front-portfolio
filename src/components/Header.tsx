import Dark from './Dark'

export default function Header() {
  document.addEventListener('mousedown', () => {
    console.log('in listener')
  })
  return (
    <header className="container">
      <div className="flex justify-between">
        {/* logo */}
        <div>
          <h2>
            Isaias<span>.</span>
          </h2>
        </div>
        {/* button nav */}
        <div>
          <button>btnnav</button>
        </div>
        {/* nav */}
        <div>
          <div className="">
            <Dark />
            <ul className="bg-red-400">
              <li>kjh</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
