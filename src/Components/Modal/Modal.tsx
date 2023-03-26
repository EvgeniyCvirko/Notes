import React from 'react';
import s from './Modal.module.scss';
import {NoteForm} from '../NoteForm/NoteForm';

type ModalPropsType = {
  callback: (isOpen: boolean) => void
  isOpen: boolean
  addNote: (newPost: { name: string, tags: string }) => void
}
export const Modal: React.FC<ModalPropsType> = ({callback, isOpen, addNote}) => {
  const classes = [s.modal]

  if (isOpen) {
    classes.push(s.active);
  }

  return (
    <div className={classes.join(' ')} onClick={() => callback(false)}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <NoteForm create={addNote}/>
      </div>
    </div>
  );
};