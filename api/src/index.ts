import { ApolloServer } from 'apollo-server'
import path from 'path'
import { readFileSync } from 'fs'
import resolvers from './resolvers'

const typeDefs = readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8')

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => console.log(`Server is running on ${url}`))

const typeDefs = `
  type Query {
    info: String!
  }
`

const resolvers = {
  Query: {
    info: () => `This is the API of a Platzi project`
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
  console.log(`Server is running on ${url}`);

})
