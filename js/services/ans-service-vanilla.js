'use strict'


function getBookAddress(onSuccess) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            gBookAddress = JSON.parse(xhr.responseText);
            onSuccess(gBookAddress);
        }
    }
    xhr.open('GET', url, true);
    xhr.send();
}

