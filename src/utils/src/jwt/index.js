export const parseJwt = (token) => {
    try {
        var base64Url = token.split(".")[1];
        var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        var jsonPayload = decodeURIComponent(
            atob(base64)
            .split("")
            .map(function(c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
        );

        return JSON.parse(jsonPayload);
    } catch (error) {
        return null;
    }
};

export const isFBTokenExpiry = (token) => {
    try {
        const tokenPayload = parseJwt(token.replace("Bearer ", ""));
        if (
            tokenPayload &&
            tokenPayload.exp &&
            tokenPayload.exp * 1000 < new Date().getTime()
        ) {
            return true;
        }
    } catch (error) {
        console.error(error);
        return true;
    }
    return false;
};
