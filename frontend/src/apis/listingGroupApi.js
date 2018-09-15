// const baseUrl =
//   process.env.NODE_ENV === "production"
//     ? ""
//     : "https://dev.resale.teg.technology";

// const apiHelper = new ApiHelper(baseUrl);

// export const getListingGroups = (selectedProductId, selectedQuantity) => {
//   let url = `products/${selectedProductId}/listings`;
//   if (selectedQuantity) {
//     url += `&quantity=${selectedQuantity}`;
//   }

//   return apiHelper.get(url);
// };

// export const getMoreListingGroups = nextPath => {
//   return apiHelper.get(nextPath);
// };

// export const addToBasket = requestPayload => {
//   return apiHelper.post("purchase/api/baskets/v1/baskets", requestPayload);
// };
