import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Projects } from '../src/pages/Projects'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  )
}
