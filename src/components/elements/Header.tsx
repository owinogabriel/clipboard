import Button from "../shared/Button"
import logo from "/assets/logo.svg"

const Header = () => {
  return (
    <header className="flex flex-col bg-[url('assets/bg-header-desktop.png')] bg-cover bg-no-repeat w-full mb-6">
      <div className="flex flex-col items-center p-15">
        <img src={logo} alt='Logo' className='w-20 h-20' />
        <h1 className="mt-4 font-sans ">A history of everything you copy</h1>
        <p className="max-w-[60ch] py-2 font-sans">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>

       <div className="flex mt-4 gap-x-4">
       <Button className="bg-green-600 hover:bg-green-300">
          <span>Downkoad for iOS</span>
        </Button>
        <Button className="bg-violet-500 hover:bg-violet-300">
          <span>Downkoad for Mac</span>
        </Button>
        </div>
      </div>

    </header>
  )
}

export default Header