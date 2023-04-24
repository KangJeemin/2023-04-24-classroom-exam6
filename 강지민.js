
let basicData = {
  header : {
    id: "header",
    type: "div",
    children: null,
  },
  main : {
    id: "main",
    type: "div",
    children: null,
  },
  footer : {
    id: "footer",
    type: "div",
    children: null,
 }
}

let elementData= ["게시판","수업과제","사용자","성적","로그아웃"];

function exampleOne(object,array){
    if(object.header.children==null){
    let random = Math.floor(Math.random()*array.length)
        object.header.children=array[random]
        array.splice(random,1)
        
    }
    if(object.main.children==null){
    let random = Math.floor(Math.random()*array.length)
        object.main.children=array[random]
        array.splice(random,1)
    }
    if(object.footer.children==null){
    let random = Math.floor(Math.random()*array.length)
        object.footer.children=array[random]
        array.splice(random,1)

    }
    //* basic 객체의 children속성이 null 데이터 타입이 할당되어있는지를 판뱔하고
    //* null 데이터타입이 할당되어 있으면 매개변수를 각각 할당한다.
    let value=`
    <${object.header.type} id="${object.header.id}">${object.header.children}</${object.header.type}>
    <${object.main.type} id="${object.main.id}">${object.main.children}</${object.main.type}>
    <${object.footer.type} id="${object.footer.id}">${object.footer.children}</${object.footer.type}>`
    //* header, main footer HTML 태그를 생성하는 로직으로 
    //* 최종적으로 문자열로 제작된 HTML 태그 데이터를 가공/편집 하시오.
    return value;
}

console.log(exampleOne(basicData, elementData));