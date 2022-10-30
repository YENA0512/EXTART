const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const endPoint = 3;
const select = [];
const result = document.querySelector("#result");

function calResult(){
  var pointArray = [
    { name: '수영', value: 0, key: 0 },
    { name: '테니스', value: 0, key: 1 },
    { name: '골프', value: 0, key: 2 },
    { name: '복싱', value: 0, key: 3 },
    { name: '축구', value: 0, key: 4 },
    { name: '클라이밍', value: 0, key: 5 },
    { name: '필라테스', value: 0, key: 6 },
    { name: '크로스핏', value: 0, key: 7 },
    { name: '요가', value: 0, key: 8 },
  ]
  for(let i = 0; i < endPoint; i++){
    var target = qnaList[i].a[select[i]];
    for(let j = 0; j< target.type.length; j++){
      for(let k = 0;k<pointArray.length;k++){
        if(target.type[j] === pointArray[k].name){
          pointArray[k].value += 1;
        }
      }
    }
  }
  var resultArray = pointArray.sort(function (a,b){
    if (a.value > b.value){
      return -1;
    }
    if (a.value < b.value){
      return 1;
    }
    return 0;
  });
  console.log(resultArray);
  let resultword = resultArray[0].key;

  return resultword;
}
function setResult(){
  let point = calResult();
  console.log(point);
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = `<h1>당신에게 맞는 운동은 &nbsp&nbsp&nbsp<strong><span class="s1">` +  infoList[point].name + `</span></strong> &nbsp&nbsp&nbsp   입니다</h1><br>`;
  var resultImg = document.createElement('img');
  const resultHashtagNum = 'hashtag' + (point+1);
  console.log("'" + resultHashtagNum + "'");
  //const resultHashtag = document.querySelector("'" + resultHashtagNum + "'");
  //document.getElementById("'" + resultHashtagNum + "'").innerHTML;
  //document.querySelector("'#" + resultHashtagNum+"'").innerHTML;
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = './img/image-' + point + '.jpg';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid2');
  imgDiv.appendChild(resultImg);
  const resultDesc1 = document.querySelector('.resultDesc1');
  resultDesc1.innerHTML = infoList[point].desc1;
  const resultDesc2 = document.querySelector('.resultDesc2');
  resultDesc2.innerHTML += infoList[point].desc2;
  const resultDesc3 = document.querySelector('.resultDesc3');
  resultDesc3.innerHTML += infoList[point].desc3;
  return point+1;
}
function goResult(){
  qna.style.WebkitAnimation = "fadeOut 0.5s";
  qna.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 0)})

    console.log(select);
    setResult();
    calResult();
}
function addAnswer(answerText,qIdx,idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.style.marginBottom = '54px';
   //answer.classList.add('style:"margin-bottom:54px";');
  // answer.classList.add('py-4');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');
  a.appendChild(answer);
  answer.innerHTML = answerText;
  answer.addEventListener("click",function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i<children.length;i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      select[qIdx] = idx;
      for(let i = 0; i<children.length;i++){
        children[i].style.display = 'none';
      }

    goNext(++qIdx);
  },450)
  },false);
}
function goNext(qIdx){
  if(qIdx === endPoint) {
    goResult();
    return;
  }
  var q = document.querySelector('.qBox');
  q.style.marginLeft = 'auto';
  q.style.marginRight = 'auto';
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
  }
  // var status = document.querySelector('.statusBar');
  // status.style.width=(100/endPoint) * (qIdx+1) + '%';
}

// document.getElementById("pageMove").onclick = function () {
//   let point = setResult();
//   location.href = "../detail.html/#portfolioModal" + String(point);
//   console.log(location.href);
// };


function begin(){
  window.scrollTo(0, 0);
  main.style.WebkitAnimation = "fadeOut 0.5s";
  main.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 0.5s";
    qna.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 0)
    let qIdx = 0;
    goNext(qIdx);
  }, 300);
}