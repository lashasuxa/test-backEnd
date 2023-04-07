const express = require("express");
const app = express();
const port = 3000;

const teamMembers = [
  { name: "lasha", position: "engineer" },
  { name: "oto", position: "devops" },
  { name: "giorgi", position: "swift developer" },
];

app.get("/", (req, res) => {
  res.send(`base page ${port}`);
});

app.get("/team", (req, res) => {
  let teamMemberHtml = "";

  for (let i = 0; i < teamMembers.length; i++) {
    teamMemberHtml =
      teamMemberHtml +
      `<li>
          Name:${teamMembers[i].name} position:${teamMembers[i].position} 
           </li>`;
  }
  const page = `
            <html>
            <head>
            </head>
            <body>
            <h1>
            hello again 
            </h1>
            <p> I am using port : ${port} </p>
            <ul>${teamMemberHtml}
            </ul>

            </body>
            </html>
     `;
  res.send(`${page}`);
});

app.get("/contact", (req, res) => {
  console.log(req.query);
  const page = `
    <html>
    <head>
        <style>
            form *{
                display:block;
                margin-bottom:15px;
            }
        </style>
    </head>
    <body>
    <h1>my name is : ${req.query.Name}</h1>
    <h2>my email is : ${req.query.Mail}</h2>
    <h3>my age is : ${req.query.Age}</h3>
    <h4>my message is : ${req.query.message}</h4>
        <form method="GET" action="/contact">
            <input type="text" name="Name" placeholder="type some text">
            <input type="email" name="Mail" placeholder="type some mail">
            <input type="number" name="Age" placeholder="type your age">
            <textarea name="message" placeholder="type some text here"></textarea>
            <input type="submit" name="submit" >

        </form>
    </body>
    </html>
    `;
  res.send(page);
});
app.get("/about", (req, res) => {
  res.send(`about page ${port}`);
});

app.get("/homepage", (req, res) => {
  res.send(`home page  ${port}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
