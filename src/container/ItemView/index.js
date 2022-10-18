import React from "react";
import PropTypes from "prop-types";
import {
  ItemViewContentContainer,
  ItemViewImg,
  ItemViewImgWrapper,
  ItemViewPageContainer,
  ItemViewGroupContainer,
  ItemViewGroup,
  ItemViewTitle,
  PopularContentPara,
  OfferNumberContainer,
  OfferIcon,
  RatingBox,
  StarIcon,
  StarRatingValue,
  ItemViewDescription,
} from "./elements";
import firstImg from "../../images/firstImg.jpg";

function ItemView(props) {
  return (
    <ItemViewPageContainer>
      <ItemViewImgWrapper>
        <ItemViewImg src={firstImg} alt="img" />
      </ItemViewImgWrapper>
      <ItemViewContentContainer>
        <ItemViewGroupContainer>
          <ItemViewGroup>
            <ItemViewTitle>Lazy Bear</ItemViewTitle>
            <PopularContentPara> connaught place, New Delhi</PopularContentPara>
            <OfferNumberContainer>
              <OfferIcon size="8px" pd="0.25rem" />
              <PopularContentPara
                style={{ color: "#ff4242", paddingLeft: "0.25rem" }}
              >
                4 Offers trending
              </PopularContentPara>
            </OfferNumberContainer>
          </ItemViewGroup>
          <RatingBox>
            <StarIcon />
            <StarRatingValue>4.5</StarRatingValue>
          </RatingBox>
        </ItemViewGroupContainer>
        <ItemViewDescription>
          Our delicate vanilla cake swirled with chocolate and filled with mocha
          chocolate chip cream and a layer of dark chocolate ganacha.
        </ItemViewDescription>
      </ItemViewContentContainer>
    </ItemViewPageContainer>
  );
}

ItemView.propTypes = {};

export default ItemView;
