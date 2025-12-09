graphql이란?
클라이언트가 필요한 데이터만 요청할 수 있도록 하는 쿼리 언어. 클라이언트 중심 데이터 요청 방식.
보통 하나의 엔드포인트를 가짐

기존 REST API는 클라이언트가 필요로 하지 않는 데이터로 함께 전송. 네트워크 낭비
클라이언트마다 다른 엔드포인트. 개발 유지 보수 어렵

장점
http 요청 횟수를 줄일수 있음
http 응답 사이즈를 줄일수 있음

단점
고정된 요청과 응답만 필요할 때에는 query로 인해 요청의 크기가 Restful보다 커질 수 있음
캐싱이 복잡
파일 업로드 방법이 정해져 있지 않음


쿼리(Query)
서버에서 데이터를 가져올때. REST의 GET에 대응
query {
    user {
        id
        name
        email
    }
}

뮤테이션(Mutation)
데이터를 생성, 수정, 삭제시 사용. REST POST/PUT/PATCH/DELETE에 대응
mutation {
    createUser(input: { name: "Alice", email: "alice@test.com" }) {
        name
        email
    }
}

