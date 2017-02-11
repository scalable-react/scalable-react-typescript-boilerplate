import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} from 'graphql';

const TagType = new GraphQLObjectType({
  name: 'Tag',
  fields: () => ({
    slug: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

export default new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    tags: { type: new GraphQLList(TagType) },
    image: { type: GraphQLString },
  }),
});
