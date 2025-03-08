import { Container } from "./style";

export function Input({name, label, ...rest}) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} />
    </Container>
  );
}