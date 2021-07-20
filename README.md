📌 Wanted 프리온보딩 사전과제

😀 작성자 : 채준형

🔍 구현한 목록(간략히)

  1. Wanted GNB(Global Navigation Bar) 구현

  2. 탐색에 Hover시, 더 많은 탐색보드 등장

  3. 특정기준(width: 768px)을 바탕으로 Responsive Web 구현
  
💻 사용한 기술스택

React(Javascript), Scss



1. Wanted GNB 구현하기
<img width="1112" alt="스크린샷 2021-07-20 오후 4 29 11" src="https://user-images.githubusercontent.com/78126381/126280128-d60e87a5-eaad-46ff-a578-1c71f62ecf29.png">

Nav바가 Scroll을 내릴 시, 윗 상단에 고정되는 원래 사이트의 특성을 그대로 구현하고자 Main페이지를 간략히 만들고 Nav Component 만들었습니다.

2. 탐색에 마우스 Hover시, 더 많은 탐색보드 등장
<img width="1158" alt="스크린샷 2021-07-20 오후 4 34 37" src="https://user-images.githubusercontent.com/78126381/126280680-e5e668e4-cebc-467d-8dbb-728a36d56a53.png">
State를 활용해 onMouseEnter 혹은 onMouseLeaver함수로 상태값을 True or False 바꾸며 조건부렌더링을 하였습니다.

해당 탐색보드는 useEffect을 활용해 json파일(local의 목데이터)을 사용하였고 최대한 반복을 줄이기 위해 map을 활용해 컴포넌트로 잘게 나누었습니다.
![스크린샷 2021-07-20 오후 4 37 42](https://user-images.githubusercontent.com/78126381/126281083-c67fb242-1d74-45ef-993b-f7704ca64c55.png)

 3. 특정기준(width: 768px)을 바탕으로 Responsive Web 구현
 
 화면의 가로 크기가 768px이하가 될때 hover로 인해 등장한 탐색보드가 사라지고 새로운 Nav(NavHiddend이라고 부르겠습니다)가 등장할 수 있도록 구현해보았습니다(media query)
 
 ![스크린샷 2021-07-20 오후 4 41 06](https://user-images.githubusercontent.com/78126381/126281521-5847c1a9-ba10-41f5-8d10-dd9e87566393.png)

<img width="743" alt="스크린샷 2021-07-20 오후 4 39 54" src="https://user-images.githubusercontent.com/78126381/126281378-ae8c1a22-8732-4a99-a130-40ce950449f2.png">

