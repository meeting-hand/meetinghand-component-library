export const imageUpload = (url, bearerToken, blobInfo, progress) =>
    new Promise(async(resolve, reject) => {
        const toBase64 = (file) =>
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open("POST", url);
        if (bearerToken) {
            xhr.setRequestHeader("authorization", bearerToken);
        }

        xhr.upload.onprogress = (e) => {
            progress((e.loaded / e.total) * 100);
        };

        xhr.onload = () => {
            if (xhr.status === 403) {
                reject({ message: "HTTP Error: " + xhr.status, remove: true });
                return;
            }

            if (xhr.status < 200 || xhr.status >= 300) {
                reject("HTTP Error: " + xhr.status);
                return;
            }

            const json = JSON.parse(xhr.responseText);

            if (!json || typeof json.data.url != "string") {
                reject("Invalid JSON: " + xhr.responseText);
                return;
            }

            resolve(json.data.url);
        };

        xhr.onerror = () => {
            reject(
                "Image upload failed due to a XHR Transport error. Code: " + xhr.status
            );
        };

        const formData = new FormData();
        formData.append("image", await toBase64(blobInfo.blob()));

        xhr.send(formData);
    });