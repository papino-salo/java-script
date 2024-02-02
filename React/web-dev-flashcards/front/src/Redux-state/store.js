import { configureStore } from "@reduxjs/toolkit";
import isShowBthHeaderSlice from "../Redux-state/reducers/isShowBtnHeader";
import showCardsSlice from "./reducers/showCards";
import switchTypeAnswerSlice from "./reducers/switchType";
import addCardSlice from "./reducers/addCard";
import removeCardSlice from "./reducers/removeCard";
import updateCardSlice from "./reducers/updateCard";

export const store = configureStore({
    reducer: {
        isShowBthHeader: isShowBthHeaderSlice,
        showCards: showCardsSlice,
        switchTypeAnswer: switchTypeAnswerSlice,
        addCard: addCardSlice,
        removeCard: removeCardSlice,
        updateCard: updateCardSlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})