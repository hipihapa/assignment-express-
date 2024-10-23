import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const sampleBooks = [
  {id: '1', title: '1984', author: 'George Orwell', language: 'English' },
  {id: '2', title: 'Brave New World', author: 'Aldous Huxley', language: 'English' },
  {id: '3',  title: 'Fahrenheit 451', author: 'Ray Bradbury', language: 'English'}
];


app.get("/api/users/", (req, res) => {
    res.send(sampleBooks); 
});


app.get("/api/users/:id", (req, res) => {
    console.log(req.params);
    const parsedId = parseInt(req.params.id);
    console.log(parsedId);
    if (isNaN(parsedId)) return res.status(400).send({msg: "Bad Request"});
    const findUser = sampleBooks.find((currentBook) => currentBook.id === parsedId);
    if(!findUser) return res.status(404);
    return res.send(findUser);
});

app.listen(PORT, () => {
    console.log(`Running on Port: ${PORT}`);
}) 