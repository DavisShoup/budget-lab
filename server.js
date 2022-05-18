const express = require('express');
const app = express();
const port = 3000;
const budget = require('./models/budget');

//listen
app.listen(3000, () => {
    console.log("Listening!");
});


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


