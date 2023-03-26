import React, {MouseEvent, useState} from 'react';
import './Note.scss'
import {changeNote, deleteNote, NoteType, setTags} from '../../feature/Notes/NotesReducer';
import {useAppDispatch} from '../../utils/hooks';
import {EditableSpan} from '../EditableSpan/EditableSpan';
import {getTag} from '../../utils/getTag';
import {useNavigate} from 'react-router-dom';
import {Button} from '../Button/Button';

type NoteTypeProps = {
  note: NoteType
  withDelete: boolean
}

export const Note: React.FC<NoteTypeProps> = React.memo(({note, withDelete,}) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const deleteHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    dispatch(deleteNote({id: note.id, tags: note.tags}))
  }
  const editeHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setEditMode(true)
  }
  const changeTitle = (name: string) => {
    dispatch(changeNote({id: note.id, name, tags: getTag(name)}))
    dispatch(setTags({tags: getTag(name)}))
  }
  const viewingHandler = () => {
    navigate('/pageNote')
    localStorage.setItem('idNote', `${note.id}`)
  }

  return (
    <div key={note.id} className="note" onClick={viewingHandler}>
      <div className="body">
        <div className="note__title">
          <EditableSpan editMode={editMode}
                        setEditMode={setEditMode}
                        name={note.name}
                        changeTitle={changeTitle}
                        tags={note.tags}/>
        </div>
        <div className="note__tags">
          {note.tags.map((t, i) => {
            return <div key={i} className="note__tag">{t}</div>
          })}
        </div>
        <div className="note__btns">
          {withDelete && <Button onClick={deleteHandler} name="Delete" className="btn"/>}
          <Button onClick={editeHandler} name="Edite" className="btn"/>
        </div>
      </div>
    </div>
  )
})