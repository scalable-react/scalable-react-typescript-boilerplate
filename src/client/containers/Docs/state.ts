export interface State {
  markdownContent?: string;
  error?: string;
  isLoading: boolean;
}

export const initialState: State = {
  markdownContent: null,
  error: null,
  isLoading: false,
};

export default State;
