const express = require('express');
const path = require('path');
const Axios = require('axios')
const fs = require('fs')
const seo = require('./seo')
// const bodyparser = require('body-parser')

// const morgan = require('morgan')

const app = express();
const port = 3030;

// app.use(morgan('dev'))
// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({ extended: true }))

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', '/build')));

app.get("*", (req, res) => {
  let pathname = req.pathname || req.originalUrl;
  let page = seo.find((item) => item.path === pathname);
  if (page) {
    let html = fs.readFileSync(path.join(__dirname, "..", "/build", "index.html"));
    let htmlWithSeo = html
      .toString()
      .replace("King's Eye Escape", page.title)
      .replace("Join us and be taken on a thrilling adventure.", page.description);
    return res.send(htmlWithSeo);
  }
  res.sendFile(path.join(__dirname, '..', '/build', 'index.html'))
})

app.post('/schedule', (req, res) => {
  Axios.post(`https://api.resova.us/v1/availability/calendar`, req.body)
    .then(result => res.status(200).send(result.data))
    .catch(err => res.status(200).send(err))
})


// app.post('/createBasket', (req, res) => {
//   Axios.post(`https://api.resova.us/v1/baskets`, {}, config)
//     .then(result => {
//       return result.data
//     })
//     .then(info => {
//       return Axios.post(`https://api.resova.us/v1/baskets/${info.id}/bookings`, req.body, config)
//     })
//     .then(result2 => res.status(200).send(result2.data))
//     .catch(err => res.status(400).send(err))
// })

// app.post('/createBasket', (req, res) => {
//   Axios.post(`https://api.resova.us/v1/baskets`, {}, config)
//     .then(result => res.status(200).send(result.data))
//     .catch(err => res.status(400).send(err))
// })

// app.post('/bookInstance/:id', (req, res) => {
//     Axios.post(`https://api.resova.us/v1/baskets/${req.params.id}/bookings`, req.body, config)
//       .then(result => res.status(200).send(result.data))
//       .catch(err => res.status(400).send(err))
// })

// app.post('/test', (req, res) => {
//   console.log(req.body)
//   Axios.post("https://api.resova.us/v1/customers", req.body, config)
//     .then(result => res.status(200).send(result.data))
//     .catch(err => res.status(400).send(err))
// })

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});