import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const characters = [
  {
    id: 1 ,
    name: "personagens 1"
  },
  {
    id: 2 ,
    name: "personagens 2"
  },
  {
    id: 3 ,
    name: "personagens 3"
  },
]


app.get('/', (req, res) => {
  res.json({

    characters

  
  })
})

app.get 
export default app;