import styled from "styled-components";
import { StyledInput } from "./Input";
import search from "../assets/search.svg";

const SearchInput = (props) => {
  return <StyledSearchInput {...props} />;
};
export default SearchInput;
const StyledSearchInput = styled(StyledInput)`
  background: white url(${search}) no-repeat scroll 7px 7px;
  padding-left: 35px;
  :focus {
    outline: none !important;
    border: 2px solid var(--darkpurple);
  }
`;
