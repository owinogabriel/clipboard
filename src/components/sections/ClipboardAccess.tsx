import Device from "/assets/image-devices.png"

const ClipboardAccess = () => {
  return (
    <div className="flex flex-col items-center">
      <h1>Access Clipboard Anywhere</h1>
      <p className="max-w-[70ch] py-4">Whether you're on the go,or ata your computer, you can access all your Clipboard snippets in a few simple clicks</p>
      <img src={Device} alt="Image-devices" className="mt-2 mb-6" />

      <div className="flex flex-col gap-y-4">
        <h1 className="text-3xl">Supercharge your workflow</h1>
        <p className="text-sm items-center ml-8">We've got the tools to boost your productivity.</p>
      </div>
    </div>
  )
}

export default ClipboardAccess