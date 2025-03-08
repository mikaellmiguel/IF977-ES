import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: ${theme.COLORS.TX_800};
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input {
    border: 2px solid ${theme.COLORS.BG_500};
    color: ${theme.COLORS.BG_800};
    border-radius: 8px;
    padding: 0.5rem;

    &::placeholder {
      color: #BBBBBB;
    }
  }
`;	