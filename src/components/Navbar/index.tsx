import './style.css'

const Navbar = () => {
  return (
    <header>
      <nav className="h-16 py-3">
        <div className="flex justify-between px-10 items-center h-16">
          <div className="flex">
            <a href="/" className="cool-link" >ALEXANDRE<br/> BASTOS</a>
          </div>
          <div>
            <ul className="flex max-md:flex-col">
              <li className="px-2">
                <a className="cool-link" href="/about">ABOUT</a>
              </li>
              <li className="px-2">
                <a className="cool-link" href="">RESUME</a>
              </li>
              <li className="px-2">
                <a className="cool-link"  href="">PROJECTS</a>
              </li>
              <li className="px-2">
                <a className="cool-link"  href="">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar