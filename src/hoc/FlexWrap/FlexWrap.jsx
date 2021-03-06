import styled from 'styled-components';

const FlexWrap = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  flex-wrap:wrap;
`;

export default FlexWrap;
