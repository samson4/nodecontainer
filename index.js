const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const gql  =require("graphql-request");
const  client = require("./client");
const  generateJWT = require("./jwt");
const router = express.Router()
const PORT = 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


const token = (email)=>{
    return jwt.sign({email},"JWTSUPERSECRET",{
        expiresIn:'30d'
    })
}
// app.post("/auth/register", async (req, res) => {
//     const { email, password } = req.body
//     const { insert_user_one } = await client.request(
//         gql`
//           mutation registerUser($user: user_insert_input!) {
//             insert_user_one(object: $user) {
//               id
//             }
//           }
//         `,
//         {
//           user: {
//             email,
//             password: password,
//           },
//         }
//       );
// }
// )
app.post('/login',cors(),async(req,res)=>{
    const email = req.body.email
    const password = req.body.password
    console.log(email,password)
    res.json({
        Token:token(email)
    })
})
app.listen(PORT,()=>{console.log(`server started on port ${PORT}`)})