import './App.css'
import Header from './Componets/Header'
import Categories from './Componets/Categories'
import { ApiContextProvider } from './context/SwiggyApiContext'
import TopResChains from './Componets/TopResChains'
import OnlineDelivery from './Componets/OnlineDelivery'
import BestPlaces from './Componets/BestPlaces'
import BestCuisines from './Componets/BestCuisines'
import NearRestaurants from './Componets/NearRestaurants'
import Footer from './Componets/Footer'

function App() {

  return (
    <>

      <Header />
      <ApiContextProvider>
        <div className='w-[1000px] mx-auto'>
          <Categories />
          <hr className='my-6 text-gray-300' />
          <TopResChains />
          <hr className='my-6 text-gray-300' />
          <OnlineDelivery />

        </div>
      </ApiContextProvider>
      <BestPlaces />
      <BestCuisines />
      <NearRestaurants />
      <Footer />
    </>
  )
}

export default App
