import './App.css'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Contact from './Component/Conatact page/Contact/Contact'
import Home from './Component/Home Page/Home'
import LeftSlider from './Component/LeftSlider/LeftSlider'
import SingleProduct from './Component/Single-Product/SingleProduct'
import BlogSiderbar from './Component/BlogSidebar page/BlogSiderbar'
import WithSidebar from './Component/BlogwithSidebar page/WithSidebar'
import About from './Component/About page/About'
import { Route, Routes } from 'react-router'
import FAQSection from './Component/FAQ/FAQ'
function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/leftslider' element={<LeftSlider />} />
        <Route path='/product' element={<SingleProduct />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQSection/>} />
        <Route path='blog-left-sidebar' element={<BlogSiderbar />} />
        <Route path='blog-with-sidebar' element={<WithSidebar />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
