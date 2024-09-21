import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import { Suspense,lazy } from 'react';
import Learnmore from './Pages/Learnmore';
import Visualgallery from './Pages/Visualgallery';
import AfroDigital from './Pages/AfroDigital';
import BrandsbyBiyi from './Pages/BrandsbyBiyi'; 
import Lightpage from './Pages/Lightpage';
import LpEmptyState from './Pages/LpEmptyState';
import LpTHanks from './Pages/LpTHanks';
import LpThanks2 from './Pages/LpThanks2';
import Visualgallerytest from './Pages/Visualgallerytest';
import Productemptystate from './Pages/Productemptystate';
// import Testpage from './Pages/Testpage';


const Home = lazy(()=> import('./Pages/Homepage'))
const Biyi = lazy(()=> import("./Pages/Biyipage"))
const Letstalk = lazy(()=> import('./Pages/Letstalkpage'))
const Portfoliopage = lazy(()=> import('./Pages/PortfolioPage'))
const Lightpages = lazy(()=> import('./Pages/Lightpages'))
const ProductsPage = lazy(()=> import('./Pages/ProductsPage'))


function App() {
  return (
    <div className="App">
      <Routes>
      <Route 
          index 
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <p>loading....</p>
                </div>
              }>
            <Home />
          </Suspense>
          }>
        </Route>
        <Route 
          path='/biyi'
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <p>loading....</p>
                </div>
              }>
            <Biyi />
          </Suspense>
          }>
        </Route>
        <Route 
          path='/letstalk'
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <p>loading....</p>
                </div>
              }>
              <Letstalk  />
            </Suspense>
            }>
        </Route>
        <Route 
          path='/portfoliopage'
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <p>loading....</p>
                </div>
              }>
              <Portfoliopage/>
            </Suspense>
            }>
        </Route>
        <Route 
          path='/lightpages'
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <p>loading....</p>
                </div>
              }>
              <Lightpages/>
            </Suspense>
            }>
        </Route>
        <Route 
          path='/productpage'
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <p>loading....</p>
                </div>
              }>
              <ProductsPage/>
            </Suspense>
            }>
        </Route>
        <Route 
          path='/learnmore'
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <p>loading....</p>
                </div>
              }>
              <Learnmore  />
            </Suspense>
            }>
        </Route>
        <Route path='/Visualgallery' element={<Visualgallery/>}></Route>
        <Route path='/AfroDigital' element={<AfroDigital/>}></Route>
        <Route path='/BrandsbyBiyi' element={<BrandsbyBiyi/>}></Route>
        <Route path='/Lightpage' element={<Lightpage/>}></Route>
        <Route path='/LpEmptyState' element={<LpEmptyState/>}></Route>
        <Route path='/LpTHanks' element={<LpTHanks/>}></Route>
        <Route path='/LpThanks2' element={<LpThanks2/>}></Route>
        <Route path='/Visualgallerytest' element={<Visualgallerytest/>}></Route>
        <Route path='/Productemptystate' element={<Productemptystate/>}></Route>
        {/* <Route path='/Testpage' element={<Testpage/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
