import * as React from 'react';
import { Props } from './';
import { Props as PresentationProps } from './presentation';
import { State } from './state';
import { ActionCreatorTypes } from './actionCreators';
import { ActionTypes } from './actions';

export { Props, PresentationProps, State, ActionCreatorTypes, ActionTypes };

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

export type Input = string;

export type Body = string;
export type Author = string;
export type PostId = string;
export interface PostSubmission {
  variables: {
    body: Body;
    author: Author;
    post: PostId;
  }
};

export type SubmitComment = (post: PostSubmission) => Promise<undefined>;
