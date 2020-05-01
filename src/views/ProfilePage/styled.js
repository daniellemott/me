import styled from "styled-components";

export const EndP = styled.p`
  padding-bottom: 20px;
`;

export const InterestConainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 999px) {
    flex-direction: column;
  }
`;

export const AboutWrapper = styled.div`
  margin-right: 20px;
  text-align: left;
  font-size: 0.9rem;
`;
