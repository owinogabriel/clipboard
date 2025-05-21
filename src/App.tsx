import './App.css'
import { Layout } from './components/Layout'
import SnippetsTrack from './components/sections/SnippetsTrack'
import ClipboardAccess from './components/sections/ClipboardAccess'
import { Brand, Gallery } from './components/sections/Gallery'
import Clipboard from './components/sections/Clipboard'

function App() {

  return (
    <Layout title="ClipBoard | Landing Page">
      <SnippetsTrack />
      <ClipboardAccess />
      <Gallery />
      <Brand />
      <Clipboard />
    </Layout>
  )
}

export default App;