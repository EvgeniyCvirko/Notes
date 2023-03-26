import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {rootReducer} from '../app/store';

type RootReducerType = typeof rootReducer
type AppRootStateType = ReturnType<RootReducerType>
type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

