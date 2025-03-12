import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: ${theme.COLORS.BG_700};
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
  }

  input {
    background-color: ${theme.COLORS.BG_50};
    border: 2px solid ${theme.COLORS.BG_400};
    color: ${theme.COLORS.BG_800};
    border-radius: 8px;
    padding: 0.5rem;
    font-size: 1rem;

    &::placeholder {
      color: ${theme.COLORS.BG_400};
    }
  }
`;	