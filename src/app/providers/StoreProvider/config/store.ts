import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'app/entities/Counter';
import { userReducer } from 'app/entities/User';
import { StateSchema } from './StateSchema';

export const store = configureStore({
    reducer: {},
});

export function createReduxStore(initialState:StateSchema) {
    const rootReducers:ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch