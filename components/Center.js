import styled from "styled-components";

// max-width: 800px;
const StyledDiv = styled.div`
  
  margin: 0 auto;
  padding: 0 50px;
`;

export default function Center({children}) {
    return (
      <StyledDiv>{children}</StyledDiv>
    );
}