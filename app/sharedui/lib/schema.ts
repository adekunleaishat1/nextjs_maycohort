
export const typeDefs = `
  type Book {
    id: ID!
    title: String!
    author: String!
    year: Int!
  }
  
  input BookInput {
    title: String!
    author: String!
    year: Int!
  }

  type Query {
   book:[Book!]
   onebook(id:ID!):Book
  }
   
   type Mutation{
    addBook(input:BookInput):Book
    editBook(input:BookInput):Book
    deleteBook(id:ID):Book
   }
`