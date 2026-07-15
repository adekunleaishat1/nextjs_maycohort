import { userresolver } from "./userresolver"
import { blogresolver } from "./blogresolver"
import { mergeResolvers } from "@graphql-tools/merge"

 export const resolvers = mergeResolvers([
  userresolver,
  blogresolver
 ])
