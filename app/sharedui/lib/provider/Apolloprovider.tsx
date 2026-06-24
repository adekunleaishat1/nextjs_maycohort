"use client"

import { ApolloProvider as  Provider } from "@apollo/client/react";
import  {Apolloclient} from "../ApolloClient"
import { ReactNode } from "react";



export default function ApolloProvider({ children }: { children: ReactNode }) {
    const client = Apolloclient();
    return <Provider client={client}> {children} </Provider>;
  }