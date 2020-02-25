export function showLoadingAnimation() {
    document.querySelector('.loader_wrap').classList.add('show')
}
  
export function removeLoadingAnimation(){
    document.querySelector('.loader_wrap').classList.remove('show')
}