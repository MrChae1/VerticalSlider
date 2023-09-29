function changeSlider(){
    const sliderLeft = document.querySelector('.left');
    const allLeft = Array.from(sliderLeft.querySelectorAll('.qoutes-container'));
    const sliderRight = document.querySelector('.right');
    const allRight = Array.from(sliderRight.querySelectorAll('.sub-Container'))
    let currentslide = 0;
    let leftslide = 3;
    const slide_count = allRight.length;
    const getClick = () => {
        const allBTN = document.querySelector('.All-btn');
        console.log(allBTN);
        allBTN.addEventListener('click', function(event){
            if(event.target.id === 'Up'){
                currentslide--;
                leftslide++;
                if(currentslide < 0){
                    currentslide = slide_count -1;
                    leftslide = 0;
                }
                change(currentslide, allRight,sliderRight, sliderLeft, leftslide);
            }
            else if(event.target.id === 'Down'){
                currentslide++;
                leftslide--;
                if(currentslide > slide_count-1){
                    currentslide = 0;
                    leftslide = 3;
                }
                change(currentslide, allRight, sliderRight, sliderLeft,leftslide);
            }
        });

    }
    return { getClick }
}
function change(slides, allRight, slideR, slideL, Lslide){
    slideR.style.transform = `translateY(${-slides * allRight[0].offsetHeight}px)`;
    slideL.style.transform = `translateY(${-Lslide * allRight[0].offsetHeight}px)`;
}
function startGame(){
    const change = changeSlider();
    change.getClick();
}
const start = startGame();