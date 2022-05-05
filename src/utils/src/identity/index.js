export const removeTempId = (data, propName = "id") => {
    return data.map((_d) => {
        return {
            ..._d,
            [propName]: typeof _d[propName] === "string" ? undefined : _d[propName],
        };
    });
};
