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

export const fbRTDBObj2Array = (data) => {
    return data ? Object.keys(data).map((id) => data[id]) : [];
};

export const createdAtTimeStamp2DateObj = (list, timestampKey = "createdAt") =>
    list.map((_i) => {
        return {
            ..._i,
            [timestampKey]: new Date(_i[timestampKey]),
        };
    });
