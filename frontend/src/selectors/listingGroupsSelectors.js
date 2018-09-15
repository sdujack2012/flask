import { createSelector } from "reselect";

export const selectedProductInfoSelector = createSelector(
  state => state.searchResult.results,
  state => state.listingGroups.selectedProductId,
  (results, selectedProductId) => {
    return results[selectedProductId];
  }
);

export const listingGroupsSelector = createSelector(
  state => state.listingGroups.listingGroupResults.listingGroupsById || {},
  listingGroupsById => {
    return Object.values(listingGroupsById || {});
  }
);

export const selectedListingGroupIdSelector = createSelector(
  state => state.listingGroups.selectedListingGroupIds,
  selectedListingGroupIds => {
    return Object.keys(selectedListingGroupIds)[0];
  }
);

export const ticketsFromselectedListingGroupsByIdelector = createSelector(
  state => state.listingGroups.listingGroupResults.listingGroupsById,
  selectedListingGroupIdSelector,
  (listingGroupsById, selectedListingGroupId) =>
    listingGroupsById[selectedListingGroupId].tickets
);

export const totalPriceSelector = createSelector(
  ticketsFromselectedListingGroupsByIdelector,
  ticketsFromselectedListingGroup =>
    ticketsFromselectedListingGroup.reduce(
      (sum, ticket) => sum + ticket.admits.length * ticket.price,
      0
    )
);
