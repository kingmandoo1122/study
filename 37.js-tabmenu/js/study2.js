window.onload = function(){

    let tab_desc = [
        `<h3>김호중 뻉소니</h3>
        <p>트로트 가수 김호중이 뺑소니 혐의로 경찰의 조사를 받고 있다. 서울 강남경찰서는 김호중을 도로교통법상 사고 후 미조치 혐의로 입건하고 상세한 조사를 진행 중이다. 김호중은 지난 9일 강남구 압구정동에서 택시와 충돌한 후 현장을 떠난 혐의를 받고 있다.

        사건 발생 후 3시간 뒤, 김호중의 매니저가 자신이 운전했다고 경찰에 자수했으나 이는 허위로 밝혀졌다. 김호중은 사고 다음날 경찰에 출석하여 운전 사실을 인정했다.
        </p>`,
        `<h3>강형욱 보듬tv 갑질</h3>
        <p>[파이낸셜뉴스] 반려견 훈련사 강형욱이 직장 내 갑질 논란에 휩싸인 가운데 추가적인 제보가 나오고 있다.

        21일 JTBC '사건반장'에서는 "전 직원이 '강형욱이 CCTV에 집착했다. 6명이 일하는 상황에서 CCTV는 9대였고, 직원 감시용이었다'라고 말했다"라며 "이에 직원들이 항의를 했지만 강형욱은 '법대로 해봐'라고 말했다"고 보도했다.
        </p>`,
        `<h3>공무원도 경력직 시대</h3>
        <p>정부가 기업 등 민간에서 일하며 전문 역량을 쌓은 경력자들의 공직 입문을 돕기 위해 채용 정보를 제공하는 자리를 마련한다.

        인사혁신처는 오는 28일부터 30일까지 사흘 간 '2024년도 국가공무원 5급 및 7급 민간경력자 일괄채용시험'(이하 민경채) 부처 합동 온라인 채용설명회를 개최한다고 21일 밝혔다.
        </p>`
    ]

    function mjtab(tab_class_name){ 
        let tab = document.querySelectorAll(`${tab_class_name}`)
        let tab_description = document.querySelector(".tab_description")
        for(let i=0;i<tab.length;i++){
            tab[i].addEventListener("click",function(){
                for (let j=0; j<tab.length;j++){
                    tab[j].classList.remove("on")
                }
                tab[i].classList.add("on")
                tab_description.innerHTML = tab_desc[i]
            })
            }
    }
   
    mjtab(".tab_title>li")
    


}