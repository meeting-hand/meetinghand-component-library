export const html2String = (data) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = data;
    return tmp.textContent || tmp.innerText || "";
};
