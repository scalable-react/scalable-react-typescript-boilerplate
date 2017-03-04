import * as React from 'react';
import { State } from './state';
import { ActionCreatorTypes } from './actionCreators';
import { ActionTypes } from './actions';

export { State };
export { ActionCreatorTypes };
export { ActionTypes };

export type OnInput = (e: React.SyntheticEvent<undefined>) => void;
export type OnSubmit = () => void;
export type OnKeyUp = (e: React.KeyboardEvent<undefined>) => void;

export interface PostComment {
  body: string;
  author: string;
}

export interface Post {
  id: string;
  title: string;
  image: string;
  content: string;
  comments: PostComment[];
}

export interface ErrorType { message: string; }
export interface Props extends React.Props<any> {
  loading: boolean;
  error?: ErrorType;
  post?: Post;
  submitComment?: Function;
  refetch: Function;
  params: {
    postId: String;
  };
};

export type Input = string;
