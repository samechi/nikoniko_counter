// HTMLの要素を取得
const counterNameElement = document.getElementById('counter-name'); // カウンター名
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

const nameInput = document.getElementById('name-input'); // 名前入力欄
const saveNameBtn = document.getElementById('save-name-btn'); // 名前保存ボタン

let count = 0;

// カウントアップ機能
incrementBtn.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
});

// カウントダウン機能
decrementBtn.addEventListener('click', () => {
    if((count-1) < 0){
        count = 0;
    } else{count--;}
    counterElement.textContent = count;
});

// リセット機能
resetBtn.addEventListener('click', () => {
    count = 0;
    counterElement.textContent = count;
});

// 名前を保存する機能
saveNameBtn.addEventListener('click', () => {
    // 入力欄に値があれば、カウンター名を更新
    const newName = nameInput.value;
    if (newName) {
        counterNameElement.textContent = newName;
    }
});