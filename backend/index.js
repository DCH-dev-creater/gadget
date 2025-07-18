const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/users', (req, res) => {
  res.send([
  {
    "balance": "$3,946.45",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "name": "Bird Ramsey",
    "gender": "male",
    "company": "NIMON",
    "email": "birdramsey@nimon.com"
  },
  {
    "balance": "$2,499.49",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "name": "Lillian Burgess",
    "gender": "female",
    "company": "LUXURIA",
    "email": "lillianburgess@luxuria.com"
  },
  {
    "balance": "$2,820.18",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "name": "Kristie Cole",
    "gender": "female",
    "company": "QUADEEBO",
    "email": "kristiecole@quadeebo.com"
  },
  {
    "balance": "$3,277.32",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "name": "Leonor Cross",
    "gender": "female",
    "company": "GRONK",
    "email": "leonorcross@gronk.com"
  },
  {
    "balance": "$1,972.47",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "name": "Marsh Mccall",
    "gender": "male",
    "company": "ULTRIMAX",
    "email": "marshmccall@ultrimax.com"
  }
])
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  if (email !== 'citrusadmin@moonshine.com' || password !== '12345') {
    return res.status(403).json({ error: 'Email and password not valid' });
  }

  console.log(`Received login request with email: ${email} and password: ${password}`);
  res.json({ success: true, message: 'Login successful', user: { email } });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})