export const imageUpload = async(
    url,
    bearerToken,
    blobInfo,
    success,
    failure,
    progress
) => {
    var xhr, formData;

    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    if (bearerToken) {
        xhr.setRequestHeader("authorization", bearerToken);
    }
    xhr.open("POST", url);

    xhr.upload.onprogress = function(e) {
        progress((e.loaded / e.total) * 100);
    };

    xhr.onload = function() {
        var json;

        if (xhr.status === 403) {
            failure("HTTP Error: " + xhr.status, { remove: true });
            return;
        }

        if (xhr.status < 200 || xhr.status >= 300) {
            failure("HTTP Error: " + xhr.status);
            return;
        }

        json = JSON.parse(xhr.responseText);

        if (!json || typeof json.data.url != "string") {
            failure("Invalid JSON: " + xhr.responseText);
            return;
        }

        console.log(json);

        success(json.data.url);
    };

    xhr.onerror = function() {
        failure(
            "Image upload failed due to a XHR Transport error. Code: " + xhr.status
        );
    };

    formData = new FormData();
    formData.append("image", await toBase64(blobInfo.blob()));

    xhr.send(formData);
};