export const escapeRegex = (text) => {
    return text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
};
