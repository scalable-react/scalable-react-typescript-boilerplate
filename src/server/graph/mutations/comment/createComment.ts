import {
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql';

import types from '../../types';
import CommentModel from '../../../db/models/comment';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      type: new GraphQLNonNull(types.commentInputType),
    },
  },
  async resolve(_, args, __) {
    const model = new CommentModel(args.data);
    const newComment = await model.save();
    if (!newComment) {
      throw new Error('Error saving comment');
    }
    return true;
  },
};
