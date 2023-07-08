const ratingBtns = document.querySelectorAll('.btn');
const choiceBox = document.getElementById("userChoice");
const submitBtn = document.getElementById("submit");
const thxPage = document.getElementById('thankyou-page');
const mainPage = document.getElementById('main-page');


let getNum = function(e){
   choiceBox.innerText = e.target.dataset.num;
       
}

ratingBtns.forEach((btn)=>{
    btn.addEventListener('click',getNum );
    
})

submitBtn.addEventListener('click', function(){
    thxPage.style.display = 'block';
    mainPage.style.display= "none";
} )
