export const downloadFile = (fileUrl, fileName, authToken, body = null) => {
    return new Promise(async(resolve, reject) => {
        await fetch(fileUrl, {
                headers: {
                    authorization: `Bearer ${authToken}`,
                    "content-type": "application/json",
                    accept: "application/json, text/plain, */*",
                },
                body: body ? JSON.stringify(body) : null,
                method: "POST",
            })
            .then((response) => {
                if (response.ok) {
                    return response.blob();
                } else {
                    throw new Error("Something went wrong");
                }
            })
            .then((file) => {
                const url = URL.createObjectURL(file);
                const link = document.createElement("a");
                link.href = url;
                fileName = fileName || fileUrl.substring(fileUrl.lastIndexOf("/") + 1);

                let fileExtension;
                switch (file.type) {
                    case "application/pdf":
                        fileExtension = "pdf";
                        break;

                    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                        fileExtension = "xlsx";
                        break;
                }

                link.setAttribute("download", `${fileName}.${fileExtension}`);

                document.body.appendChild(link);

                link.click();
                resolve(true);
            })
            .catch((err) => reject(err));
    });
};
