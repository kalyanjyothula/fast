import styled from "styled-components";
import { FaPercent } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

export const ItemViewPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemViewImgWrapper = styled.div`
  width: 100%;
  height: 60vh;
`;

export const ItemViewImg = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  display: block;
`;

export const ItemViewContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  margin-top: -10px;
  background: #fff;
  padding: 1rem 1.5rem;
`;

export const ItemViewGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;
`;

export const ItemViewGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemViewTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

export const OfferNumberContainer = styled.div`
  display: flex;
  /* justify-content: space-around; */
  padding: 0.25rem 0;
`;

export const PopularContentPara = styled.p`
  font-size: 1rem;
  margin: 0;
  max-width: 65%;
  text-transform: capitalize;
  opacity: 0.6;
  font-weight: 500;
  user-select: none;
`;

export const OfferIcon = styled(FaPercent)`
  font-size: ${({ size }) => (size ? size : "2rem")};
  background: linear-gradient(to right, #ff4242, #f06d06);
  padding: ${({ pd }) => (pd ? pd : "1rem")};
  color: #fff;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const RatingBox = styled.div`
  padding-top: 0.25rem;
  display: flex;
  align-items: center;
  align-self: flex-end;
`;

export const StarIcon = styled(AiFillStar)`
  font-size: 1.5rem;
  margin-right: 0.25rem;
`;

export const StarRatingValue = styled.span`
  font-size: 1rem;
  font-weight: 700;
`;

export const ItemViewDescription = styled.p`
  font-size: 1rem;
  opacity: 0.7;
`;
