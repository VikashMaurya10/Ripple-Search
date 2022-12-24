document.querySelector('.search').addEventListener('click', ()=>{
    document.querySelector('.inner').classList.add('open')
})
document.querySelector('.cross').addEventListener('click', ()=>{
    if(document.getElementById('data').value.length == 0){
    document.querySelector('.inner').classList.remove('open')  
    }
})