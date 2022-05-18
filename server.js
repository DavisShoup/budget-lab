const express = require('express');
const app = express();
const port = 3000;
const budget = require('./models/budget');

//Listen
app.listen(port, () => {
    console.log("Listening!");
});

//middleware
app.use(express.urlencoded({ extended: false }))

//New
app.get("/budgets/new", (req,res) => {
    res.render("new.ejs")
})

//Index
app.get('/budgets', (req,res) => {
    res.render('index.ejs', { budget })
});

//Show
app.get('/budgets/:indexOfBudget', (req,res) => {
    res.render('show.ejs', {
        budgets: budget[req.params.indexOfBudget],
    });
});

//Create
app.post("/budgets", (req, res) => {
    budget.push(req.body);
    res.redirect("/budgets")
})


