import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './EditableSpan.scss'
import Highlighter from 'react-highlight-words';

type EditableSpanType = {
  name: string
  editMode: boolean
  changeTitle: (title: string) => void
  setEditMode: (isEdite: boolean) => void
  tags: string[]
}


export const EditableSpan: React.FC<EditableSpanType> = React.memo(({
                                                                      name,
                                                                      changeTitle,
                                                                      editMode,
                                                                      setEditMode,
                                                                      tags
                                                                    }) => {
  const [title, setTitle] = useState<string>(name)
  const offEditMode = () => {
    changeTitle(title)
    setEditMode(false)
  }
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.currentTarget.value)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => e.key === 'Enter' && offEditMode()

  const searchParam = tags.map(el => el.slice(1))

  return (
    editMode ?
      <div className="input-container">
        <textarea className="textarea"
                  rows={8}
                  autoFocus
                  spellCheck={false}
                  onBlur={offEditMode}
                  value={title}
                  onChange={onChangeHandler}
                  onKeyPress={onKeyPressHandler}
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
        />
        <Highlighter
          className={'highlighter'}
          highlightClassName="YourHighlightClass"
          searchWords={searchParam}
          autoEscape={true}
          textToHighlight={title}
        />
      </div>
      : <span>{title}</span>
  )
})
