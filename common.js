// やりたいこと
// 上から少しスクロールすると、ページトップに戻るボタンが右下に表示される
// 上までスクロールすると、ページトップに戻るボタンはまた非表示になる
// ページトップに戻るボタンをクリックすると、上にスクロールしながらページトップに戻る

window.addEventListener('scroll', () => {
  let scrollTop = document.scrollingElement.scrollTop;
  const scrollButton = document.getElementById('scroll-button');
  if (scrollTop > 140) {
    scrollButton.classList.add('visible');
    } else {
    scrollButton.classList.remove('visible');
  }
}, false);

// 【２】 ページトップボタンをクリックしたら、スクロールしながらページトップに戻る
var scroll = new SmoothScroll('a[href*="#"]');



