import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'None User',
        email: 'none@example.com',
        password: bcrypt.hashSync('123456', 10),

    },
    {
        name: 'Ann User',
        email: 'ann@example.com',
        password: bcrypt.hashSync('123456', 10),

    }
]
export default users