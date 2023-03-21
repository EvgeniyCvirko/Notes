import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Notes} from '../feature/Notes';

export const App = () => {

    return (
            <div className='app'>
                    <Routes>
                        <Route path={'/*'} element={<Notes/>}/>
                    </Routes>
            </div>
    )
}

