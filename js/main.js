'use strict'

const textQuestion = document.getElementById('textQuestion');
const textA = document.getElementById('textA');
const textB = document.getElementById('textB');
const textAnswer = document.getElementById('textAnswer');
const next = document.getElementById('next');


const textQuestionArr = [
  'Q.ネザーランドドワーフの体重は？',
  'Q.イングリッシュアンゴラの体重は？', // 2つ目の問題文
  'Q.ジャージーウーリーの一般的な性格は？'
];
const textAArr = [
  '1. 0.8kg～1.3kg',
  '1. 3.8kg～4.1kg', // 2つ目の選択肢1
  '1. 活発な子が多い。'
];
const textBArr = [
  '2. 1.3kg～1.6kg',
  '2. 2.7kg～2.9kg', // 2つ目の選択肢2
  '2. おとなしい子が多い。'
];
const textAAnswerArr = [ // 1を選んだ時の解答
  '正解○',
  '不正解×',
  '不正解×',
];
const textBAnswerArr = [ // 2を選んだ時の解答
  '不正解×',
  '正解○',
  '正解○',
];


let i = 0; //何問目かのカウントをする変数

next.addEventListener('click', function() {
  if (this.textContent === '次へ') {
    i++;
    textAnswer.textContent = '(解答)'; // 解答の初期化
    this.textContent = '';
    textQuestion.textContent = textQuestionArr[i];
    textA.textContent = textAArr[i];
    textB.textContent = textBArr[i]; // 問題文の内容を変える
  }
});


textA.addEventListener('click', function() {
  if (textAnswer.textContent === '不正解×' || textAnswer.textContent === '正解○') {
  return; //←答えの変更をできないようにする
  }
  textAnswer.textContent = textAAnswerArr[i];
  if (i === textQuestionArr.length - 1) {return;}
  next.textContent = '次へ'; // 次へボタンの表示
});

textB.addEventListener('click', function() {
  if (textAnswer.textContent === '不正解×' || textAnswer.textContent === '正解○') {
    return;
  }
  textAnswer.textContent = textBAnswerArr[i];
  if (i === textQuestionArr.length - 1) {return;} // 最終問題では次へを表示しない
  next.textContent = '次へ';
});