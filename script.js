const rating = document.querySelectorAll('i');
const display = document.getElementById('result');
// console.log(rating);

rating.forEach((star,selectIdx)=>{
    
    star.addEventListener('click',()=>{
        // console.log(selectIdx);
        rating.forEach((star,choices)=>{
            if(selectIdx >= choices){
                star.classList.add('active');
            }else{
                star.classList.remove('active');
            }
            // console.log(choices);
        });
    display.innerText = "Review : "+(selectIdx+1)+"/5";
    });
    
})

