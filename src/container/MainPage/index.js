import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
// import { FaPercent } from "react-icons/fa";
import {
  FoodItemBox,
  FoodItemsContainer,
  FoodItemsContainerTitleWrapper,
  FoodItemsScrollContainerWrapper,
  FoodItemSeeAllWrapper,
  FoodItemsScrollContainer,
  FoodItemTitle,
  FoodItemTitleSeeAll,
  HeaderContainer,
  HeaderPreOrderText,
  HeaderTitle,
  MainPageContainer,
  MainPageContentWrapper,
  NextIcon,
  NextIconWrapper,
  OfferIcon,
  UserInfoHandleBox,
  UserInfoHeader,
  UserInfoHeaderSub,
  UserIntroContainer,
  WalletIcon,
  FoodItemImg,
  FoodItemContentTitle,
  FoodItemContent,
  FoodItemContentPara,
  FoodItemsPopularListBoxContainer,
  PopularItemsTitle,
  FoodItemsPopularListBox,
  FoodPopularItemContainer,
  PopularItemImg,
  PopularItemContent,
  PopularItemImgWrapper,
  PopularItemContentTitle,
  PopularContentPara,
  OfferNumberContainer,
  FoodItemPriceValueContainer,
  FoodItemRatingContainer,
  RatingBox,
  StarIcon,
  StarRatingValue,
} from "./elements";

import firstImg from "../../images/firstImg.jpg";
import secondImg from "../../images/secondImg.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails, mainPageSelector } from "./reducer";
// import thirdImg from "../../images/thirdImg.jpg";
// import fourthImg from "../../images/fourthImg.jpg";

function MainPage(props) {
  const options = [
    { value: "chocolate", label: "Mumbai" },
    { value: "strawberry", label: "Delhi" },
    { value: "vanilla", label: "Hyderabad" },
  ];

  const dispatch = useDispatch();
  const { loading, restaurant } = useSelector(mainPageSelector);

  useEffect(() => {
    dispatch(fetchUserDetails());
  }, []);

  console.log(restaurant);
  return (
    <MainPageContainer>
      <HeaderContainer>
        <HeaderPreOrderText>Pre order from</HeaderPreOrderText>
        <HeaderTitle>
          <Select options={options} />
        </HeaderTitle>
      </HeaderContainer>
      <MainPageContentWrapper>
        <UserIntroContainer>
          <UserInfoHandleBox>
            <UserInfoHeader>Kalyan</UserInfoHeader>
            <UserInfoHeaderSub>Let's explore this evening</UserInfoHeaderSub>
          </UserInfoHandleBox>
          <OfferIcon />
          <WalletIcon />
        </UserIntroContainer>
        <FoodItemsContainer>
          <FoodItemsContainerTitleWrapper>
            <FoodItemTitle>Your taste</FoodItemTitle>
            <FoodItemSeeAllWrapper>
              <FoodItemTitleSeeAll>see all</FoodItemTitleSeeAll>
              <NextIconWrapper>
                <NextIcon />
              </NextIconWrapper>
            </FoodItemSeeAllWrapper>
          </FoodItemsContainerTitleWrapper>
          <FoodItemsScrollContainerWrapper>
            <FoodItemsScrollContainer>
              <FoodItemBox>
                <FoodItemImg src={firstImg} alt="firstImg" />
                <FoodItemContent bgColor={"#ECA2C5"}>
                  <FoodItemContentTitle>Nik Baker's</FoodItemContentTitle>
                  <FoodItemContentPara>
                    connaught place, New Delhi
                  </FoodItemContentPara>
                </FoodItemContent>
              </FoodItemBox>
              <FoodItemBox>
                <FoodItemImg src={secondImg} alt="secondImg" />
                <FoodItemContent bgColor={"#B8FDEB"}>
                  <FoodItemContentTitle>It's Bake</FoodItemContentTitle>
                  <FoodItemContentPara>
                    connaught place, New Delhi
                  </FoodItemContentPara>
                </FoodItemContent>
              </FoodItemBox>
              <FoodItemBox>
                <FoodItemImg src={firstImg} alt="thirdImg" />
                <FoodItemContent bgColor={"#BB93FD"}>
                  <FoodItemContentTitle>Cakery</FoodItemContentTitle>
                  <FoodItemContentPara>
                    connaught place, New Delhi
                  </FoodItemContentPara>
                </FoodItemContent>
              </FoodItemBox>
              <FoodItemBox>
                <FoodItemImg src={secondImg} alt="fourthImg" />
                <FoodItemContent bgColor={"#EEC290"}>
                  <FoodItemContentTitle>Nik Baker's</FoodItemContentTitle>
                  <FoodItemContentPara>
                    connaught place, New Delhi
                  </FoodItemContentPara>
                </FoodItemContent>
              </FoodItemBox>
              <FoodItemBox>
                <FoodItemImg src={firstImg} alt="firstImg" />
                <FoodItemContent bgColor={"#ECA2C5"}>
                  <FoodItemContentTitle>Nik Baker's</FoodItemContentTitle>
                  <FoodItemContentPara>
                    connaught place, New Delhi
                  </FoodItemContentPara>
                </FoodItemContent>
              </FoodItemBox>
              <FoodItemBox>
                <FoodItemImg src={secondImg} alt="thirdImg" />
                <FoodItemContent bgColor={"#EEC290"}>
                  <FoodItemContentTitle>Cakery</FoodItemContentTitle>
                  <FoodItemContentPara>
                    connaught place, New Delhi
                  </FoodItemContentPara>
                </FoodItemContent>
              </FoodItemBox>
              <FoodItemBox>
                <FoodItemImg src={firstImg} alt="fourthImg" />
                <FoodItemContent bgColor={"#BB93FD"}>
                  <FoodItemContentTitle>Nik Baker's</FoodItemContentTitle>
                  <FoodItemContentPara>
                    connaught place, New Delhi
                  </FoodItemContentPara>
                </FoodItemContent>
              </FoodItemBox>
              <FoodItemBox>
                <FoodItemImg src={firstImg} alt="firstImg" />
                <FoodItemContent bgColor={"#ECA2C5"}>
                  <FoodItemContentTitle>Nik Baker's</FoodItemContentTitle>
                  <FoodItemContentPara>
                    connaught place, New Delhi
                  </FoodItemContentPara>
                </FoodItemContent>
              </FoodItemBox>
              <FoodItemBox>
                <FoodItemImg src={secondImg} alt="thirdImg" />
                <FoodItemContent bgColor={"#EEC290"}>
                  <FoodItemContentTitle>Cakery</FoodItemContentTitle>
                  <FoodItemContentPara>
                    connaught place, New Delhi
                  </FoodItemContentPara>
                </FoodItemContent>
              </FoodItemBox>
            </FoodItemsScrollContainer>
          </FoodItemsScrollContainerWrapper>
        </FoodItemsContainer>
        <FoodItemsPopularListBoxContainer>
          <PopularItemsTitle>Popular Ones</PopularItemsTitle>
          <FoodItemsPopularListBox>
            <FoodPopularItemContainer to="/itemView/id">
              <PopularItemImgWrapper>
                <PopularItemImg src={secondImg} alt="thirdImg" />
              </PopularItemImgWrapper>
              <PopularItemContent>
                <PopularItemContentTitle>Cakery</PopularItemContentTitle>
                <PopularContentPara>Cake, Pastry, Pastas</PopularContentPara>
                <PopularContentPara>
                  connaught place, New Delhi
                </PopularContentPara>
                <OfferNumberContainer>
                  <OfferIcon size="8px" pd="0.25rem" />
                  <PopularContentPara
                    style={{ color: "#ff4242", paddingLeft: "0.25rem" }}
                  >
                    4 Offers trending
                  </PopularContentPara>
                </OfferNumberContainer>
                <FoodItemPriceValueContainer>
                  <FoodItemRatingContainer>
                    <RatingBox>
                      <StarIcon />
                      <StarRatingValue>4.5</StarRatingValue>
                    </RatingBox>
                    <PopularContentPara style={{ fontSize: "0.5rem" }}>
                      Popularity
                    </PopularContentPara>
                  </FoodItemRatingContainer>
                  <FoodItemRatingContainer>
                    <RatingBox>
                      {/* <StarIcon /> */}
                      <StarRatingValue>$ 200</StarRatingValue>
                    </RatingBox>
                    <PopularContentPara style={{ fontSize: "0.5rem" }}>
                      Cost for two
                    </PopularContentPara>
                  </FoodItemRatingContainer>
                </FoodItemPriceValueContainer>
              </PopularItemContent>
            </FoodPopularItemContainer>
            <FoodPopularItemContainer to="/itemView/id">
              <PopularItemImgWrapper>
                <PopularItemImg src={firstImg} alt="thirdImg" />
              </PopularItemImgWrapper>
              <PopularItemContent>
                <PopularItemContentTitle>Bake</PopularItemContentTitle>
                <PopularContentPara>Cake, Pastry, Pastas</PopularContentPara>
                <PopularContentPara>
                  connaught place, New Delhi
                </PopularContentPara>
                <OfferNumberContainer>
                  <OfferIcon size="8px" pd="0.25rem" />
                  <PopularContentPara
                    style={{ color: "#ff4242", paddingLeft: "0.25rem" }}
                  >
                    4 Offers trending
                  </PopularContentPara>
                </OfferNumberContainer>
                <FoodItemPriceValueContainer>
                  <FoodItemRatingContainer>
                    <RatingBox>
                      <StarIcon />
                      <StarRatingValue>4.5</StarRatingValue>
                    </RatingBox>
                    <PopularContentPara style={{ fontSize: "0.5rem" }}>
                      Popularity
                    </PopularContentPara>
                  </FoodItemRatingContainer>
                  <FoodItemRatingContainer>
                    <RatingBox>
                      {/* <StarIcon /> */}
                      <StarRatingValue>$ 200</StarRatingValue>
                    </RatingBox>
                    <PopularContentPara style={{ fontSize: "0.5rem" }}>
                      Cost for two
                    </PopularContentPara>
                  </FoodItemRatingContainer>
                </FoodItemPriceValueContainer>
              </PopularItemContent>
            </FoodPopularItemContainer>
            <FoodPopularItemContainer to="/itemView/id">
              <PopularItemImgWrapper>
                <PopularItemImg src={secondImg} alt="thirdImg" />
              </PopularItemImgWrapper>
              <PopularItemContent>
                <PopularItemContentTitle>Cakery</PopularItemContentTitle>
                <PopularContentPara>Cake, Pastry, Pastas</PopularContentPara>
                <PopularContentPara>
                  connaught place, New Delhi
                </PopularContentPara>
                <OfferNumberContainer>
                  <OfferIcon size="8px" pd="0.25rem" />
                  <PopularContentPara
                    style={{ color: "#ff4242", paddingLeft: "0.25rem" }}
                  >
                    4 Offers trending
                  </PopularContentPara>
                </OfferNumberContainer>
                <FoodItemPriceValueContainer>
                  <FoodItemRatingContainer>
                    <RatingBox>
                      <StarIcon />
                      <StarRatingValue>4.5</StarRatingValue>
                    </RatingBox>
                    <PopularContentPara style={{ fontSize: "0.5rem" }}>
                      Popularity
                    </PopularContentPara>
                  </FoodItemRatingContainer>
                  <FoodItemRatingContainer>
                    <RatingBox>
                      {/* <StarIcon /> */}
                      <StarRatingValue>$ 200</StarRatingValue>
                    </RatingBox>
                    <PopularContentPara style={{ fontSize: "0.5rem" }}>
                      Cost for two
                    </PopularContentPara>
                  </FoodItemRatingContainer>
                </FoodItemPriceValueContainer>
              </PopularItemContent>
            </FoodPopularItemContainer>
            <FoodPopularItemContainer to="/itemView/id">
              <PopularItemImgWrapper>
                <PopularItemImg src={secondImg} alt="thirdImg" />
              </PopularItemImgWrapper>
              <PopularItemContent>
                <PopularItemContentTitle>Pastas</PopularItemContentTitle>
                <PopularContentPara>Cake, Pastry, Pastas</PopularContentPara>
                <PopularContentPara>
                  connaught place, New Delhi
                </PopularContentPara>
                <OfferNumberContainer>
                  <OfferIcon size="8px" pd="0.25rem" />
                  <PopularContentPara
                    style={{ color: "#ff4242", paddingLeft: "0.25rem" }}
                  >
                    4 Offers trending
                  </PopularContentPara>
                </OfferNumberContainer>
                <FoodItemPriceValueContainer>
                  <FoodItemRatingContainer>
                    <RatingBox>
                      <StarIcon />
                      <StarRatingValue>4.5</StarRatingValue>
                    </RatingBox>
                    <PopularContentPara style={{ fontSize: "0.5rem" }}>
                      Popularity
                    </PopularContentPara>
                  </FoodItemRatingContainer>
                  <FoodItemRatingContainer>
                    <RatingBox>
                      {/* <StarIcon /> */}
                      <StarRatingValue>$ 200</StarRatingValue>
                    </RatingBox>
                    <PopularContentPara style={{ fontSize: "0.5rem" }}>
                      Cost for two
                    </PopularContentPara>
                  </FoodItemRatingContainer>
                </FoodItemPriceValueContainer>
              </PopularItemContent>
            </FoodPopularItemContainer>
            <FoodPopularItemContainer to="/itemView/id">
              <PopularItemImgWrapper>
                <PopularItemImg src={secondImg} alt="thirdImg" />
              </PopularItemImgWrapper>
              <PopularItemContent>
                <PopularItemContentTitle>Cakery</PopularItemContentTitle>
                <PopularContentPara>Cake, Pastry, Pastas</PopularContentPara>
                <PopularContentPara>
                  connaught place, New Delhi
                </PopularContentPara>
                <OfferNumberContainer>
                  <OfferIcon size="8px" pd="0.25rem" />
                  <PopularContentPara
                    style={{ color: "#ff4242", paddingLeft: "0.25rem" }}
                  >
                    4 Offers trending
                  </PopularContentPara>
                </OfferNumberContainer>
                <FoodItemPriceValueContainer>
                  <FoodItemRatingContainer>
                    <RatingBox>
                      <StarIcon />
                      <StarRatingValue>4.5</StarRatingValue>
                    </RatingBox>
                    <PopularContentPara style={{ fontSize: "0.5rem" }}>
                      Popularity
                    </PopularContentPara>
                  </FoodItemRatingContainer>
                  <FoodItemRatingContainer>
                    <RatingBox>
                      {/* <StarIcon /> */}
                      <StarRatingValue>$ 200</StarRatingValue>
                    </RatingBox>
                    <PopularContentPara style={{ fontSize: "0.5rem" }}>
                      Cost for two
                    </PopularContentPara>
                  </FoodItemRatingContainer>
                </FoodItemPriceValueContainer>
              </PopularItemContent>
            </FoodPopularItemContainer>
          </FoodItemsPopularListBox>
        </FoodItemsPopularListBoxContainer>
      </MainPageContentWrapper>
    </MainPageContainer>
  );
}

MainPage.propTypes = {};

export default MainPage;
