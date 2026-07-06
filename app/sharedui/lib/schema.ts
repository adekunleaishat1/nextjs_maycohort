
export const typeDefs = `
  type Book {
    id: ID!
    title: String!
    author: String!
    year: Int!
  }
  type author {
     id:ID!
    username:String
    email:String
    password:String
  }

  union allauthorresult = String | author

  type Blog {
    id: ID!
    title: String!
    content: String!
    category: String!
    author:String
  }

  type User {
    id:ID!
    username:String!
    email:String!
    password:String!
  }

  input BookInput {
    title: String!
    author: String!
    year: Int!
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
  input blogInput {
    title: String!
    content: String!
    category: String!
    author:String!
   }


  type Query {
   book:[Book!]
   onebook(id:ID!):Book
   getallblog(id:ID):[Blog]
  }
   
   type Mutation{
    addBook(input:BookInput):Book
    editBook(input:BookInput):Book
    deleteBook(id:ID):Book
    adduser(input:userInput!):User
    loginuser(input:loginInput!):User
    addBlog(input:blogInput):Blog
   }
`