const Navbar = () => {
  return (
    <nav className="h-16">
      <div className="flex justify-between px-8 items-center h-16">
        <div className="flex">
          <p>ALEXANDRE<br/> BASTOS</p>
        </div>
        <div>
          <ul className="flex">
            <li className="px-2">
              <a href="">SOBRE</a>
            </li>
            <li className="px-2">
              <a href="">HABILIDADES</a>
            </li>
            <li className="px-2">
              <a href="">PROJETOS</a>
            </li>
            <li className="px-2">
              <a href="">CONTATO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar