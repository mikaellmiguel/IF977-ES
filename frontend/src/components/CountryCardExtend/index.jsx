import { Container } from './style';

export function CountryCardExtend({flag, name, capital, area, population, ...rest}) {
    return (
        <Container {...rest}>
            <img src={flag} alt={name} />
            <h2>{name}</h2>

            <p><span>Capital: </span>{capital}</p>
            <p><span>Área: </span>{area}</p>
            <p><span>População: </span>{population}</p>
        </Container>
    )
}