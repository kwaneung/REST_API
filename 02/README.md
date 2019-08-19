- pakage.json에서 dependencies는 서비스가 돌아갈 때 필요한 모듈이고 devDependencies는 개발환경에서 필요한 모듈
- mocha : test라이브러리
- npm test -> mocha index.spec.js

- should는 검증 라이브러리다. 가독성 높은 테스트 코드를 만들 수 있다.

- supertest : 익스프레스 통합 테스트용 라이브러리

(설치 라이브러리 : express, mogan, mocha --save-dev, should --save-dev, supertest --save-dev)

- 데이터 전달방법
  1. url에 ?limit=2 파라미터 -> req.query.limit로 받음
  2. url에 /:id 파라미터 -> req.params.id로 받음
  3. body 파라미터(post, put) -> req.body.name
  
(설치 라이브러리 : npm i body-parser --save)

- curl 명령어 옵션 :  -x (GET, POST, DELETE, PUT)
