// const jwt = require("jsonwebtoken");

// const HASURA_GRAPHQL_JWT_SECRET = {
//   type: "HS256",
//   key:
//     "this-is-a-generic-HS256-secret-key-and-you-should-really-change-it",
// };

// const JWT_CONFIG = {
//   algorithm:  "RS512",
//   expiresIn: "30d",
// };



// const generateJWT =  function (params) {
//   const payload = {
//     "https://hasura.io/jwt/claims": {
//       "x-hasura-allowed-roles": params.allowedRoles,
//       "x-hasura-default-role": params.defaultRole,
//       ...params.otherClaims,
//     },
//   };
//   return jwt.sign(payload, HASURA_GRAPHQL_JWT_SECRET.key, JWT_CONFIG);
// }

// module.exports=generateJWT