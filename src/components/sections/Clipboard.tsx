import Button from "../shared/Button"


const Clipboard = () => {
  return (
    <div className="flex flex-col items-center">
      <h1>Clipboard for iOS and Mac OS</h1>
      <p className="max-w-[29ch] lg:max-w-[60ch] text-center mt-4">
        Available for free on the App Store for Mac or iOS, sync with ICloud and you're ready to start adding to your clipboard.
      </p>

      <div className="flex flex-col gap-4 mt-8 mb-9 lg:flex-row">
        <Button className="px-8 py-3 rounded-full text-white bg-green-600 hover:bg-green-500">
          Download for iOS
        </Button>
        <Button className="px-8 py-3 rounded-full text-white bg-violet-500 hover:bg-violet-400">
          Download for Mac
        </Button>
      </div>
    </div>

  )
}

export default Clipboard