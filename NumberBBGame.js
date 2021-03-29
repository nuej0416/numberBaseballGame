//숫자야구 게임

//변수
let form = document.querySelector('form');
let input = document.querySelector('input');
let button = document.querySelector('button');
let result = document.querySelectorAll('div');
result1 = result[result.length-1];
let numbers;
let numberArray;
let life = 0;

//함수 
function pickNumber() {
    numbers = [1,2,3,4,5,6,7,8,9];
    numberArray = [];

    for (let i = 0; i < 4; i +=1) {
        let pick = numbers.splice(Math.floor(Math.random() * (9-i)), 1)[0];
        numberArray.push(pick);
    }
}

pickNumber();
console.log(numberArray);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let answer = input.value;
    if (answer === numberArray.join('')) {
        result1.textContent = '홈런!';
        input.value = '';
        input.focus();
        pickNumber();
        life = 0;
    } else {
        let answerArray = answer.split('');
        let strike = 0;
        let ball = 0;
        life += 1;

        if (life > 3) {
            result1.textContent = "게임 오버 답은! " + numberArray.join(',') +"입니다.";
            input.value = '';
            input.focus();
            pickNumber();
            life = 0; 
        } else {
            for (let i = 0; i < 4; i+=1) {
                if (Number(answerArray[i])===numberArray[i]) {
                    strike += 1;
                } else if (numberArray.indexOf(Number(answerArray[i])) > -1) {
                    ball += 1;
                }
            }
            result1.textContent = strike +'스트라이크' + ball +'볼 입니다.'
            input.value = '';
            input.focus();
        }
    }
});


