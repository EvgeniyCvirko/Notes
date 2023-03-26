import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Notes} from '../feature/Notes/Notes';
import {PageNote} from '../feature/PageNote/PageNote';
import './App.scss'

export const App = () => {

  return (<>
      <div className="app"><Routes>
        <Route path={'/*'} element={<Notes/>}/>
        <Route path={'/notes'} element={<Notes/>}/>
        <Route path={'/pageNote'} element={<PageNote/>}/>
      </Routes></div>
      <footer className="footer">
        <div className="container">
          <div className="footer__row">
            <div className="footer-text">Evgeniy Cvirko 2023</div>
          </div>
        </div>
      </footer>
    </>
  )
}




