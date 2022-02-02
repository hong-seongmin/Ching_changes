

let folder_source_gwae = "./img/gwae/"//#소스코드 폴더
var list_source_gwae = [//Vanila JS에서 폴더정보 가져오기 위해선 ActiveXObject필요, fso = new ActiveXObject("scripting.FileSystemObject");var srt = fso.GetFolder("c:\\");var fc = new Enumerator(srt.files);, https://tudul2box.tistory.com/320
  '08괘_간_100.png', '08괘_감_010.png', '08괘_건_111.png', '08괘_곤_000.png', '08괘_리_101.png', '08괘_손_110.png', '08괘_진_001.png', '08괘_태_011.png',
  '64괘_가인-손-리_110101.png', '64괘_간-간-간_100100.png', '64괘_감-감-감_010010.png', '64괘_건-감-간_010100.png',
  '64괘_건-건-건_111111.png', '64괘_겸-곤-간_000100.png', '64괘_고-간-손_100110.png', '64괘_곤-곤-곤_000000.png',
  '64괘_곤-태-감_011010.png', '64괘_관-손-곤_110000.png', '64괘_구-건-손_111110.png', '64괘_귀매-진-태_001011.png',
  '64괘_규-리-태_101011.png', '64괘_기제-감-리_010101.png', '64괘_대과-태-손_011110.png','64괘_대유-리-건_101111.png',
  '64괘_대장-진-건_001111.png', '64괘_대축-간-건_100111.png', '64괘_동인-건-리_111101.png', '64괘_둔-건-간_111100.png',
  '64괘_리-리-리_101101.png', '64괘_명이-곤-리_000101.png', '64괘_몽-간-감_100010.png', '64괘_무망-건-진_111001.png',
  '64괘_미제-리-감_101010.png', '64괘_박-간-곤_100000.png', '64괘_복-곤-진_000001.png', '64괘_부-건-곤_111000.png',
  '64괘_비-간-리_100101.png', '64괘_비-감-곤_010000.png', '64괘_사-곤-감_000010.png', '64괘_서합-리-진_101001.png',
  '64괘_소과-진-간_001100.png', '64괘_소축-손-건_110111.png', '64괘_손-간-태_100011.png', '64괘_손-손-손_110110.png',
  '64괘_송-건-감_111010.png', '64괘_수-감-건_010111.png', '64괘_수-태-진_011001.png', '64괘_승-곤-손_000110.png',
  '64괘_여-리-간_101100.png', '64괘_예-진-곤_001000.png', '64괘_이-간-진_100001.png', '64괘_이-건-태_111011.png',
  '64괘_익-손-진_110001.png', '64괘_임-곤-태_000011.png', '64괘_절-감-태_010011.png', '64괘_점-손-간_110100.png',
  '64괘_정-감-손_010110.png', '64괘_정-리-손_101110.png', '64괘_준-감-진_010001.png', '64괘_중부-손-태_110011.png',
  '64괘_진-리-곤_101000.png', '64괘_진-진-진_001001.png', '64괘_췌-태-곤_011000.png', '64괘_쾌-태-건_011111.png',
  '64괘_태-곤-건_000111.png', '64괘_태-태-태_011011.png', '64괘_풍-진-리_001101.png', '64괘_함-태-간_011100.png',
  '64괘_항-진-손_001110.png', '64괘_해-진-감_001010.png', '64괘_혁-태-리_011101.png', '64괘_환-손-감_110010.png',
  '태극_대문이미지_999999.png'
];
var list_source_gwae_64 = list_source_gwae.filter(source64 => source64.includes('64'));//64괘 필터링 리스트
var list_source_gwae_08 = list_source_gwae.filter(source08 => source08.includes('08'));//8괘 필터링 리스트
let folder_source_meaning = "./img/meaning/"//의미 이미지 폴더
var list_source_meaning = [
  '간-艮_산-山.jpg', '감-坎_물-水.jpg', '건-乾_하늘-天.jpg', '곤-坤_땅-地.png',
  '손-巽_바람-風.jpg', '이-離_불-火.jpg', '진-震_번개-雷.jpg', '태-兌_늪-澤.jpg'
]
var dic_num_gwae = { "111":"乾", "011":"兌", "101":"離", "001":"震", "110":"巽", "010":"坎", "100":"艮", "000":"坤" }//번호와 괘 매치시킨 딕셔너리
var dic_gwae_sound = { "乾":"건", "兌":"태", "離":"이", "震":"진", "巽":"손", "坎":"감", "艮":"간", "坤":"곤" }//괘와 음 매치시킨 딕셔너리
var dic_sound_meaning = { "건":"天", "태":"澤", "이":"火", "진":"雷", "손":"風", "감":"水", "간":"山", "곤":"地" }//음 의미 매치시킨 딕셔너리
var dic_meaing_meaning = { "天":"하늘", "澤":"연못", "火":"불", "雷":"천둥", "風":"바람", "水":"물", "山":"산", "地":"땅" }

function change_img_main_top(){//상괘 변경 함수
  var gwae_top_change = event.target.alt.split(".png")[0].split("_")[2]//지금 클릭 이미지의 설명 중 상괘 부분
  var gwae_bottom_change = document.getElementById("id_img_main").alt.split(".png")[0].split("_")[2].slice(3, 6)//지금 메인 이미지의 설명 중 하괘부분

  if (gwae_bottom_change === "999"){//시작버튼 안누름
    alert("미시작")
    return
  }
  var gwae_main_change = list_source_gwae_64.filter(change_gwae => change_gwae.includes(gwae_top_change + gwae_bottom_change))[0]
  document.getElementById("id_img_main").src = folder_source_gwae + gwae_main_change//상괘를 변경하여 main img 변경
  document.getElementById("id_img_main").alt = gwae_main_change
  

  var meaning_change = list_source_meaning.filter( change_meaning => change_meaning.includes(dic_num_gwae[gwae_top_change]) )[0]//meaning 이미지 filter
  document.getElementById("id_img_mean_top").src = folder_source_meaning + meaning_change//상괘 의미 이미지 변경
  document.getElementById("id_img_mean_top").alt = meaning_change

  gwae_now = dic_num_gwae[gwae_top_change]
  sound_now = dic_gwae_sound[gwae_now]
  meaning_now = dic_sound_meaning[sound_now]
  meansound_now = dic_meaing_meaning[meaning_now]
  document.getElementById("id_mean_top_gwae").textContent = `${gwae_now}[${sound_now}] : ${meaning_now}(${meansound_now})`
  return
}

function change_img_main_bottom(){//하괘 변경 함수
  var gwae_top_change = document.getElementById("id_img_main").alt.split(".png")[0].split("_")[2].slice(0, 3) 
  var gwae_bottom_change = event.target.alt.split(".png")[0].split("_")[2].slice(0, 3)
  if (gwae_top_change === "999"){
    alert("미시작")
    return
  }
  var gwae_main_change = list_source_gwae_64.filter(change_gwae => change_gwae.includes(gwae_top_change + gwae_bottom_change))[0]
  document.getElementById("id_img_main").src = folder_source_gwae + gwae_main_change//상괘를 변경하여 main img 변경
  document.getElementById("id_img_main").alt = gwae_main_change

  var meaning_change = list_source_meaning.filter( change_meaning => change_meaning.includes(dic_num_gwae[gwae_bottom_change]) )[0]
  document.getElementById("id_img_mean_bottom").src = folder_source_meaning + meaning_change//하괘 의미 이미지 변경
  document.getElementById("id_img_mean_bottom").alt = meaning_change

  gwae_now = dic_num_gwae[gwae_bottom_change]
  sound_now = dic_gwae_sound[gwae_now]
  meaning_now = dic_sound_meaning[sound_now]
  meansound_now = dic_meaing_meaning[meaning_now]
  document.getElementById("id_mean_bottom_gwae").textContent = `${gwae_now}[${sound_now}] : ${meaning_now}(${meansound_now})`
  return
}





window.onload = function start(){//문서가 준비된 상황 이후에 자바스크립트 실행, https://wiserloner.tistory.com/380
    document.getElementById("id_img_main").src = folder_source_gwae + "태극_대문이미지_999999.png";

    for (num_gwae_top = 0; list_source_gwae_08.length > num_gwae_top; num_gwae_top++){//이미지 추가 - 상괘
      var img_gwae_top = new Image(height=70);
      img_gwae_top.src = folder_source_gwae + list_source_gwae_08[num_gwae_top]
      img_gwae_top.alt = `상괘${num_gwae_top}_${list_source_gwae_08[num_gwae_top].slice(4, )}`//slice : 배열을 인덱스로 추출(끝 지정 안하면 끝까지)
      img_gwae_top.hspace = 10//이미지 좌우여백, https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=kyaru&logNo=130111455284
      img_gwae_top.onclick = change_img_main_top//메인 이미지 변경
      img_gwae_top.style="cursor:pointer;"//이미지에 커서 갖다대면 커서변경
      var src_gwae_top = document.getElementById("id_gwae_top")
      src_gwae_top.appendChild(img_gwae_top)

    }

    for (num_gwae_bottom = 0; list_source_gwae_08.length > num_gwae_bottom; num_gwae_bottom++){//이미지 추가 - 하괘
      var img_gwae_bottom = new Image(height=70);
      img_gwae_bottom.src = folder_source_gwae + list_source_gwae_08[num_gwae_bottom]
      img_gwae_bottom.alt = `하괘${num_gwae_bottom}_${list_source_gwae_08[num_gwae_bottom].slice(4, -1)}`
      img_gwae_bottom.hspace = 10
      img_gwae_bottom.onclick = change_img_main_bottom
      img_gwae_bottom.style="cursor:pointer;"
      var src_gwae_bottom = document.getElementById("id_gwae_bottom")
      src_gwae_bottom.appendChild(img_gwae_bottom)

    }
      
}



function change_img_main(){
    document.getElementById("id_img_main").src = folder_source_gwae + "64괘_건-건-건_111111.png";
    document.getElementById("id_img_main").alt = "64괘_건-건-건_111111.png"
    // console.log(document.getElementById("id_img_main").alt.split("설"))
    return
}


