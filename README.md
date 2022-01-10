## personal-blog

* next.js로 제작한 개인 블로그입니다. 지속적으로 기능을 추가하고 최적화해나갈 예정입니다.
* notion에서 제공하는 api를 활용하여 개인 워크스페이스에서 작성하는 글이 실시간으로 반영되도록 만들었습니다.

### 직접적으로 사용된 라이브러리들

* `Nextjs`
* `Typescript`
* `styled-components` -> `@emotion`
  * (2022.01.11 @emotion 으로 변경하게 되었다.)
* `@notionhq/client`
  * 최신버전은 너무 type이 난해하고 이상해서... 포기했고 결국 0.2.x 버전으로 정착하게되었다. 추후에 type이 개선되고 기능들이 추가된다면... 최신버전으로 옮겨볼 생각이다.

### 많이 참고한 라이브러리

* react-notion-x : 바로바로 결과물을 내기엔 아주 훌륭한 라이브러리지만 해당 라이브러리를 직접 사용하기엔 개발자의 선호하는 스타일 방식이 많이 적용되어있고, 개인적으로 notion에서 사용안하는 기능들까지도 구현되어있어서,  해당 라이브러리의 코드를 참고해서 emotion 과 next에서 제공하는 컴포넌트로 커스텀했음.

### Deploy 방식

* `vercel`

### future features
- [x] next/image 최적화 (2022.01.11 update)
- [x] dark mode & light mode switching (2022.01.11 update)
- [ ] archive 내 검색기능
- [ ] 방문자들이 많이 읽은 포스트 인기순위

