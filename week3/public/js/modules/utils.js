export function showLoadingAnimation() {
    document.querySelector('.loader_wrap').classList.add('show')
}

export function removeLoadingAnimation() {
    document.querySelector('.loader_wrap').classList.remove('show')
}

// https://stackoverflow.com/questions/8900732/sort-objects-in-an-array-alphabetically-on-one-property-of-the-array

export function sortAlphabetical(data, selectValue) {
    // console.log(data, selectValue)
    switch (selectValue) {
        case "a":
            data.sort((highest, lowest) => highest.name.localeCompare(lowest.name.toLowerCase()))
            break
        case "z":
            data.sort((highest, lowest) => lowest.name.localeCompare(highest.name.toLowerCase()))
            break
        case "hoog":
            data.sort((highest, lowest) => lowest.rating - highest.rating)
            break
        case "laag":
            data.sort((highest, lowest) => highest.rating - lowest.rating)
            break
    }
    const dataObj = {
        results: data
    }
    return dataObj
}

export function cleanTagsData(data) {
    let dataObj = data

    dataObj.results.map(item => {
        let newTagArray = item.tags.map(tag => {
            return tag = {
                name: tag.name,
                language: tag.language
            }
        })
        let filteredArray = newTagArray.filter(tag => tag.language === 'eng')
        item.tags = filteredArray;
        return item;
    })
    return dataObj
}