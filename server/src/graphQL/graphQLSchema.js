import {
  graphql,
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

// import userModel from '../db/models/user';
// import nodeModel from '../db/models/node';
// import tripMode from '../db/models/trip';
// import inquiry from '../db/models/trip';

export let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve(){
          return 'world'
        }
      }
    }
  })
})

