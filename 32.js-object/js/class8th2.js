// let green8th = [
//     ["정현진","남자",50,false,["파인애플","멜론"]],
//     ["김경민","여자",30,false,["망고","거봉","감","홍시","파인애플"]],
//     ["왕민재","남자",24,false,["귤","블루베리","아보카도","딸기","참외"]],
//     ["이채원","여자",25,false,["복숭아","샤인머스캣","사과","포도","멜론","수박"]],
//     ["한기은","여자",28,false,["사과","복숭아","오렌지","배"]],
//     ["김한결","여자",25,false,["멜론","사과","감","바나나","딸기","참외"]],
//     ["정민영","여자",25,false,["파인애플","사과","바나나","귤"]],
//     ["한지현","여자",30,false,["망고","딸기","멜론","블루베리","복숭아","키위"]],
//     ["송지현","여자",32,false,["멜론","망고","블루베리","천혜향"]],
//     ["이수지","여자",26,false,["사과","자몽","오렌지","귤","레몬","용과","블루베리","레드향"]]
// ]

let green8th = [
    {
        name : "정현진",
        gender : "남자",
        age : 50,
        married : true,
        fruits : ["파인애플","멜론"] 
    },
    {
        name : "김경민",
        gender : "여자",
        age :"30",
        married : false,
        fruits : ["망고","거봉","감","홍시","파인애플"]
    },
    {
        name : "왕민재",
        gender : "남자",
        age : 24,
        married : false,
        fruits : ["귤","블루베리","아보카도","딸기","참외"]

    },
    {
        name : "이채원",
        gender : "여자",
        age : 25,
        married : false,
        fruits : ["귤","블루베리","아보카도","딸기","참외"]

    },
    {
        name : "한기은",
        gender : "여자",
        age : 28,
        married : false,
        fruits : ["사과","복숭아","오렌지","배"]

    },
    {
        name :"김한결",
        gender : "여자",
        age : 25,
        married : false,
        fruits : ["멜론","사과","감","바나나","딸기","참외"]

    },
    {
        name : "정민영",
        gender : "여자",
        age : 25,
        married : false,
        fruits : ["파인애플","사과","바나나","귤"]

    },
    {
        name : "한지현",
        gender : "여자",
        age : 30,
        married : false,
        fruits : ["망고","딸기","멜론","블루베리","복숭아","키위"]

    },
    {
        name : "송지현",
        gender : "여자",
        age : 32,
        married : false,
        fruits : ["멜론","망고","블루베리","천혜향"]

    },
    {
        name : "이수지",
        gender : "여자",
        age : 26,
        married : false,
        fruits : ["사과","자몽","오렌지","귤","레몬","용과","블루베리","레드향"]

    }
]
// 각각의 객체가 green8th의 원소이므로 원소들 사이는 콤마를 사용

console.log(green8th[1].age)
green8th[2].age



document.write(`<ul>`)
for(let i = 0; i<green8th.length; i++){
    let dd = ""
    for(let j = 0; j<green8th[i].fruits.length; j++){
        dd += `<dd>${green8th[i].fruits[j]}</dd>`
    }
    document.write(`
    <li>
        <h3>${green8th[i].name}</h3>
        <p>성별 : ${green8th[i].gender}</p>
        <p>나이 : ${green8th[i].age}살 </p>
        <p>결혼 : ${green8th[i].married?"기혼":"미혼"}</p>
        <dl>
            <dt>좋아하는 과일</dt>
            ${dd}
        </dl>
    </li>
`)
}
document.write(`</ul>`)
    