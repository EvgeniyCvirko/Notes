import React, {MouseEvent, useState} from 'react';
import {Button,} from '../Button/Button';

type PostFormPropsType = {
  create: (newPost: { name: string, tag: string }) => void
}
export const PostForm: React.FC<PostFormPropsType> = ({create}) => {
  const [note, setNote] = useState({name: '', tag: ''})


  const addNewPost = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    create(note)
    setNote({name: '', tag: ''})
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
        value={note.tag}
        onChange={e => setNote({...note, tag: e.target.value})}
        type="text"
        placeholder="Tag"
      />
      <Button onClick={addNewPost} name={'Create'}/>
    </form>
  );
};
