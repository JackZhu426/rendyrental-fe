import styled from 'styled-components';
import FlexWrap from '../../../../hoc/FlexWrap';

export const BasicInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f6f7;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 0 15vw;
  }
`;
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 30vw;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  padding-top: 1rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
  border-bottom: none;
  text-align: left;
`;

export const ImageContainer = styled.div`
  max-width: 700px;
  max-height: 550px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    order: -1;
  }
`;

export const VerticalMargin = styled.div`
  margin: ${(props) => props.margin};
`;

export const BodyContainer = styled(FlexWrap)`
  margin-top: 1.5rem;
`;

export const DescItem = styled.div`
  border-top: 1px solid #bdbdbd;
  padding: 1rem 0;
  width: 50vw;
  text-align: left;
`;

export const DescItemRe = styled.div`
  width: 50vw;
  text-align: left;
  margin: auto;
`;
