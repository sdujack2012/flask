import { handleActions } from "redux-actions";
import {
  LOAD_LISTING_GROUPS_PENDING,
  LOAD_LISTING_GROUPS_SUCCESS,
  LOAD_LISTING_GROUPS_FAILED,
  SET_SELECTED_LISTING_GROUP_IDS,
  SET_SELECTED_PRODUCT_ID,
  LOAD_MORE_LISTING_GROUPS_SUCCESS,
  SET_SELECTED_QUANTITY,
  LOCK_LISTING_GROUPS_PENDING,
  LOCK_LISTING_GROUPS_SUCCESS,
  LOCK_LISTING_GROUPS_FAILED,
  SET_SELECTED_LISTING_GROUPS_BY_IDS
} from "../actions/listingGroupsActions";

const initState = {
  listingGroupResults: { listingGroups: [], next: "1", count: 0 },
  selectedListingGroupIds: {},
  selectedListingGroupsById: {},
  selectedProductId: "-10",
  selectedQuantity: null,
  isLoading: false,
  isLockingListingGropus: false,
  errors: []
};

const listingGroupActionHandlers = {
  [SET_SELECTED_PRODUCT_ID]: (state, { selectedProductId }) => {
    return {
      ...state,
      selectedProductId
    };
  },
  [LOAD_LISTING_GROUPS_PENDING]: state => {
    return {
      ...state,
      isLoading: true,
      errors: []
    };
  },
  [LOAD_LISTING_GROUPS_SUCCESS]: (state, { listingGroupResults }) => ({
    ...state,
    isLoading: false,
    listingGroupResults: {
      listingGroupsById: listingGroupResults.results,
      next: listingGroupResults.next,
      count: listingGroupResults.count
    }
  }),
  [LOAD_LISTING_GROUPS_FAILED]: (state, { error }) => ({
    ...state,
    isLoading: false,
    errors: [...state.errors, error]
  }),
  [SET_SELECTED_LISTING_GROUP_IDS]: (state, { selectedListingGroupIds }) => ({
    ...state,
    selectedListingGroupIds
  }),
  [SET_SELECTED_LISTING_GROUPS_BY_IDS]: (
    state,
    { selectedListingGroupsById }
  ) => ({
    ...state,
    selectedListingGroupsById
  }),
  [LOAD_MORE_LISTING_GROUPS_SUCCESS]: (state, { listingGroupResults }) => ({
    ...state,
    isLoading: false,
    listingGroupResults: {
      listingGroupsById: {
        ...state.listingGroupResults.listingGroupsById,
        ...listingGroupResults.results
      },
      next: listingGroupResults.next,
      count: listingGroupResults.count
    }
  }),
  [SET_SELECTED_QUANTITY]: (state, { selectedQuantity }) => ({
    ...state,
    selectedQuantity
  }),
  [LOCK_LISTING_GROUPS_PENDING]: state => ({
    ...state,
    isLockingListingGropus: true,
    errors: []
  }),
  [LOCK_LISTING_GROUPS_SUCCESS]: (state, { lockedListingIds, bascketId }) => ({
    ...state,
    lockedListingIds,
    bascketId,
    isLockingListingGropus: false
  }),
  [LOCK_LISTING_GROUPS_FAILED]: (state, { error }) => ({
    ...state,
    isLockingListingGropus: false,
    errors: [error]
  })
};

export const listingGroupsReducer = handleActions(
  {
    ...listingGroupActionHandlers
  },
  initState
);
