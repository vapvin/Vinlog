import express from 'express';
const app = express();

const PORT = 4000;

const mainRoute = (req, res) => {
    res.send("Good Node Main");
};
const aboutRoute = (req, res) => {
    res.send("Good Node About Us");
};

const contactRoute = (req, res) => {
    res.send("Good Node Contact Me!!ㅠㅠ");
};
const protectedRoute = (req, res) => {
    res.send("Good Node U don't see here!!!!");
};

const middleConsole = (req, res, next) => {
    console.log("I'm a middleware");
    next();
};
const middleProtect = (req, res, next) => {
    res.redirect("/");
};

app.use(middleConsole);
app.get("/", mainRoute);
app.get("/about-us", aboutRoute);
app.get("/about-us", aboutRoute);
app.get("/contact", contactRoute);
app.get("/protected", middleProtect, protectedRoute);

app.listen(PORT,() => console.log("Listen"));