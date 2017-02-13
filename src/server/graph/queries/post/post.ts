import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

import types from '../../types';
import PostModel from '../../../db/models/post';

export default {
  type: types.postType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(_, args, __) {
    return PostModel
      .findById(args.id)
      .populate('comments')
      .exec();
  },
};
