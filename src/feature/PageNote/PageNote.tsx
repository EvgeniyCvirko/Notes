import React from 'react';
import './PageNote.scss'
import {useAppSelector} from '../../utils/hooks';
import {Note} from '../../Components/Note/Note';
import {NavLink} from 'react-router-dom';

export const PageNote = () => {
  const noteId = localStorage.getItem('idNote')
  const note = useAppSelector(state => state.notes.notes.filter(el => el.id === noteId))

  return (
    <div className="page">
      <NavLink className="back" to={'/notes'}>Back</NavLink>
      <Note note={note[0]} withDelete={false}/>
    </div>

  )
}

