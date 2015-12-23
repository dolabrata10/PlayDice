//これはindex_tintiro.js
function afterLoad() {

  $('#btn').click(function(){
    for (var i=1; i<=6; i++){
      var seed = Math.floor(Math.random()*6);
      var src = null;
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
      switch (i) {
        case 1 :
          $('#dice1').attr('src', src);
          var a1 = seed + 1;
          break;
        case 2 :
          $('#dice2').attr('src', src);
          var b1 = seed + 1;
          break;
        case 3 :
          $('#dice3').attr('src', src);
          var c1 = seed + 1;
          break;
        case 4 :
          $('#dice4').attr('src', src);
          var a2 = seed + 1;
          break;
        case 5 :
          $('#dice5').attr('src', src);
          var b2 = seed + 1;
          break;
        case 6 :
          $('#dice6').attr('src', src);
          var c2 = seed + 1;
          break;
      }
    }
      var is111 = ((a1 == 1) && (b1 == 1) && (c1 == 1));
      var is_zorome = ((a1 != 1) && (b1 != 1) && (c1 != 1) && (a1 == b1) && (b1 == c1));
      var is456 = ((a1 == 4) && (b1 == 5) && (c1 == 6))||((a1 == 4) && (b1 == 6) && (c1 == 5))||((a1 == 5) && (b1 == 4) && (c1 == 6))||((a1 == 5) && (b1 == 6) && (c1 == 4))||((a1 == 6) && (b1 == 4) && (c1 == 5))||((a1 == 6) && (b1 == 5) && (c1 == 4));
      var is123 = ((a1 == 1) && (b1 == 2) && (c1 == 3))||((a1 == 1) && (b1 == 3) && (c1 == 2))||((a1 == 2) && (b1 == 1) && (c1 == 3))||((a1 == 2) && (b1 == 3) && (c1 == 1))||((a1 == 3) && (b1 == 1) && (c1 == 2))||((a1 == 3) && (b1 == 2) && (c1 == 1));
      var is_num_a = ((b1 == c1) && (c1 != a1));
      var is_num_b = ((c1 == a1) && (a1 != b1));
      var is_num_c = ((a1 == b1) && (b1 != c1));
      var x1 = [a1,b1,c1]; //画像と数値が合致するかの確認用
      var x2 = [a2,b2,c2]; //画像と数値が合致するかの確認用
      var yaku1 = (is111) || (is_zorome) || (is456) || (is123) || (is_num_a) || (is_num_b) || (is_num_c); 
      var n2 = a2 + b2 + c2; //a1~c2までの値が計算されているかの確認用
      switch (yaku1) {
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
          var n1 = a;
          break;
        case is_num_b :
          var n1 = b;
          break;
        case is_num_c :
          var n1 = c;
          break;
        default :
          var n1 = "役なし";
          break;
      }
    $('#dice_against').html(x1);//画像と数値が合致するかの確認用
    $('#dice_you').html(x2);//画像と数値が合致するかの確認用
    $('#score_against').html(n1);
    $('#score_you').html(n2);
  });
}
//ロード完了したらafterLoadを実行
$().ready(afterLoad);
