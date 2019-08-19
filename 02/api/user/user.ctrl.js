let users = [  // 객체 생성
    {id: 1, name: 'Kwaneung'},
    {id: 2, name: 'hyunyoung'},
    {id: 3, name: 'Chirs'}
]

const index = (req, res) => {
    // limit 갯수만큼만 user들을 출력할 수 있도록해보자
    // ?뒤로 오면 쿼리로 받음
    req.query.limit = req.query.limit || 10  // limit이 없으면 default로 10을 넣어줌
    const limit = parseInt(req.query.limit, 10)  // 10진수 문자열로 변환
    // limit이 숫자형이 아니면 400을 응답
    // offset이 숫자형이 아니면 400을 응답
    // console.log(limit)
    if (Number.isNaN(limit)){
        res.status(400).end()
    }else{
        res.json(users.slice(0, limit))  // 0번부터 limit 갯수만큼 출력
    }
}

const show = (req, res) => {  // :id 는 id변수인식
    // id 값을 얻어낸다
    // url path안에 데이터를 넘겨줄때 params이용
    const id = parseInt(req.params.id, 10)
    if (Number.isNaN(id)) {
        return res.status(400).end()  // return을 해줘야 아래 로직이 실행 안된다.
    }

    // users 배열 조회
    const user = users.filter(user => user.id === id)[0]
    if (!user) {
        return  res.status(404).end()
    }

    // 응답: res객체 이용
    res.json(user)


    //id가 숫자가 아닐 경우 400응답
    //id가 없는 유저의 경우 404응답
}

const destroy = (req, res) => {
    const id = parseInt(req.params.id, 10)
    if (Number.isNaN(id)) {
        return res.status(400).end()
    }
    users = users.filter(user => user.id !== id)
    res.status(204).end()
}

const create = (req, res) => {
    // client에서 보낸 데이터 id는 서버관리
    const name = req.body.name
    if (!name) {
        return res.status(400).end()
    }
    
    const found = users.filter(user => user.name === name).length
    if (found) {
        return res.status(409).end()
    }

    const id = Date.now()  // 원래는 DB 에서 AutoInc

    const user = {id, name}
    users.push(user)
    res.status(201).json(user)

}

module.exports = {
    index,
    show,
    destroy,
    create
}