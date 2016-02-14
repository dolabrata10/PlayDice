﻿//これはindex_tintiro_3times.js


//賭けコインを変更すると持ちコイン数を変動させる仕組み。
function keisan(){
  var goukei = 20;
  var maisuu = document.form1.my_bet.selectedIndex * 1 + 1;//賭ける枚数の選択
  document.form1.total.value = goukei - maisuu; //持ちコイン数
}
//仕組みここまで。

function afterLoad() {

//ボタンを押すと結果が表示される
  $('#btn').click(function(){

  //画像、出目、結果の初期化
  $('#dice1_1').attr('src', "space.png");
  $('#dice2_1').attr('src', "space.png");
  $('#dice3_1').attr('src', "space.png");
  $('#dice1_2').attr('src', "space.png");
  $('#dice2_2').attr('src', "space.png");
  $('#dice3_2').attr('src', "space.png");
  $('#dice1_3').attr('src', "space.png");
  $('#dice2_3').attr('src', "space.png");
  $('#dice3_3').attr('src', "space.png");
  $('#text1_1').html(" ");
  $('#text2_1').html(" ");
  $('#text3_1').html(" ");
  $('#text1_2').html(" ");
  $('#text2_2').html(" ");
  $('#text3_2').html(" ");
  $('#text1_3').html(" ");
  $('#text2_3').html(" ");
  $('#text3_3').html(" ");
  $('#score_against_1').html(" ");
  $('#score_against_2').html(" ");
  $('#score_against_3').html(" ");
  
    //相手が3度サイコロを振る
    for (var h = 1; h <= 3 ; h++){
    //相手が1度目か役なしであったかの確認
    if ( h == 1 || n1 == "役なし"){
    //役なしであったならサイコロを振る
      //サイコロを3つ表示
      for (var i = 1; i <= 3; i++){
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


        //画像と出目と役の決定
        switch (h) {

          //1度目のサイコロ振り
          case 1 :
            switch (i) {
              case 1 ://サイコロ1つ目
                $('#dice1_1').attr('src', src);//サイコロの出た目の画像を表示させる
                $('#text1_1').html(seed+1);//サイコロの出た目を表示させる
                var a = seed + 1 ;
                break;
              case 2 ://サイコロ2つ目
                $('#dice2_1').attr('src', src);
                $('#text2_1').html(seed+1);
                var b = seed + 1 ;
                break;
              case 3 ://サイコロ3つ目
                $('#dice3_1').attr('src', src);
                $('#text3_1').html(seed+1);
                var c = seed + 1;
                break;
            }
            //相手側の役の条件
            var is111 = a == 1 && b == 1 && c == 1;
            var is_zorome = a != 1 && b != 1 && c != 1 && a == b && b == c;
            var is456 = (a == 4 && b == 5 && c == 6)||(a == 4 && b == 6 && c == 5)||(a == 5 && b == 4 && c == 6)||(a == 5 && b == 6 && c == 4)||(a == 6 && b == 4 && c == 5)||(a == 6 && b == 5 && c == 4);
            var is123 = (a == 1 && b == 2 && c == 3)||(a == 1 && b == 3 && c == 2)||(a == 2 && b == 1 && c == 3)||(a == 2 && b == 3 && c == 1)||(a == 3 && b == 1 && c == 2)||(a == 3 && b == 2 && c == 1);
            var is_num_a = b == c && c != a;
            var is_num_b = c == a && a != b;
            var is_num_c = a == b && b != c;
            var yaku_against= is111 || is_zorome || is456 || is123 || is_num_a || is_num_b || is_num_c;
            //役を表示
            if (yaku_against = is111){
              var n1 = "ピンゾロ";
            }
            else if (yaku_against = is_zorome){
              var n1 = "ゾロ目";
            }
            else if (yaku_against = is456){
              var n1 = "シゴロ";
            }
            else if (yaku_against = is123){
              var n1 = "ヒフミ";
            }
            else if (yaku_against = is_num_a){
              var n1 = "の "+a;
            }
            else if (yaku_against = is_num_b){
              var n1 = "の "+b;
            }
            else if (yaku_against = is_num_c){
              var n1 = "の "+c;
            }
            else{
              var n1 = "役なし";
            }
            //相手側1投目の役を記述
            $('#score_against_1').html(n1);
            break;

          //2度目のサイコロ振り
          case 2 :
            switch (i) {
              case 1 :
                $('#dice1_2').attr('src', src);//サイコロの出た目の画像を表示させる
                $('#text1_2').html(seed+1);//サイコロの出た目を表示させる
                var a = seed + 1 ;
                break;
              case 2 :
                $('#dice2_2').attr('src', src);
                $('#text2_2').html(seed+1);
                var b = seed + 1 ;
                break;
              case 3 :
                $('#dice3_2').attr('src', src);
                $('#text3_2').html(seed+1);
                var c = seed + 1;
                break;
            }
            //相手側の役の条件
            var is111 = a == 1 && b == 1 && c == 1;
            var is_zorome = a != 1 && b != 1 && c != 1 && a == b && b == c;
            var is456 = (a == 4 && b == 5 && c == 6)||(a == 4 && b == 6 && c == 5)||(a == 5 && b == 4 && c == 6)||(a == 5 && b == 6 && c == 4)||(a == 6 && b == 4 && c == 5)||(a == 6 && b == 5 && c == 4);
            var is123 = (a == 1 && b == 2 && c == 3)||(a == 1 && b == 3 && c == 2)||(a == 2 && b == 1 && c == 3)||(a == 2 && b == 3 && c == 1)||(a == 3 && b == 1 && c == 2)||(a == 3 && b == 2 && c == 1);
            var is_num_a = b == c && c != a;
            var is_num_b = c == a && a != b;
            var is_num_c = a == b && b != c;
            var yaku_against= is111 || is_zorome || is456 || is123 || is_num_a || is_num_b || is_num_c;
            //役を表示
            if (yaku_against = is111){
              var n1 = "ピンゾロ";
            }
            else if (yaku_against = is_zorome){
              var n1 = "ゾロ目";
            }
            else if (yaku_against = is456){
              var n1 = "シゴロ";
            }
            else if (yaku_against = is123){
              var n1 = "ヒフミ";
            }
            else if (yaku_against = is_num_a){
              var n1 = "の "+a;
            }
            else if (yaku_against = is_num_b){
              var n1 = "の "+b;
            }
            else if (yaku_against = is_num_c){
              var n1 = "の "+c;
            }
            else{
              var n1 = "役なし";
            }
            //相手側2投目の役を記述
            $('#score_against_2').html(n1);
            break;

          //3度目のサイコロ振り
          case 3 :
            switch (i) {
              case 1 :
                $('#dice1_3').attr('src', src);//サイコロの出た目の画像を表示させる
                $('#text1_3').html(seed+1);//サイコロの出た目を表示させる
                var a = seed + 1 ;
                break;
              case 2 :
                $('#dice2_3').attr('src', src);
                $('#text2_3').html(seed+1);
                var b = seed + 1 ;
                break;
              case 3 :
                $('#dice3_3').attr('src', src);
                $('#text3_3').html(seed+1);
                var c = seed + 1;
                break;
            }
            //相手側の役の条件
            var is111 = a == 1 && b == 1 && c == 1;
            var is_zorome = a != 1 && b != 1 && c != 1 && a == b && b == c;
            var is456 = (a == 4 && b == 5 && c == 6)||(a == 4 && b == 6 && c == 5)||(a == 5 && b == 4 && c == 6)||(a == 5 && b == 6 && c == 4)||(a == 6 && b == 4 && c == 5)||(a == 6 && b == 5 && c == 4);
            var is123 = (a == 1 && b == 2 && c == 3)||(a == 1 && b == 3 && c == 2)||(a == 2 && b == 1 && c == 3)||(a == 2 && b == 3 && c == 1)||(a == 3 && b == 1 && c == 2)||(a == 3 && b == 2 && c == 1);
            var is_num_a = b == c && c != a;
            var is_num_b = c == a && a != b;
            var is_num_c = a == b && b != c;
            var yaku_against= is111 || is_zorome || is456 || is123 || is_num_a || is_num_b || is_num_c;
            //役を表示
            if (yaku_against = is111){
              var n1 = "ピンゾロ";
            }
            else if (yaku_against = is_zorome){
              var n1 = "ゾロ目";
            }
            else if (yaku_against = is456){
              var n1 = "シゴロ";
            }
            else if (yaku_against = is123){
              var n1 = "ヒフミ";
            }
            else if (yaku_against = is_num_a){
              var n1 = "の "+a;
            }
            else if (yaku_against = is_num_b){
              var n1 = "の "+b;
            }
            else if (yaku_against = is_num_c){
              var n1 = "の "+c;
            }
            else{
              var n1 = "役なし";
            }
            //相手側3投目の役を記述
            $('#score_against_3').html(n1);//相手側3投目の役を記述
            break;
        }//画像と出目と役の決定の終了部
      }//相手側サイコロを3つ表示
    }//相手が1度目か役なしであったかの確認終了部
     //役が出たならばサイコロを振るのをやめる
    }//相手が最大3度サイコロを振る終了部
  
  //画像、出目、結果の初期化
  $('#dice4_1').attr('src', "space.png");
  $('#dice5_1').attr('src', "space.png");
  $('#dice6_1').attr('src', "space.png");
  $('#dice4_2').attr('src', "space.png");
  $('#dice5_2').attr('src', "space.png");
  $('#dice6_2').attr('src', "space.png");
  $('#dice4_3').attr('src', "space.png");
  $('#dice5_3').attr('src', "space.png");
  $('#dice6_3').attr('src', "space.png");
  $('#text4_1').html(" ");
  $('#text5_1').html(" ");
  $('#text6_1').html(" ");
  $('#text4_2').html(" ");
  $('#text5_2').html(" ");
  $('#text6_2').html(" ");
  $('#text4_3').html(" ");
  $('#text5_3').html(" ");
  $('#text6_3').html(" ");
  $('#score_mine_1').html(" ");
  $('#score_mine_2').html(" ");
  $('#score_mine_3').html(" ");
    //私が3度サイコロを振る
    for (var j = 1; j <= 3 ; j++){
    //私が1度目か役なしであったかの確認
    if ( j == 1 || n2 == "役なし"){
    //役なしであったならサイコロを振る
      //サイコロを3つ表示
      for (var k = 1; k <= 3; k++){
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
        //画像と出目と役の決定
        switch (j) {
          //1度目のサイコロ振り
          case 1 :
            switch (k) {
              case 1 ://サイコロ1つ目
                $('#dice4_1').attr('src', src);//サイコロの出た目の画像を表示させる
                $('#text4_1').html(seed+1);//サイコロの出た目を表示させる
                var x = seed + 1 ;
                break;
              case 2 ://サイコロ2つ目
                $('#dice5_1').attr('src', src);
                $('#text5_1').html(seed+1);
                var y = seed + 1 ;
                break;
              case 3 ://サイコロ3つ目
                $('#dice6_1').attr('src', src);
                $('#text6_1').html(seed+1);
                var z = seed + 1;
                break;
            }
            //私側の役の条件
            var my_is111 = (x == 1 && y == 1 && z == 1);
            var my_is_zorome = (x != 1 && y != 1 && z != 1 && x == y && y == z);
            var my_is456 = (x == 4 && y == 5 && z == 6)||(x == 4 && y == 6 && z == 5)||(x == 5 && y == 4 && z == 6)||(x == 5 && y == 6 && z == 4)||(x == 6 && y == 4 && z == 5)||(x == y && y == 5 && z == 4);
            var my_is123 = (x == 1 && y == 2 && z == 3)||(x == 1 && y == 3 && z == 2)||(x == 2 && y == 1 && z == 3)||(x == 2 && y == 3 && z == 1)||(x == 3 && y == 1 && z == 2)||(x == 3 && y == 2 && z == 1);
            var my_is_num_x = (y == z && z != x);
            var my_is_num_y = (z == x && x != y);
            var my_is_num_z = (x == y && y != z);
            var yaku_mine = my_is111 || my_is_zorome || my_is456 || my_is123 || my_is_num_x || my_is_num_y || my_is_num_z;
            //役を表示
            if (yaku_mine = my_is111){
              var n2 = "ピンゾロ";
            }
            else if (yaku_mine = my_is_zorome){
              var n2 = "ゾロ目";
            }
            else if (yaku_mine = my_is456){
              var n2 = "シゴロ";
            }
            else if (yaku_mine = my_is123){
              var n2 = "ヒフミ";
            }
            else if (yaku_mine = my_is_num_x){
              var n2 = "の "+x;
            }
            else if (yaku_mine = my_is_num_y){
              var n2 = "の "+y;
            }
            else if (yaku_mine = my_is_num_z){
              var n2 = "の "+z;
            }
            else{
              var n2 = "役なし";
            }
            $('#score_mine_1').html(n2);//私側の1投目の役の表示
            break;

          //2度目のサイコロ振り
          case 2 :
            switch (k) {
              case 1 ://サイコロ1つ目
                $('#dice4_2').attr('src', src);//サイコロの出た目の画像を表示させる
                $('#text4_2').html(seed+1);//サイコロの出た目を表示させる
                var x = seed + 1 ;
                break;
              case 2 ://サイコロ2つ目
                $('#dice5_2').attr('src', src);
                $('#text5_2').html(seed+1);
                var y = seed + 1 ;
                break;
              case 3 ://サイコロ3つ目
                $('#dice6_2').attr('src', src);
                $('#text6_2').html(seed+1);
                var z = seed + 1;
                break;
            }
            //私側の役の条件
            var my_is111 = (x == 1 && y == 1 && z == 1);
            var my_is_zorome = (x != 1 && y != 1 && z != 1 && x == y && y == z);
            var my_is456 = (x == 4 && y == 5 && z == 6)||(x == 4 && y == 6 && z == 5)||(x == 5 && y == 4 && z == 6)||(x == 5 && y == 6 && z == 4)||(x == 6 && y == 4 && z == 5)||(x == y && y == 5 && z == 4);
            var my_is123 = (x == 1 && y == 2 && z == 3)||(x == 1 && y == 3 && z == 2)||(x == 2 && y == 1 && z == 3)||(x == 2 && y == 3 && z == 1)||(x == 3 && y == 1 && z == 2)||(x == 3 && y == 2 && z == 1);
            var my_is_num_x = (y == z && z != x);
            var my_is_num_y = (z == x && x != y);
            var my_is_num_z = (x == y && y != z);
            var yaku_mine = my_is111 || my_is_zorome || my_is456 || my_is123 || my_is_num_x || my_is_num_y || my_is_num_z;
            //役を表示
            if (yaku_mine = my_is111){
              var n2 = "ピンゾロ";
            }
            else if (yaku_mine = my_is_zorome){
              var n2 = "ゾロ目";
            }
            else if (yaku_mine = my_is456){
              var n2 = "シゴロ";
            }
            else if (yaku_mine = my_is123){
              var n2 = "ヒフミ";
            }
            else if (yaku_mine = my_is_num_x){
              var n2 = "の "+x;
            }
            else if (yaku_mine = my_is_num_y){
              var n2 = "の "+y;
            }
            else if (yaku_mine = my_is_num_z){
              var n2 = "の "+z;
            }
            else{
              var n2 = "役なし";
            }
            $('#score_mine_2').html(n2);//私側の2投目の役の表示
            break;
          //3度目のサイコロ振り
          case 3 :
            switch (k) {
              case 1 ://サイコロ1つ目
                $('#dice4_3').attr('src', src);//サイコロの出た目の画像を表示させる
                $('#text4_3').html(seed+1);//サイコロの出た目を表示させる
                var x = seed + 1 ;
                break;
              case 2 ://サイコロ2つ目
                $('#dice5_3').attr('src', src);
                $('#text5_3').html(seed+1);
                var y = seed + 1 ;
                break;
              case 3 ://サイコロ3つ目
                $('#dice6_3').attr('src', src);
                $('#text6_3').html(seed+1);
                var z = seed + 1;
                break;
            }
            //私側の役の条件
            var my_is111 = (x == 1 && y == 1 && z == 1);
            var my_is_zorome = (x != 1 && y != 1 && z != 1 && x == y && y == z);
            var my_is456 = (x == 4 && y == 5 && z == 6)||(x == 4 && y == 6 && z == 5)||(x == 5 && y == 4 && z == 6)||(x == 5 && y == 6 && z == 4)||(x == 6 && y == 4 && z == 5)||(x == y && y == 5 && z == 4);
            var my_is123 = (x == 1 && y == 2 && z == 3)||(x == 1 && y == 3 && z == 2)||(x == 2 && y == 1 && z == 3)||(x == 2 && y == 3 && z == 1)||(x == 3 && y == 1 && z == 2)||(x == 3 && y == 2 && z == 1);
            var my_is_num_x = (y == z && z != x);
            var my_is_num_y = (z == x && x != y);
            var my_is_num_z = (x == y && y != z);
            var yaku_mine = my_is111 || my_is_zorome || my_is456 || my_is123 || my_is_num_x || my_is_num_y || my_is_num_z;
            //役を表示
            if (yaku_mine = my_is111){
              var n2 = "ピンゾロ";
            }
            else if (yaku_mine = my_is_zorome){
              var n2 = "ゾロ目";
            }
            else if (yaku_mine = my_is456){
              var n2 = "シゴロ";
            }
            else if (yaku_mine = my_is123){
              var n2 = "ヒフミ";
            }
            else if (yaku_mine = my_is_num_x){
              var n2 = "の "+x;
            }
            else if (yaku_mine = my_is_num_y){
              var n2 = "の "+y;
            }
            else if (yaku_mine = my_is_num_z){
              var n2 = "の "+z;
            }
            else{
              var n2 = "役なし";
            }
            $('#score_mine_3').html(n2);//私側の3投目の役の表示
            break;
        }//画像と出目と役の決定の終了部

      }//私側サイコロを3つ表示
    }//私が1度目か役なしであったかの確認終了部
     //役が出たならばサイコロを振るのをやめる
    }//相手が最大3度サイコロを振る終了部

  //役の倍率についてはカイジの地下チンチロを準拠とする
  //相手の役に対する倍率
  switch (n1){
    case "ピンゾロ":
      bairitu_against = 5;
      break;
    case "ゾロ目":
      bairitu_against = 3;
      break;
    case "シゴロ":
      bairitu_against = 2;
      break;
    case "ヒフミ":
      bairitu_against = -2;
      break;
    case "の "+a:
      bairitu_against = 1;
      var deme_against = a;
      break;
    case "の "+b:
      bairitu_against = 1;
      var deme_against = b;
      break;
    case "の "+c:
      bairitu_against = 1;
      var deme_against = c;
      break;
    case "役なし":
      bairitu_against = 0;
      break;
  }
  //私の役に対する倍率
  switch (n2){
    case "ピンゾロ":
      bairitu_mine = 5;
      break;
    case "ゾロ目":
      bairitu_mine = 3;
      break;
    case "シゴロ":
      bairitu_mine = 2;
      break;
    case "ヒフミ":
      bairitu_mine = -2;
      break;
    case "の "+x:
      bairitu_mine = 1;
      var deme_mine = x;
      break;
    case "の "+y:
      bairitu_mine = 1;
      var deme_mine = y;
      break;
    case "の "+z:
      bairitu_mine = 1;
      var deme_mine = z;
      break;
    case "役なし":
      bairitu_mine = 0;
      break;
  }
  //1倍負け
  if (deme_against > deme_mine || (bairitu_against == 1 && bairitu_mine == 0)){
    $('#result').html("1倍負け");
    goukei = goukei - maisuu * bairitu_against;
  }
  //2倍負け
  else if (bairitu_against == 2 && (bairitu_mine == 1 || bairitu_mine == 0)){
    $('#result').html("2倍負け");
    goukei = goukei - maisuu * bairitu_against;
  }
  //ヒフミの2倍負け
  else if (bairitu_mine == -2 && (bairitu_against != -2 || bairitu_against != 3 || bairitu_against != 5)){
    $('#result').html("2倍負け");
    goukei = goukei + maisuu * bairitu_mine;
  }
  //3倍負け
  else if (bairitu_against == 3 && (bairitu_mine != 5 || bairitu_mine != 3)){
    $('#result').html("3倍負け");
    goukei = goukei - maisuu * bairitu_against;
  }
  //5倍負け
  else if (bairitu_against == 5 && bairitu_mine != 5){
    $('#result').html("5倍負け");
    goukei = goukei - maisuu * bairitu_against;
  }
  //1倍勝ち
  else if (deme_mine > deme_against || (bairitu_mine == 1 && bairitu_against == 0)){
    $('#result').html("1倍勝ち");
    goukei = goukei + maisuu * (bairitu_mine + 1);
  }
  //2倍勝ち
  else if (bairitu_mine == 2 && (bairitu_against == 1 || bairitu_against == 0)){
    $('#result').html("2倍勝ち");
    goukei = goukei + maisuu * (bairitu_mine + 1);
  }
  //相手ヒフミによる2倍勝ち
  else if (bairitu_against == -2 && (bairitu_mine != -2 || bairitu_mine != 3 || bairitu_mine != 5)){
    $('#result').html("2倍勝ち");
    goukei = goukei - maisuu * (bairitu_against - 1);
  }
  //3倍勝ち
  else if (bairitu_mine == 3 && (bairitu_against != 5 || bairitu_against != 3)){
    $('#result').html("3倍勝ち");
    goukei = goukei + maisuu * (bairitu_mine + 1);
  }
  //5倍勝ち
  else if(bairitu_mine == 5 && bairitu_against != 5){
    $('#result').html("5倍勝ち");
    goukei = goukei + maisuu * (bairitu_mine + 1);
  }
  //引き分け
  else{
    $('#result').html("引き分け");
    goukei = goukei + maisuu;
  }
  });
}
//ロード完了したらafterLoadを実行
$().ready(afterLoad);
