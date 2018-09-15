import dateFormat from "dateformat";

const tryParseDisplayDateTime = dateStr => {
  let displayDate = "";
  let displayTime = "";
  try {
    displayDate = dateFormat(dateStr, "ddd dS mmm yyyy");
    displayTime = dateFormat(dateStr, "h:MM TT");
  } catch (error) {
    console.log("cannot parse date", dateStr);
  }
  return { displayDate, displayTime };
};

export const searchSchema = data => {
  return {
    ...data,
    results: data.results.reduce((prev, { fields, id }) => {
      const { displayDate, displayTime } = tryParseDisplayDateTime(fields.date);
      prev[id] = {
        productId: fields.product_id,
        venue: fields.venue_name,
        contentId: fields.content_id,
        showId: fields.show_id,
        date: fields.date,
        address: `${fields.venue_city}, ${fields.venue_state}`,
        isBlacklisted: fields.blacklist_status === "1",
        id,
        displayDate,
        displayTime
      };
      return prev;
    }, {})
  };
};
