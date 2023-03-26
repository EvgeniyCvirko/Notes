import React, {useState} from 'react';
import './Notes.scss'
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {addNote, NoteType, setTags} from './NotesReducer';
import {Note} from '../../Components/Note/Note';
import {getTag} from '../../utils/getTag';
import {Modal} from '../../Components/Modal/Modal';
import {Button} from '../../Components/Button/Button';
import {MySelect} from '../../Components/MySelect/MySelect';

export const Notes = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const notes = useAppSelector(state => state.notes.notes)
  const currentTags = useAppSelector(state => state.notes.currentTags)
  const dispatch = useAppDispatch()
  const addTitle = (newNote: { name: string, tags: string }) => {
    dispatch(setTags({tags: getTag(newNote.tags)}))
    dispatch(addNote({...newNote, tags: getTag(newNote.tags)}))
    setOpen(false)
  }

  let renderNote: NoteType[]
  if (currentTags.length === 0) {
    renderNote = notes
  } else {
    renderNote = notes.filter((el) => {
      for (let i = 0; i < el.tags.length; i++) {
        if (currentTags.includes(el.tags[i])) {
          return true
        }
      }
    })
  }

  return (
    <div className="notes">
      <div className="container">
        <div className="top">
          <h1 className="top__title">Notes</h1>
          <Button className="top__button"
                  onClick={() => setOpen(true)}
                  name="Create"
          />
        </div>
        <MySelect/>
        {
          isOpen ? <Modal addNote={addTitle} callback={setOpen} isOpen={isOpen}/> : null
        }
        <div className="modal">
          {
            renderNote.map(n => {
              return <div key={n.id}>
                <Note note={n} withDelete={true}/>
              </div>
            })}
        </div>
      </div>
    </div>
  )
}

