//node js문법으로 require로 express기능을 가져온다
//Es6버전에서는 import를 통해서 가져오고 node js는 require방식으로 가져온다
const express=require('express');



//express의 메소드를 실행하는 것을 변수 app에 넣음
const app=express();

//request와 response는 무조건 필수고 고정된 것임
app.get('/',(request,response)=>{
    
    response.send('Hello World');
    
})

//7777이라는 포트로 접속한다는 의미
app.listen(7777);



//그리고 서버를 동작하게 하려면 node server.js를 cmd창에 치면 된다
//그리고 localhost:7777에 가면 Cannot GET이라고 나온다(아무 입력도 하지 않았기때문에..당연한 것임)

//만약 실시간으로 보고 싶으면 cmd에 supervisor serer.js를 쳐서 실시간으로 볼수 있는 것으로 서버를 킨다
//기본적으로 supervisor가 깔리나 혹시 없으면 깔아야 이용할수 있다


//이것을 깃허브에 올리려고 하는데 커밋해야할 내용이 너무 많다.
//그래서 깃에 커밋하지 않을 파일을 분리하는 파일이 있다
//.gitignore를 이용해서 커밋하지 않을 파일을 분리한다

//.gitignore라는 파일을 현재 폴더에 만들고 내가 올리고 싶지 않은 파일들을 써준다
//그냥 무시하고 싶은 파일명을 쓰고 저장을 누르면 깃허브 커밋창에서 사라진다

//폴더명은 /node_modules로 쓰면 해당 폴더를 제외시킨다
기본적으로









