import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'CommentInput',
  fields: () => ({
    author: { type: GraphQLString },
    body: { type: GraphQLString },
    post: { type: new GraphQLNonNull(GraphQLID) },
  }),
});
