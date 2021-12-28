import React from 'react';
import FlexWrap from '../../hoc/FlexWrap';
import StyledIcon from '../../hoc/Icon';
import StyledText from '../../hoc/Text';
import { BiBed, BiBath } from 'react-icons/bi';
import { AiOutlineCar } from 'react-icons/ai';
import PropTypes from 'prop-types';

const RoomType = ({ headerSize, property }) => {
  const { streetNumber, streetName, city, state, postCode } = property.address;
  return (
    <>
      <StyledText bold size={headerSize}>
        {`${streetNumber} ${streetName}, ${city}, ${state}, ${postCode}`}
      </StyledText>
      <FlexWrap direction="row">
        <StyledText>
          <FlexWrap direction="row">
            <StyledIcon>
              <BiBed />
            </StyledIcon>
            <StyledText>{property.numOfBed}&nbsp;&nbsp;</StyledText>
            <StyledIcon>
              <BiBath />
            </StyledIcon>
            <StyledText>{property.numOfBath}&nbsp;&nbsp;</StyledText>
            <StyledIcon>
              <AiOutlineCar />
            </StyledIcon>
            <StyledText>{property.numOfCarSpace}&nbsp;&nbsp;</StyledText>
          </FlexWrap>
        </StyledText>
        <StyledText>{property.roomType}</StyledText>
      </FlexWrap>
    </>
  );
};

RoomType.propTypes = {
  property: PropTypes.object.isRequired,
  headerSize: PropTypes.string.isRequired,
};

export default RoomType;
