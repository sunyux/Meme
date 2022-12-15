
import React, { PropTypes } from 'react'
import {Meme} from '../Meme/Meme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Result} from '../Result/Result'
import styles from './Style.module.css'
//This function define the endpoints at which requests can be made
export const App = () => {
   return(
   <div>
      <h1 className={styles.Rainbow}> Welcome Memers!!!!</h1>

      <Routes>
         <Route path='/' element={<Meme />} />
         <Route path='/about' element={<Result />}/>
      </Routes>
   </div>
   );
}
//can't include BrowerRouter-Routes-Route(page will be blank screen)
//don't know why🫠
export default App;

