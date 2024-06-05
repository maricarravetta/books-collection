const express = require("express") 
const router = express.Router() 
const cors = require("cors") 
const conectaDatabase = require("./database") 
conectaDatabase() 

const Books = require("./booksModel")

const app = express() 
app.use(express.json())
app.use(cors())

const port = 3333

//get
app.use(router.get("/books", showBooks))
async function showBooks(request, response) {
    try {
        const booksDatabase = await Books.find()
        response.json(booksDatabase)
    } catch(erro) {
        console.log(erro)
    }
    response.json()
}

//post
app.use(router.post("/books", createBook))
async function createBook(request, response) {
    const newBook = new Books({
        name: request.body.name,
        author: request.body.author,
        category: request.body.category,
        quote: request.body.quote
    })

    try {
        const createdBook = await newBook.save()
        response.status(201).json(createdBook)
    } catch(erro) {
        console.log(erro)
    }
}

//patch
app.use(router.patch("/books/:id", correctBook))
async function correctBook(request, response) {
    try {
        const foundBook = await Books.findById(request.params.id)

        if (request.body.name) {
            foundBook.name = request.body.name
        }

        if (request.body.author) {
            foundBook.author = request.body.author
        }

        if (request.body.category) {
            foundBook.category = request.body.category
        }

        if (request.body.quote) {
            foundBook.quote = request.body.quote
        }

        const updatedDataBook = await foundBook.save()
        response.json(updatedDataBook)
    } catch(erro) {
        console.log(erro)
    }
}

//delete
app.use(router.delete("/books/:id", deleteBook))
async function deleteBook(request, response) {
    try {
        await Books.findByIdAndDelete(request.params.id)
        response.json({mensagem: "The book was deleted from the library successfully!"})
    } catch(erro) {
        console.log(erro)
    }
}

//port
app.listen(port, showPort)
function showPort() {
    console.log("Server created and running on port", port)
}
