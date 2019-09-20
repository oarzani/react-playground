import React from "react";
import Details from "../components/Details";
import Walk from "../icons/Walk";
import Rating from "../icons/Rating";
import Euro from "../icons/Euro";

export default {
  title: "DetailsDiv"
};

export const Sample = () => (
  <Details>
    <Walk /> &nbsp; 5min
  </Details>
);

export const Star = () => (
  <Details>
    <Rating /> &nbsp;5.1
  </Details>
);

export const PriceLow = () => (
  <Details>
    <Euro />
    <Euro isGrey={true} />
    <Euro isGrey={true} />
  </Details>
);

export const PriceMedium = () => (
  <Details>
    <Euro />
    <Euro />
    <Euro isGrey={true} />
  </Details>
);
export const PriceHigh = () => (
  <Details>
    <Euro />
    <Euro />
    <Euro />
  </Details>
);
