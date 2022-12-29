import fetch from "node-fetch";

const core = require('@actions/core')
const github = require('@actions/github')

try {
    var newUrl = core.getInput('url');
    console.log('Endpoint URL: ' + newUrl);

    var newJson = core.getInput('json');
    console.log('JSON data: ' + newJson);

    fetch (newUrl, {
        body: JSON.stringify(newJson),
        headers: {
            'dataType' : 'json',
            'content-type' : 'application/json'
        },
        method: postMessage,
        redirect: 'follow'
    })
    .then(response => {
        if (response.status === 200) {
            console.log(response.text());
        } else {
            throw new Error('Api server had an issue');
        }
    })
    .catch(error => {
        console.error(error);
    })

} catch (error) {
    core.setFailed(error.message);
}

