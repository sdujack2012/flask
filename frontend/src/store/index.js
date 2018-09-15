import { combineReducers } from "redux";
import { listingGroupsReducer as listingGroups } from "../reducers/listingGroupsReducer";

export { configureStore } from "./configure-store";

export const reducers = {
  listingGroups
};

export function buildRootReducer(allReducers) {
  return combineReducers({
    ...allReducers
  });
}
