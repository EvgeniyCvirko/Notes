import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v1} from 'uuid';

//state
export const slice = createSlice({
  name: 'notes',
  initialState: {
    'tags': ['#javascript', '#typescript', '#angular', '#java'],
    'currentTags': [],
    'notes': [{id: '1', name: 'The first knowledge is javascript', tags: ['#javascript', '#angular']}]
  } as InitialStateType
  ,
  reducers: {
    addNote(state, action: PayloadAction<{ name: string, tags: string[] }>) {
      const note = {...action.payload, id: v1()}
      state.notes.push(note)
    },
    deleteNote(state, action: PayloadAction<{ id: string, tags: string[] }>) {
      const tags = action.payload.tags
      const index = state.notes.findIndex(n => n.id === action.payload.id)
      if (index !== -1) state.notes.splice(index, 1)
      let actualTags: string[] = []
      state.notes.forEach(el => {
        if (action.payload.id !== el.id) {
          for (let i = 0; i < tags.length; i++) {
            if (el.tags.includes(tags[i])) actualTags.push(tags[i]);
          }
        }
      })
      const deleteTags = tags.filter(el => !actualTags.includes(el))
      state.tags = state.tags.filter(el => !deleteTags.includes(el))
    },
    changeNote(state, action: PayloadAction<{ id: string, name: string, tags: string[] }>) {
      const index = state.notes.findIndex(el => el.id === action.payload.id)
      const tags = state.notes[index].tags
      action.payload.tags.forEach(el => {
        if (!tags.includes(el)) tags.push(el)
      })
      const note = state.notes
      if (index > -1) {
        note[index] = {...note[index], name: action.payload.name, tags}
      }
    },
    setTags(state, action: PayloadAction<{ tags: string[] }>) {
      action.payload.tags.forEach(el => {
        if (!state.tags.includes(el)) {
          state.tags.push(el)
        }
      })
    },
    putCurrentTags(state, action: PayloadAction<{ currentTags: string[] }>) {
      state.currentTags = action.payload.currentTags
    },
  },
})

//reducer
export const notesReducer = slice.reducer
//action
export const {addNote, deleteNote, changeNote, setTags, putCurrentTags} = slice.actions
//types
export type InitialStateType = {
  tags: string[],
  currentTags: string[],
  notes: NoteType[]
}
export type NoteType = {
  id: string
  name: string
  tags: string[],
}
