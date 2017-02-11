import {
  GraphQLList,
} from 'graphql';

import postType from '../../types/post';
import PostModel from '../../../db/models/post';

export default {
  type: new GraphQLList(postType),
  args: {},
  resolve() {
    return PostModel
      .find()
      .exec();
  },
};
