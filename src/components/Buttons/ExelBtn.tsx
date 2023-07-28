import styled from 'styled-components';

const ExelBtn = () => {
  return <Container>엑셀 파일 다운로드</Container>;
};

export default ExelBtn;

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 2rem;
  border: 0;
  outline: 0;
  border-radius: 8px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    opacity: 0.9;
  }
`;
