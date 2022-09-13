import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { Action } from "redux-actions";

import { feedbackReducer as feedback } from "./feedback";
import { galleryReducer as gallery } from "./gallery/gallery.reducer";
import { navigationReducer as navigation } from "./navigations/navigations.reducer";
import { supportReducer as support } from "./support/support.reducer";
import { userReducer as user } from "./user/user.reducer";

const stateReducer = combineReducers({
    user,
    support,
    feedback,
    gallery,
    navigation,
});

export const rootReducer = (state: any, action: Action<any>) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        if (state.count) nextState.count = state.count;
        return nextState;
    }
    return stateReducer(state, action);
};

export type RootState = ReturnType<typeof stateReducer>;
