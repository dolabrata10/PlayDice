//これはindex_tintiro.js
function afterLoad() {

  $('#btn').click(function(){
    //サイコロを6回転がす
    for (var i=1; i<=6; i++){
      var seed = Math.floor(Math.random()*6);
      var src = null;
      //出た値と画像の関係付け
      switch (seed) {
        case 0 :
          src = 'one.png';
          break;
        case 1 :
          src = 'two.png';
          break;
        case 2 :
          src = 'three.png';
          break;
        case 3 :
          src = 'four.png';
          break;
        case 4 :
          src = 'five.png';
          break;
        case 5 :
          src = 'six.png';
          break;
      }
      //画像と数値の決定
      switch (i) {
        case 1 :
          $('#dice1').attr('src', src);
          $('#text1').html(seed+1);
          var a = seed + 1 ;
          break;
        case 2 :
          $('#dice2').attr('src', src);
          $('#text2').html(seed+1);
          var b = seed + 1 ;
          break;
        case 3 :
          $('#dice3').attr('src', src);
          $('#text3').html(seed+1);
          var c = seed + 1;
          break;
        case 4 :
          $('#dice4').attr('src', src);
          $('#text4').html(seed+1);
          var x = seed + 1 ;
          break;
        case 5 :
          $('#dice5').attr('src', src);
          $('#text5').html(seed+1);
          var y = seed + 1 ;
          break;
        case 6 :
          $('#dice6').attr('src', src);
          $('#text6').html(seed+1);
          var z = seed + 1 ;
          break;
      }
    }
      //役の条件
      //
      var is111 = a == 1 && b == 1 && c == 1;
      var is_zorome = a != 1 && b != 1 && c != 1 && a == b && b == c;
      var is456 = (a == 4 && b == 5 && c == 6)||(a == 4 && b == 6 && c == 5)||(a == 5 && b == 4 && c == 6)||(a == 5 && b == 6 && c == 4)||(a == 6 && b == 4 && c == 5)||(a == 6 && b == 5 && c == 4);
      var is123 = (a == 1 && b == 2 && c == 3)||(a == 1 && b == 3 && c == 2)||(a == 2 && b == 1 && c == 3)||(a == 2 && b == 3 && c == 1)||(a == 3 && b == 1 && c == 2)||(a == 3 && b == 2 && c == 1);
      var is_num_a = b == c && c != a;
      var is_num_b = c == a && a != b;
      var is_num_c = a == b && b != c;
      var yaku_against= is111 || is_zorome || is456 || is123 || is_num_a || is_num_b || is_num_c;
      //役を表示
      //役なしの場合がピンゾロと認定されているようだ。
      switch (yaku_against) {
        case is111 :
          var n1 = "ピンゾロ!!";
          break;
        case is_zorome :
          var n1 = "ゾロ目!!";
          break;
        case is456 :
          var n1 = "シゴロ!!";
          break;
        case is123 :
          var n1 = "ヒフミ!!";
          break;
        case is_num_a :
          var n1 = "の "+a;
          break;
        case is_num_b :
          var n1 = "の "+b;
          break;
        case is_num_c :
          var n1 = "の "+c;
          break;
        default :
          var n1 = "で役なし";
          break;
      }
    $('#score_against').html(n1);
    $('#score_mine').html(n2);
  });
}
//ロード完了したらafterLoadを実行
$().ready(afterLoad);
