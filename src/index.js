import {GraphQLServer} from 'graphql-yoga'
import {typeDefs} from './typeDefs';
import {resolvers} from './resolvers'

import '../database'

const server= new GraphQLServer({
  typeDefs,
  resolvers
});

server.start({port:5000},({port})=>{
  console.log('Server is running', port);
})