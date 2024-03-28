import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/home'
import ErrorPage from './pages/error'
import CharacterPage from './pages/character'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/character/:id' element={<CharacterPage />} />
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
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default App
