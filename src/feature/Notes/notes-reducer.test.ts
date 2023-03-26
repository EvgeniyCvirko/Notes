import {addNote, changeNote, deleteNote, InitialStateType, notesReducer} from './NotesReducer';

const startState: InitialStateType={
  'tags': ['#javascript', '#typescript','#angular', '#java'],
  'currentTags':[],
  'notes': []
}
test('correct notes after add note', () => {
    const endState = notesReducer(startState, addNote({ name: 'Hello', tags: ['25', '44'] }))
    expect(endState.notes[0].name).toBe('Hello')
});

test('correct notes after delete note', () => {
  startState.notes = [{id: '1', name: 'Hello', tags: ['#javascript', '#angular']}]
  const endState = notesReducer(startState, deleteNote({ id: '1', tags: ['#javascript', '#angular'] }))
  expect(endState.notes.length).toBe(0)
  expect(endState.tags.length).toBe(2)
});
test('correct notes after change note', () => {
  startState.notes = [{id: '1', name: 'The first knowledge is javascript', tags: ['#javascript', '#angular']}]
  const endState = notesReducer(startState, changeNote({ id: '1', name:'Hello', tags: ['#22'] }))
  expect(endState.notes[0].name).toBe('Hello')
  expect(endState.notes[0].tags[2]).toBe('#22')
});

