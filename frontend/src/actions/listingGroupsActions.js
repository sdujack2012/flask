// import {
//   getListingGroups,
//   getMoreListingGroups,
//   addToBasket
// } from "../apis/listingGroupApi";
// import { listGroupSchema } from "../schemas/listGroupsSchema";

// export const LOAD_LISTING_GROUPS_PENDING = "LOAD_LISTING_GROUPS_PENDING";
// export const LOAD_LISTING_GROUPS_SUCCESS = "LOAD_LISTING_GROUPS_SUCCESS";
// export const LOAD_LISTING_GROUPS_FAILED = "LOAD_LISTING_GROUPS_FAILED";

// export const LOCK_LISTING_GROUPS_PENDING = "LOCK_LISTING_GROUPS_PENDING";
// export const LOCK_LISTING_GROUPS_SUCCESS = "LOCK_LISTING_GROUPS_SUCCESS";
// export const LOCK_LISTING_GROUPS_FAILED = "LOCK_LISTING_GROUPS_FAILED";

// export const LOAD_MORE_LISTING_GROUPS_SUCCESS =
//   "LOAD_MORE_LISTING_GROUPS_SUCCESS";
// export const SET_SELECTED_LISTING_GROUP_IDS = "SET_SELECTED_LISTING_GROUP_IDS";
// export const SET_SELECTED_PRODUCT_ID = "SET_SELECTED_PRODUCT_ID";
// export const SET_SELECTED_QUANTITY = "SET_SELECTED_QUANTITY";
// export const SET_SELECTED_LISTING_GROUPS_BY_ID =
//   "SET_SELECTED_LISTING_GROUPS_BY_ID";

// const loadListingGroupsPending = () => ({
//   type: LOAD_LISTING_GROUPS_PENDING
// });

// const loadListingGroupsSuccess = (response, schema) => ({
//   type: LOAD_LISTING_GROUPS_SUCCESS,
//   payloadRename: "listingGroupResults",
//   listingGroupResults: response,
//   schema
// });

// const loadMoreListingGroupsSuccess = response => ({
//   type: LOAD_MORE_LISTING_GROUPS_SUCCESS,
//   payloadRename: "listingGroupResults",
//   listingGroupResults: response,
//   schema: listGroupSchema
// });

// const loadListingGroupsFailed = error => ({
//   type: LOAD_LISTING_GROUPS_FAILED,
//   error
// });

// const lockListingGroupsPending = () => ({
//   type: LOCK_LISTING_GROUPS_PENDING
// });

// const lockListingGroupsSuccess = (lockedListingIds, bascketId) => ({
//   type: LOCK_LISTING_GROUPS_SUCCESS,
//   lockedListingIds,
//   bascketId
// });

// const lockListingGroupsFailed = error => ({
//   type: LOCK_LISTING_GROUPS_FAILED,
//   error
// });

// export const setSelectedProductId = selectedProductId => ({
//   type: SET_SELECTED_PRODUCT_ID,
//   selectedProductId
// });

// export const setSelectedListingGroupIds = selectedListingGroupIds => ({
//   type: SET_SELECTED_LISTING_GROUP_IDS,
//   selectedListingGroupIds
// });

// export const setSelectedListingGroupsById = selectedListingGroupsById => ({
//   type: SET_SELECTED_LISTING_GROUPS_BY_ID,
//   selectedListingGroupsById
// });

// export const setSelectedQuantity = selectedQuantity => ({
//   type: SET_SELECTED_QUANTITY,
//   selectedQuantity
// });

// export const loadListingGroups = () => async (dispatch, getState) => {
//   const { selectedProductId, selectedQuantity } = getState().listingGroups;
//   dispatch(loadListingGroupsSuccess({}));
//   dispatch(loadListingGroupsPending());
//   try {
//     const response = await getListingGroups(
//       selectedProductId,
//       selectedQuantity
//     );
//     setTimeout(() => {
//       dispatch(loadListingGroupsSuccess(response, listGroupSchema));
//     }, 2000);
//   } catch (error) {
//     dispatch(loadListingGroupsFailed(error));
//     console.log(error);
//   }
// };

// export const loadMoreListingGroups = next => async dispatch => {
//   dispatch(loadListingGroupsPending());
//   try {
//     const response = await getMoreListingGroups(next);

//     dispatch(loadMoreListingGroupsSuccess(response));
//   } catch (error) {
//     dispatch(loadListingGroupsFailed(error));
//     console.log(error);
//   }
// };

// export const lockListingGroups = auth => async (dispatch, getState) => {
//   const listingGroupsState = getState().listingGroups;
//   const { listingGroupsById } = listingGroupsState.listingGroupResults;

//   const { selectedListingGroupsById } = listingGroupsState;

//   const selectedListingIds = Object.keys(selectedListingGroupsById).reduce(
//     (listingIds, listingGroup) => {
//       const listingIdsForGroup = listingGroup.listings.map(
//         listing => listing.id
//       );
//       return [...listingIds, ...listingIdsForGroup];
//     },
//     []
//   );

//   console.log(selectedListingIds);
//   // const listingsRequest = selectedListingIds.map(listingId => ({ listingId }));
//   const requestPayload = {
//     listings: selectedListingIds
//   };
//   dispatch(lockListingGroupsPending());
//   try {
//     const response = await addToBasket(requestPayload);
//     const refreshedToken = await auth.currentUser.getIdToken(true);
//     ApiHelper.prototype.token = refreshedToken;
//     dispatch(lockListingGroupsSuccess(selectedListingIds, response.id));
//     return true;
//   } catch (error) {
//     dispatch(lockListingGroupsFailed(error));
//     console.log(error);
//     return false;
//   }
// };

// // set selected productId
