//これはindex_tintiro_3times.js
function afterLoad() {

  $('#btn').click(function(){
    //1投目または役なしだったならサイコロを振る
    //if(h == 1 || n1 == "役なし"){

    //相手側の役が出るまで最大3度サイコロを振る
    for (var h = 1; h <= 3 ; h++){

      //サイコロを3つ転がす
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

        //画像と出目と役の決定
        switch (h) {

          //1投目の画像表示と出目表示
          case 1 :
            switch (i) {
              case 1 :
                $('#dice1_1').attr('src', src);//サイコロの出た目の画像を表示させる
                $('#text1_1').html(seed+1);//サイコロの出た目を表示させる
                var a = seed + 1 ;
                break;
              case 2 :
                $('#dice2_1').attr('src', src);
                $('#text2_1').html(seed+1);
                var b = seed + 1 ;
                break;
              case 3 :
                $('#dice3_1').attr('src', src);
                $('#text3_1').html(seed+1);
                var c = seed + 1;
                break;
            }
            $('#score_against_1').html(n1);//相手側1投目の役を記述
            break;

          //2投目の画像表示と出目表示
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
            $('#score_against_2').html(n1);//相手側2投目の役を記述
            break;

          //3投目の画像表示と出目表示
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
            $('#score_against_3').html(n1);//相手側3投目の役を記述
            break;
        }//画像と出目と役の決定の終了部

      }

    }//相手側の役が出るまで最大3度サイコロを振る終了部

    //}//役なしまたは1投目だったか確認する終了部

//    else{
//      h = h+3;//役が出た場合hに3を加えサイコロを振る行為を終了させる    
//    }

    //役なしなら再度サイコロを振る
    if(n2 = "役なし"){
    //私側の役が出るまで最大3度サイコロを振る
    for (j = 1; j <= 4 ; j++){
        //サイコロを3つ転がす
        for (var k = 1; k <= 3; k++){
          var seed = null;
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
          switch (k) {
            case 1 :
              $('#dice4').attr('src', src);
              $('#text4').html(seed+1);//サイコロの出た目を表示させる
              var x = seed + 1 ;
              break;
            case 2 :
              $('#dice5').attr('src', src);
              $('#text5').html(seed+1);
              var y = seed + 1 ;
              break;
            case 3 :
              $('#dice6').attr('src', src);
              $('#text6').html(seed+1);
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
      $('#score_mine').html(n2);
        }
    }//私側の役が出るまで最大3度サイコロを振る終了部
    }//役なしだったか確認する終了部
  });
}
//ロード完了したらafterLoadを実行
$().ready(afterLoad);
