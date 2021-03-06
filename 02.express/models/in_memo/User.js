let USER_ID = 10000
let users = []

class User {
    constructor(params) {
        if(!params.name || !params.age) 
            throw new Error('name and age required when created user')
        this.name = params.name
        this.age = params.age
        this._id = USER_ID ++
    }
}

async function index(userId) {
    return users
}

async function show(userId) {
    return users.find(u => u._id === Number(userId))
}

async function create(params) {
    const user = new User(params)
    users.push(user)
    return user
}

async function update(userId, update) {
    const user = user.find(u => u._id === Number(userId))
    user.name = update.name || user.name
    user.age = update.age || user.age
    return user
}

async function destory(userId) {
    const ids = users.map(u => u._id)
    const index = ids.indexOf(userId)
    users.splice(0, index)
    return 'user deleted'
}

module.exports = {
    module: User,
    index,
    show,
    create,
    update,
    destory,
}