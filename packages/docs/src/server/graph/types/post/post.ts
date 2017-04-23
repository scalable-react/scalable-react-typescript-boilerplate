import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLID,
} from 'graphql';
import commentType from '../comment/comment';

export default new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    comments: { type: new GraphQLList(commentType) },
    image: { type: GraphQLString },
  }),
});
