export const imageUpload = (file, imageUploadUrl, bearerToken) => {
    return new Promise(async(resolve, reject) => {
        const toBase64 = (file) =>
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });

        const xhr = new XMLHttpRequest();
        const formData = new FormData();
        formData.append("image", await toBase64(file));

        // log response
        xhr.onload = (response) => {
            try {
                const { data } = JSON.parse(xhr.response);
                resolve(data.url);
            } catch (error) {
                reject(error);
                alert("There was an error!");
            }
        };
        xhr.onerror = (error) => {
            reject(error);
            alert("There was an error!");
        };
        await xhr.open("POST", imageUploadUrl);
        if (bearerToken) {
            xhr.setRequestHeader("authorization", bearerToken);
        }
        await xhr.send(formData);
    });
};