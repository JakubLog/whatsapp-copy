import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-row: 1/3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    margin-bottom: 10px;
  }
`;

export const Image = styled.img`
  width: 400px;
  border-radius: 50%;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  color: #333;
  opacity: 0.7;
  font-weight: 200;
  font-size: 35px;
  margin: 0;
  letter-spacing: 1px;
`;
export const Subtitle = styled.p`
  color: #333;
  margin: 0;
  width: 70%;
  text-align: center;
  opacity: 0.4;
  font-size: 14px;
  letter-spacing: 1px;
`;
