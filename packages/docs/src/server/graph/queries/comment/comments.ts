import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';
import types from '../../types/';
import CommentModel from '../../../db/models/comment';

export default {
  type: new GraphQLList(types.commentType),
  args: {
    postId: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(_, args, __) {
    return CommentModel
      .find({
        post: args.postId,
      })
      .exec();
  },
};
