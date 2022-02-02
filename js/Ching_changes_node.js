var http = require('http');
let folder_source = "C:/Users/User/Desktop/코딩소스/Ching_changes/";//#소스코드 폴더
// let folder_source = require('./Ching_changes')


var fs = require('fs');//nodejs 이해 필요,https://opentutorials.org/course/3332/21046





var app = http.createServer(function(request, response){
    var url = request.url;
    if(request.url == '/'){
      url = '/Ching_changes.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log("test")
    fs.readdir(folder_source, function(err, list_source){
        global.list_source = list_source//전역변수 사용, https://stackoverflow.com/questions/10987444/how-to-use-global-variable-in-node-js. Delclaration, initialized, Using
    })
    // console.log(global.list_source)
    

    var list_source_G = global.list_source ? global.list_source.filter(source08 => source08.includes('png')) : []//리스트가 있으면 png이미지 list_source, undefined 상태라면 [], https://stackoverflow.com/questions/30179850/one-line-if-else-in-javascript/30179873
    var list_source_08 = list_source_G.filter(source08 => source08.includes('08'))
    global.list_source_08 = list_source_08
    console.log("start222")
    


    // if (list_source_08.length > 0){
    //   console.log("start")
    //   for (i_gwae_top = 0; list_source_08.length > i_gwae_top; i_gwae_top++){
    //     var img_gwae_top = new Image(700, 500);
    //     img_gwae_top.src = folder_source + list_source_08[i]
    //     var src_gwae_top = document.getElementById("id_gwae_top")
    //     src_gwae_top.appendChild(img_gwae_top)

    //   }
    // }
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(3000);


