// やりたいこと
// 上から少しスクロールすると、ページトップに戻るボタンが右下に表示される
// 上までスクロールすると、ページトップに戻るボタンはまた非表示になる
// ページトップに戻るボタンをクリックすると、上にスクロールしながらページトップに戻る

// 【１】 １番上から＋１００pxスクロールしたら、ページトップに戻るボタンを表示する
// 今何ピクセルの場所にいるかを取得する
window.addEventListener('scroll', () => {
  let scrollTop = document.scrollingElement.scrollTop;
  const scrollButton = document.getElementById('scroll-button');
  // もしも３００px以上スクロールした状態だったら、右下のページトップに戻るボタンを表示する
  if (scrollTop > 260) {
    scrollButton.classList.add('invisible');
    } else {
    // そうでなければ表示しない
    scrollButton.classList.remove('invisible');
  }
  console.log(scrollTop);
  console.log(scrollButton);
}, false);

// 【２】 ページトップボタンをクリックしたら、スクロールしながらページトップに戻る



