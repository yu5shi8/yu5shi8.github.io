// やりたいこと
// 上から少しスクロールすると、ページトップに戻るボタンが右下に表示される
// 上までスクロールすると、ページトップに戻るボタンはまた非表示になる
// ページトップに戻るボタンをクリックすると、上にスクロールしながらページトップに戻る

window.addEventListener('scroll', () => {
  let scrollTop = document.scrollingElement.scrollTop;
  const scrollButton = document.getElementById('scroll-button');
  if (scrollTop > 140) {
    scrollButton.classList.add('invisible');
    } else {
    scrollButton.classList.remove('invisible');
  }
}, false);

// 【２】 ページトップボタンをクリックしたら、スクロールしながらページトップに戻る
document.getElementById('scroll-button').onclick = function(){
// スクロールしながら1秒でページトップへ戻る
  
};


