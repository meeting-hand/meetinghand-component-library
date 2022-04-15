export const camel2Snake = (str) =>
    str
    .split(/(?=[A-Z])/)
    .join("_")
    .toLowerCase();
export const snake2Camel = (str) =>
    str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
export const camel2Kebap = (str) =>
    str
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
export const kebap2Camel = (str) =>
    str.replace(/-./g, (match) => match[1].toUpperCase());

export const objCamel2Snake = (value) => {
    if (!value || typeof value !== "object" || value instanceof File)
        return value;
    if (Array.isArray(value)) return value.map(objCamel2Snake);
    return Object.fromEntries(
        Object.entries(value).map(([k, v]) => [
            camel2Snake(k) || k,
            objCamel2Snake(v),
        ])
    );
};

export const objSnake2Camel = (value) => {
    if (!value || typeof value !== "object") return value;
    if (Array.isArray(value)) return value.map(objSnake2Camel);
    return Object.fromEntries(
        Object.entries(value).map(([k, v]) => [
            snake2Camel(k) || k,
            objSnake2Camel(v),
        ])
    );
};
