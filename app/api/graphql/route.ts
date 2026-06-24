import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "@/app/sharedui/lib/schema";
import { resolvers } from "@/app/sharedui/lib/resolver";
import { NextRequest } from "next/server";
import {connect} from "@/app/sharedui/database/db.connect"

const server = new  ApolloServer({
  typeDefs,
  resolvers
})

const handler = startServerAndCreateNextHandler<NextRequest>(server)



export async function GET(request: NextRequest) {
 return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}

connect()