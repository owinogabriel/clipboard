import { useState } from 'react'
import './App.css'
import { Layout } from './components/Layout'
import SnippetsTrack from './components/sections/SnippetsTrack'
import ClipboardAccess from './components/sections/ClipboardAccess'
import {Brand, Gallery} from './components/sections/Gallery'

function App() {
  const [] = useState(0)

  return (
    <Layout title="ClipBoard | Landing Page">
      <SnippetsTrack />
      <ClipboardAccess />
      <Gallery />
      <Brand />
    </Layout>
  )
}

export default App;