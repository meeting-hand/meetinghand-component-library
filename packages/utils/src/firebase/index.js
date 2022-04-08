export const fbRTDBSnapshot2Array = (snapshot) => {
    return snapshot.val() ?
        Object.keys(snapshot.val()).map((id) => {
            return {
                id,
                ...snapshot.val()[id],
            };
        }) :
        [];
};
