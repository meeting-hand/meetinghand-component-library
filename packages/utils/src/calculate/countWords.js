export const CountWords = (s) => {
    return s.split(/\b\S+\b/).length - 1;
};
