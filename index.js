import fetch from "node-fetch";
import core from "@actions/core"
import github from "@actions/github"

try {
    var newUrl = core.getInput('url');
    console.log('Endpoint URL: ' + newUrl);

    var newJson = core.getInput('json');
    console.log('JSON data: ' + newJson);

    // fetch (newUrl, {
    //     body: JSON.stringify(newJson),
    //     headers: {
    //         'dataType' : 'json',
    //         'content-type' : 'application/json'
    //     },
    //     method: 'POST',
    //     redirect: 'follow'
    // })
    // .then(response => {
    //     if (response.status === 200) {
    //         console.log(response.text());
    //     } else {
    //         throw new Error('Api server had an issue');
    //     }
    // })
    // .catch(error => {
    //     console.error(error);
    // })

    async function curlPost() {
        let response = await fetch(newUrl, {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(newJson)
        });
    }

} catch (error) {
    core.setFailed(error.message);
}

