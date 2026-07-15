

export const usertypeDef = `

type User {
    id:ID!
    username:String!
    email:String!
    password:String!
  }

  type loginresult {
    existuser:User,
    token:String!
  }
input userInput{
   username:String!
   email:String!
   password:String!
  }
  
  input loginInput{
   email:String!
   password:String!
  }
  
  type Mutation{
    adduser(input:userInput!):User
    loginuser(input:loginInput!):loginresult
   }
`