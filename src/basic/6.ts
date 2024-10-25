interface User {
    name: string
    age: number
    email: string
    adress?: {
        city: string
        country: string
    }
}

const mango : User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    adress: {
        city: 'New York',
        country: 'USA'
    }
};

const poly :User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};