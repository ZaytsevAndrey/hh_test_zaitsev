import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px 0;
  min-height: 100vh;
  background: #4c9a9a;
  align-items: center;
  justify-content: center;
`;

export const ProductCard = styled.div`
  padding: 24px 32px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.08);
  min-width: 320px;
  max-width: 400px;
  transition: box-shadow 0.2s, transform 0.2s;
  border: 1.5px dashed #b2d8d8;

  &:hover {
    box-shadow: 0 4px 16px rgba(44, 62, 80, 0.15);
    transform: translateY(-2px) scale(1.01);
  }
`;

export const ProductName = styled.h2`
  margin: 0 0 8px 0;
  font-size: 1.3rem;
  color: #226666;
  font-weight: 600;
`;

export const ProductPrice = styled.p`
  margin: 0;
  font-size: 1.1rem;
  color: #357676;
  font-weight: 500;
`;

export const RefreshButton = styled.button`
  padding: 12px 32px;
  background: #eaf6f6;
  color: #226666;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 16px;
  box-shadow: 0 1px 4px rgba(44, 62, 80, 0.08);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #b2d8d8;
    color: #174747;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`; 