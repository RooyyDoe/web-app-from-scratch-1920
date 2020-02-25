export function showLoadingAnimation() {
    // Adding the class 'Show' to my loader wrap in HTML.
    // this will happen while the data will be getting loaded in.
    document.querySelector('.loader_wrap').classList.add('show')
}

export function removeLoadingAnimation() {
    // Removing the class 'Show' from the loader wrap in HTML
    // This will happen when the data is finally loaded in.
    document.querySelector('.loader_wrap').classList.remove('show')
}

// https://stackoverflow.com/questions/8900732/sort-objects-in-an-array-alphabetically-on-one-property-of-the-array
// https://www.youtube.com/watch?v=UeXDAu7SdmY
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

export function sortingGameData(data, selectValue) {

    switch (selectValue) {
        case "a":
            // Sorts alphabetical A - Z
            data.sort((highest, lowest) => highest.name.localeCompare(lowest.name.toLowerCase()))
            break
        case "z":
            // Sorts alphabetical Z - A
            data.sort((highest, lowest) => lowest.name.localeCompare(highest.name.toLowerCase()))
            break
        case "hoog":
            // Sorts on highest rating
            data.sort((highest, lowest) => lowest.rating - highest.rating)
            break
        case "laag":
            // Sorts on lowest rating
            data.sort((highest, lowest) => highest.rating - lowest.rating)
            break
    }
    const dataObj = {
        results: data
    }
    return dataObj
}

//https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

export function cleanTagsData(data) {
    // Variable with the data in it.
    let dataObj = data

    // Making a new map of the results array in the data.
    dataObj.results.map(item => {
        // Making a new map of the tags object in results
        // and putting this into a variabele.
        let newTagArray = item.tags.map(tag => {
            // returns the data how I want it to be.
            return tag = {
                name: tag.name,
                language: tag.language
            }
        })
        // This piece of code filters out all the russian tags that are
        // inside the data. And will only show the english tags.
        let filteredArray = newTagArray.filter(tag => tag.language === 'eng')
        // The value of the variable will override the tags object in results.
        item.tags = filteredArray
        return item
    })
    return dataObj
}