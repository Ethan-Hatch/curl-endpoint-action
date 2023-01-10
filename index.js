import fetch from "node-fetch";
import core from "@actions/core"
import github from "@actions/github"

try {
    var newUrl = core.getInput('url');
    console.log('Endpoint URL: ' + newUrl);

    var newJson = core.getInput('json');
    console.log('JSON data: ' + newJson);

    var token = core.getInput('github_token');
    console.log('Token:' + token);

    fetch (newUrl, {
        body: JSON.stringify(newJson),
        headers: {
            'dataType' : 'json',
            'content-type' : 'application/json',
            'authorization' : 'Bearer ${token}'
        },
        method: 'POST',
        redirect: 'follow'
    })
    .then(response => {
        if (response.status === 200) {
            console.log(response.text());
        } else {
            throw new Error(response.status);
        }
    })
    .catch(error => {
        console.error(error);
    })

    // async function curlPost() {
    //     let response = await fetch(newUrl, {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json'},
    //         body: JSON.stringify(newJson)
    //     });
    // }

} catch (error) {
    core.setFailed(error.message);
}

