# 사용후기

- Controller, Service, DTO 개념과 Decorator(@Get, @Post, @Controller ...) 사용방식이 **Spring** 과  유사했다. 그러나 Module 개념은 왜 존재하는지 이해하지 못했다. 그저 이런 파일이 존재한다는 것을 알려주기 위함일까 싶다

- CLI를 통해 Controller, Module, Service를 쉽게 만들 수 있다. 

```bash
nest g resource [name]
```

​	위와 같이 명령한 후 REST API를 선택하면 Controller, Module, Service, DTO, Entity를 다 만들어주는게 좋았고, 설정 또한 모두 처리해준다.

- REST API 뿐만 아니라 WebSocket, GraphQL까지 지원을 해주던데 하나씩 다 사용해보고 싶었다.

  ( WebScoket는 Controller 대신 Gateway + Service 로 사용하는데 굉장히 유용할듯 싶다. )

- Mongoose와 함께 활용 (https://cloud.mongodb.com)

```
// .env
MONGO_USERNAME=[유저이름]
MONGO_PASSWORD=[비밀번호]
MONGO_DB_NAME=[DB이름]
```

​	위와 같은 설정 필요

