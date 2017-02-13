import {
  GraphQLList,
} from 'graphql';

import types from '../../types';
import PostModel from '../../../db/models/post';

export default {
  type: new GraphQLList(types.postType),
  args: {},
  resolve() {
    return PostModel
      .find()
      .exec();
  },
};
