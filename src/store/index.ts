import {configureStore, createListenerMiddleware} from '@reduxjs/toolkit';
import {getFromLocalStorage, saveToLocalStorage} from 'utils/localStorage';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import userReducer from 'store/userSlice';

const listenerMiddleware = createListenerMiddleware();
// listenerMiddleware.startListening({
//     actionCreator: setGameStatus,
//     effect(action, listenerApi) {
//         saveToLocalStorage(gameStatusSliceName, (listenerApi.getState() as RootState).gameStatus);
//     },
// });

export const store = configureStore({
    reducer: {
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function combineInitialStateWithSavedState<T>(initialState: T, name: string): T {
    const savedState = getFromLocalStorage(name);
    if (savedState === null) {
        saveToLocalStorage(name, initialState);
    } else {
        initialState = {...initialState, ...savedState};
        saveToLocalStorage(name, initialState);
    }
    return initialState;
}