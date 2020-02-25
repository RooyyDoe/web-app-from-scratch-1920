// https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939

// Checks the status of the API call and returns a response if its ok "200"
// other ways it will give an error.
const checkStatus = response => {
    if (response.ok) {
        return response
    } else {
        const error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

// Parses the json data.
const parseJSON = res => res.json()

const Fetcher = {
    get: (path) =>
        fetch(path)
        .then(checkStatus)
        .then(parseJSON)
}

export {
    Fetcher
}