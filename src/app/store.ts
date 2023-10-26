import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filtersReducer from '../features/user/usersSlice'
import authReducer from '../features/auth/authSlice'


export const store = configureStore({
 reducer: {
    filters: filtersReducer,
    auth:authReducer
 
 },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
 ReturnType,
 RootState,
 unknown,
 Action<string>
>;