export const setOrders = (data) => {
    return data.map((_d, index) => {
        return {
            ..._d,
            order: index + 1,
        };
    });
};
