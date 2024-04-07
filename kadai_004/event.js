// HTMLドキュメントを読み込み完了したとき「loadイベントが発生しました」
$(window).on('load', () => {
  console.log('loadイベントが発生しました');
}),
// スクロールしたとき「scrollイベントが発生しました」
$(document).on('scroll', () => {
  console.log('scrollイベントが発生しました');
});