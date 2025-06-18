import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #4c9a9a;
`;

export const Card = styled.div`
  padding: 32px 40px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.10);
  min-width: 340px;
  max-width: 440px;
  border: 1.5px dashed #b2d8d8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductTitle = styled.h1`
  margin: 0 0 12px 0;
  font-size: 1.6rem;
  color: #226666;
  font-weight: 700;
`;

export const ProductPrice = styled.p`
  margin: 0 0 16px 0;
  font-size: 1.2rem;
  color: #357676;
  font-weight: 600;
`;

export const ProductDescription = styled.p`
  margin: 0 0 20px 0;
  font-size: 1.05rem;
  color: #226666;
  text-align: center;
`;

export const BackLink = styled.a`
  margin-top: 18px;
  margin-bottom: 24px;
  color: #226666;
  background: #eaf6f6;
  padding: 8px 22px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 1px 4px rgba(44, 62, 80, 0.08);
  transition: background 0.2s, color 0.2s;
  cursor: pointer;

  &:hover {
    background: #b2d8d8;
    color: #174747;
  }
`;

export const ErrorCard = styled(Card)`
  text-align: center;
  color: #4b5563;
`;

export const ErrorTitle = styled.h1`
  margin: 0 0 16px;
  font-size: 2rem;
  color: #dc2626;
  font-weight: 600;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  font-size: 1.25rem;
  color: #4b5563;
`; 