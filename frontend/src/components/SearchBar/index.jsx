import { FaSearch } from "react-icons/fa";
import { Container } from "./style";

export function SearchBar({ ...rest}) {
  return (
    <Container {...rest}>
      <FaSearch />
      <input type="text" {...rest} />
    </Container>
  )
}