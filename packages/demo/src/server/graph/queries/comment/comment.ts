import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

import types from '../../types/';
import CommentModel from '../../../db/models/comment';

export default {
  type: types.commentType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(_, args, __) {
    return CommentModel
      .findById(args.id)
      .exec();
  },
};
