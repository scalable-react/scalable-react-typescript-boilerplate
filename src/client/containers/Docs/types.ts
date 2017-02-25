import * as React from 'react';
import { Dispatch } from 'redux';

export type LOAD_INTIATION_TYPE = 'DOCS/LOAD_INTIATION';
export type LOAD_SUCCESS_TYPE = 'DOCS/LOAD_SUCCESS';
export type LOAD_FAILURE_TYPE = 'DOCS/LOAD_FAILURE';

export type Data = string;

export interface Action<P> {
  type: LOAD_INTIATION_TYPE | LOAD_SUCCESS_TYPE | LOAD_FAILURE_TYPE;
  payload?: P;
}

export interface ErrorType {
  message: string;
}

export interface DocsProps extends React.Props<any> {
  error?: {
    message: string;
  };
  docs?: string;
  isLoading: boolean;
  markdownContent?: string;
  actions: {
    loadInitiation: () => Action<any>,
    loadSuccess: (data: Data) => Action<{ data: Data }>,
    loadFailure: (error: ErrorType) => Action<ErrorType>,
    loadMarkdown: () => (dispatch: Dispatch<any>) => void,
  };
}
