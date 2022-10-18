import styled from "styled-components";
import { FaPercent, FaGreaterThan } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  overflow-x: hidden;
`;

export const HeaderContainer = styled.div`
  height: 4rem;
  width: 100%;
  padding-left: 1.5rem;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const HeaderPreOrderText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0;
  opacity: 0.6;
`;

export const HeaderTitle = styled.div`
  font-size: 1rem;
  width: 200px;
  height: 1rem;
`;

export const MainPageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UserIntroContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.25rem 0.5rem;
  margin: 1rem 0.5rem;
`;

export const UserInfoHandleBox = styled.div`
  height: 8rem;
  width: 10rem;
  /* margin: 1rem auto; */
  border-radius: 10px;
  background: #f5f0ef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  padding-left: 1rem;
`;

export const UserInfoHeader = styled.h1`
  font-size: 1.5rem;
  opacity: 0.6;
  margin: 0;
`;

export const UserInfoHeaderSub = styled.h1`
  font-size: 1rem;
  margin: 0;
`;

export const UserOfferBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 8rem;
  /* width: 16rem; */
  /* margin: 1rem 4rem; */
  /* flex-grow: 1; */
`;

export const OfferIcon = styled(FaPercent)`
  font-size: ${({ size }) => (size ? size : "2rem")};
  background: linear-gradient(to right, #ff4242, #f06d06);
  padding: ${({ pd }) => (pd ? pd : "1rem")};
  color: #fff;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const WalletIcon = styled(IoWalletOutline)`
  font-size: 2rem;
  background: linear-gradient(to right, #9fcdea, #0369ac);
  padding: 1rem;
  color: #fff;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const FoodItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.25rem 0.75rem;
  margin: 1rem 0.5rem;
`;

export const FoodItemsContainerTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FoodItemTitle = styled.h1`
  margin: 0;
  font-size: 1rem;
`;

export const FoodItemSeeAllWrapper = styled.div`
  display: flex;
`;

export const FoodItemTitleSeeAll = styled.p`
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.6;
  text-align: center;
`;

export const NextIconWrapper = styled.div`
  /* background: red; */
  text-align: center;
  margin: 0 0.25rem;
`;

export const NextIcon = styled(GrFormNext)`
  font-size: 0.85rem;
  border-radius: 50%;
  background: #f5f0ef;
`;

export const FoodItemsScrollContainerWrapper = styled.div`
  height: 200px;
  display: flex;
  position: relative;
  overflow-x: auto;
  transition: all 3s ease-in;
  scroll-behavior: smooth;
  cursor: pointer;

  /* ::-webkit-scrollbar {
    height: 0.5rem;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(132, 146, 158);
    border-radius: 5px;
  } */
`;

export const FoodItemsScrollContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FoodItemBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 180px;
  width: 140px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  /* background: lightblue; */
  margin: 0.25rem 0.5rem;
`;

export const FoodItemImg = styled.img`
  display: block;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 120px;
  width: 100%;
`;

export const FoodItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0.25rem 0.5rem;
  background: ${({ bgColor }) => (bgColor ? bgColor : "#ffffff")};
`;

export const FoodItemContentTitle = styled.h1`
  font-size: 1rem;
  /* margin: 0.25rem; */
  margin: 0;
  text-transform: capitalize;
  color: #636b71;
  user-select: none;
`;

export const FoodItemContentPara = styled.p`
  font-size: 0.65rem;
  margin: 0;
  /* margin: 0 0.25rem; */
  /* padding: 0.25rem 0.5rem; */
  text-transform: capitalize;
  opacity: 0.6;
  font-weight: 500;
  user-select: none;
`;

export const FoodItemsPopularListBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.25rem 0.75rem;
`;

export const PopularItemsTitle = styled.h1`
  margin: 0;
  font-size: 1rem;
`;

export const FoodItemsPopularListBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const FoodPopularItemContainer = styled(Link)`
  height: 120px;
  width: 320px;
  display: flex;
  padding: 0.25rem 0.5rem;
  margin-top: 0.25rem;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  /* border: 1px solid red; */
`;

export const PopularItemImgWrapper = styled.div`
  height: 118px;
  width: 122px;
  border-radius: 14px;
`;

export const PopularItemImg = styled.img`
  display: block;
  height: 118px;
  width: 122px;
  border-radius: 14px;
  object-fit: cover;
`;

export const PopularItemContent = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-top: 0.25rem; */
  padding-left: 0.75rem;
  /* width: 100px; */
`;

export const PopularItemContentTitle = styled.h1`
  font-size: 1.5rem;
  /* margin: 0.25rem; */
  margin: 0;
  text-transform: capitalize;
  color: #636b71;
  user-select: none;
`;

export const PopularContentPara = styled.p`
  font-size: 0.75rem;
  margin: 0;
  /* margin: 0 0.25rem; */
  /* padding: 0.25rem 0.5rem; */
  text-transform: capitalize;
  opacity: 0.6;
  font-weight: 500;
  user-select: none;
`;

export const OfferNumberContainer = styled.div`
  display: flex;
  /* justify-content: space-around; */
  padding: 0.25rem 0;
`;

export const FoodItemPriceValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FoodItemRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RatingBox = styled.div`
  padding-top: 0.25rem;
  display: flex;
  align-items: center;
`;

export const StarIcon = styled(AiFillStar)`
  font-size: 0.75rem;
  margin-right: 0.25rem;
`;

export const StarRatingValue = styled.span`
  font-size: 0.65rem;
  font-weight: 700;
`;
