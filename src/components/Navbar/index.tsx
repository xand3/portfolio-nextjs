import './style.css'

const Navbar = () => {
  return (
    <header>
      <nav className="h-16 py-3 max-lg:py-5 max-lg:px-3">
        <div className="flex justify-between px-10 items-center h-16 max-lg:px-2 max-lg:text-sm">
          <div className="flex">
            <a href="/" className="cool-link" >ALEXANDRE<br/> BASTOS</a>
          </div>
          <div>
            <ul className="flex max-md:flex-col">
              <li className="px-2">
                <a className="cool-link" href="/about">ABOUT</a>
              </li>
              <li className="px-2">
                <a className="cool-link" href="/resume">RESUME</a>
              </li>
              <li className="px-2">
                <a className="cool-link"  href="">PROJECTS</a>
              </li>
              <li className="px-2">
                <a className="cool-link"  href="/contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar