const convertListingsToTickets = listings => {
  return listings.reduce((tickets, listing) => {
    tickets.push({
      id: listing.id,
      type: listing.sku.priceTypeName,
      price: listing.price.price,
      priceCategoryCode: listing.priceCategoryCode,
      priceCategoryName: listing.priceCategoryName,
      priceTypeCode: listing.priceTypeCode,
      priceTypeName: listing.priceTypeName,
      admits: listing.sku.admits
    });
    return tickets;
  }, []);
};

export const listGroupSchema = listingGroupResults => {
  return {
    ...listingGroupResults,
    results: listingGroupResults.results.reduce(
      (convertedListingGroups, listingGroup) => {
        const covertedlistingGroup = {
          ...listingGroup,
          tickets: convertListingsToTickets(listingGroup.listings)
        };
        convertedListingGroups[
          listingGroup.listingGroupId
        ] = covertedlistingGroup;

        return convertedListingGroups;
      },
      {}
    )
  };
};
