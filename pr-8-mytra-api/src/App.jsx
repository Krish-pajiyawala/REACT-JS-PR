import { Route, Routes } from 'react-router-dom'
import Header from './Component/Header/Header'
import AddProduct from './Component/AddProduct/AddProduct'
import Home from './Component/Home/Home'
import Man from './Component/Man/Man'
import Women from './Component/Women/Women'
import ViewProduct from './Component/ViewProduct/ViewProduct'
import Kids from './Component/Kids/Kids'
import Footer from './Component/Footer/Footer'
import EditProduct from './Component/AddProduct/Editproduct'

function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/man' element={<Man/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/kids' element={<Kids/>}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
      <Route path='/product-info/:id' element={<ViewProduct/>}/>
      <Route path='/home' element={"Progress"}/>
      <Route path='/beauty' element={"Progress"}/>
      <Route path='/edit-product/:id' element={<EditProduct/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
