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

import userModel from '../db/models/user';
import destinationModel from '../db/models/destination';
import tripModel from '../db/models/trip';
import inquiryModel from '../db/models/inquiry';

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
