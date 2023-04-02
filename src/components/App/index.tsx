import React from 'react'
import { HashRouter } from 'react-router-dom'
import AppContent from 'components/AppContent'

const App = () => {
   return (
      <HashRouter basename='/'>
         <AppContent />
      </HashRouter>
   )
}

export default App
