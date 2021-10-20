import React from 'react';
import PropTypes from 'prop-types';
import ProfileImage from '../ProfileImage/ProfileImage';
import { Wrapper, ImageWrapper, Content, LastMessage, Date, Icon, IconWrapper } from './Contact.styles';
import { ContactName } from 'components/atoms/ContactName/ContactName';
import { useDispatch } from 'react-redux';
import { changeChat } from 'store';

interface props {
  img?: string;
  name: string;
  lastMsg: string;
  date: string;
}

const Contact: React.FC<props> = ({
  name,
  lastMsg,
  date,
  img = 'https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg'
}) => {
  const dispatch = useDispatch();
  return (
    <Wrapper tabIndex={0} title={name} onClick={() => dispatch(changeChat({ name, img }))}>
      <ImageWrapper>
        <ProfileImage src={img} size={48} />
      </ImageWrapper>
      <Content>
        <ContactName>{name}</ContactName>
        <LastMessage>{lastMsg}</LastMessage>
        <Date>{date}</Date>
      </Content>
      <IconWrapper>
        <Icon src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-tick-vector-icon-png-image_696437.jpg" />
      </IconWrapper>
    </Wrapper>
  );
};

Contact.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  lastMsg: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Contact;
