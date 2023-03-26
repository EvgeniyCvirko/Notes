import {useState} from 'react'
import Select, {OnChangeValue} from 'react-select'
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {putCurrentTags} from '../../feature/Notes/NotesReducer';
import './MySelect.scss'

type OptionType = {
  value: string
  label: string
}

export const MySelect = () => {
  const [currentTags, setCurrentTags] = useState([''])
  const dispatch = useAppDispatch()
  const tags = useAppSelector(state => state.notes.tags)
  const options: OptionType[] = []
  tags.forEach(el => options.push({value: el.slice(1), label: el}))

  const getValue = () => {
    return currentTags
      ? options.filter(c => currentTags.indexOf(c.value) >= 0)
      : []
  }
  const onChange = (newValue: OnChangeValue<OptionType, boolean>) => {
    setCurrentTags((newValue as OptionType[]).map(v => v.value))
    dispatch(putCurrentTags({currentTags: (newValue as OptionType[]).map(v => v.label)}))
  }

  return (
    <div className="mySelect">
      <h1 className="mySelect__title">Chose tags:</h1>
      <Select className="react-select-container"
              classNamePrefix="react-select"
        // @ts-ignore
              onChange={onChange}
              value={getValue()}
              options={options}
              placeholder="Chose tags"
              isMulti
      />
    </div>
  )
}

