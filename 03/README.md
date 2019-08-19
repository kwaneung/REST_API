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
  (https://bakyeono.net/post/2016-05-02-rest-api-client-for-cli.html#%EC%9A%94%EC%B2%AD-%EB%B3%B4%EB%82%B4%EA%B8%B0)
  
- ORM(Object Relational Mapping)

  데이터베이스를 객체로 추상화해 놓은것

  쿼리를 직접 작성하는 대신 ORM의 메소드로 데이터 관리 가능

  노드에서 SQL ORM은 시퀄라이저(Sequelize)가 있다

  DBtest.js파일에 예제있으니 이용후 추가 바람
