import Navbar from "@/components/Navbar"
import Main from "@/components/Main"

export default function Home() {
  return (
    <div className="h-screen">
      <header>
        <Navbar />
        <Main />
      </header>
    </div>
  )
}
