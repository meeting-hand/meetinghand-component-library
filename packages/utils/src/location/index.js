export const isCountryRequireState = (countryCode) => {
    if (typeof countryCode !== "string") {
        return false;
    }
    return [
        "AR",
        "AU",
        "AT",
        "BE",
        "BR",
        "CA",
        "KM",
        "ET",
        "DE",
        "IN",
        "IQ",
        "MY",
        "MX",
        "CH",
        "US",
        "VE",
    ].includes(countryCode.toUpperCase());
};
