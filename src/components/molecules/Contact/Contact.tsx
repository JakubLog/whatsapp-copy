import React from 'react';
import PropTypes from 'prop-types';
import ProfileImage from '../ProfileImage/ProfileImage';
import { Wrapper, ImageWrapper, Content, LastMessage, Date } from './Contact.styles';
import { ContactName } from 'components/atoms/ContactName/ContactName';

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
  return (
    <Wrapper title={name}>
      <ImageWrapper>
        <ProfileImage src={img} size={48} />
      </ImageWrapper>
      <Content>
        <ContactName>{name}</ContactName>
        <LastMessage>{lastMsg}</LastMessage>
        <Date>{date}</Date>
      </Content>
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
