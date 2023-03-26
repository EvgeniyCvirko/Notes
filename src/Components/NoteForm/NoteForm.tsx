import React, {MouseEvent, useState} from 'react';
import {Button,} from '../Button/Button';

type NoteFormPropsType = {
  create: (newPost: { name: string, tags: string }) => void
}
export const NoteForm: React.FC<NoteFormPropsType> = ({create}) => {
  const [note, setNote] = useState({name: '', tags: ''})


  const addNewPost = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    create(note)
    setNote({name: '', tags: ''})
  }

  return (
    <form>
      <input
        value={note.name}
        onChange={e => setNote({...note, name: e.target.value})}
        type="text"
        placeholder="Name Note"
      />
      <input
        value={note.tags}
        onChange={e => setNote({...note, tags: e.target.value})}
        type="text"
        placeholder="Tag"
      />
      <Button onClick={addNewPost} name={'Create'} className="btn"/>
    </form>
  );
};
