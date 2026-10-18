import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { About } from '@/pages/About'
import { CategoryDetail } from '@/pages/CategoryDetail'
import { Home } from '@/pages/Home'
import { Inquire } from '@/pages/Inquire'
import { NotFound } from '@/pages/NotFound'
import { Products } from '@/pages/Products'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<CategoryDetail />} />
          <Route path="about" element={<About />} />
          <Route path="inquire" element={<Inquire />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
