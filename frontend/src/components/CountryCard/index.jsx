import { Container } from './style';

export function CountryCard({flag, name, ...rest}) {
    return (
        <Container {...rest}>
            <img src={flag} alt={name} />
            <h2>{name}</h2>
        </Container>
    )
}