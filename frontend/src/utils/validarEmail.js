export function validarEmail(text) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(text);
}