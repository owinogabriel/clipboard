import Button from "../shared/Button"
import logo from "/assets/logo.svg"

const Header = () => {
  return (
<header className="flex flex-col bg-[url('assets/bg-header-desktop.png')] bg-cover bg-no-repeat w-full mb-6">
  <div className="flex flex-col items-center px-4 py-10 text-center">
    <img alt="Logo" className="w-20 h-20" src={logo} />
    <h1 className="mt-4 font-sans text-2xl">A history of everything you copy</h1>
    <p className="max-w-[60ch] py-2 font-sans text-gray-600">
      Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.
    </p>
    <div className="flex flex-col sm:flex-row mt-4 gap-4">
      <Button className="px-8 py-3 rounded-full text-white bg-green-600 hover:bg-green-500">Download for iOS</Button>
      <Button className="px-8 py-3 rounded-full text-white bg-violet-500 hover:bg-violet-400">Download for Mac</Button>
    </div>
  </div>
</header>

  )
}

export default Header