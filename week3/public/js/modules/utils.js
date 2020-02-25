export function showLoadingAnimation() {
    document.querySelector('.loader_wrap').classList.add('show')
}
  
export function removeLoadingAnimation(){
    document.querySelector('.loader_wrap').classList.remove('show')
}

export function sortAlphabetical(data) {
   return data.sort((a, b) => { if (a.name < b.name) return -1 })
}