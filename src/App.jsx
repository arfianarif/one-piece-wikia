import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      {/* <Route path='world/locations' element={<LocationsPage />} />
      <Route path='world/characters' element={<CharactersPage />} />
      <Route
        path='contacts'
        element={
          <Suspense fallback={<>...</>}>
            <ContactPage />
          </Suspense>
        }
      /> */}
      {/* <Route path='*' element={<ErrorPage />} /> */}
    </Routes>
  )
}

export default App
