/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

export const ProductCard = styled.div`
  position: relative;
  width: 190px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px var(--secondary);
  box-sizing: border-box;
  border-radius: 4px;
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  > img {
    height: 150px;
    object-fit: contain;
  }

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const ProductBrand = styled.span`
  font-size: 12px;
  margin-bottom: 8px;
  color: var(--text);
  display: inline-block;
  width: fit-content;
`;

export const ProductTitle = styled.span`
  font-size: 16px;
  margin-bottom: 8px;
  color: var(--text);
`;

export const PriceTitle = styled.span`
  font-size: 11px;
  color: var(--primary);
  margin-bottom: 3px;
  display: inline-block;
  width: fit-content;
`;

export const Price = styled.div`
  color: var(--primary);
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const CurrencySign = styled.span`
  font-size: 12px;
`;

export const PriceValue = styled.span`
  font-size: 18px;
`;

export const OverlayIconWrapper = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    background-color: var(--detail);
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;

    > svg {
        font-size: 30px;
    }
`;

export const BlackOverlay = styled.div`
  opacity: ${({ visibility }) => visibility ? '1' : '0'};
  transition: opacity 500ms ease;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
