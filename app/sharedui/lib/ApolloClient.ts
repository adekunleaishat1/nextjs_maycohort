import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "http://localhost:3000/api/graphql", // Replace with your GraphQL endpoint
});

export const Apolloclient = ()=>{
    return new ApolloClient({
      link:httpLink,
      cache: new InMemoryCache()
    })
}