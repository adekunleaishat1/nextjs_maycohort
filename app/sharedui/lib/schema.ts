
import { usertypeDef } from "./userschema"
import { blogtypeDef } from "./blogschema"
import { mergeTypeDefs } from "@graphql-tools/merge"


export const typeDefs = mergeTypeDefs([
  usertypeDef,
  blogtypeDef
])