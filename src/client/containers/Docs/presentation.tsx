import * as React from 'react';
import { Article, Headline, LoadingIndicator, Section, Error } from 'components';
import { StyledHr } from './styles';
import {
  LoadInitiationAction,
  LoadSuccessAction,
  LoadFailureAction,
  ClearErrorAction,
} from './actions';

export interface StateProps {
  markdownContent: string;
  error?: string;
  isLoading: boolean;
}

export interface DispatchProps { 
  actions: {
    loadInitiation: () => LoadInitiationAction,
    loadSuccess: (data: string) => LoadSuccessAction,
    loadFailure: (error: string) => LoadFailureAction,
    clearError: () => ClearErrorAction,
  };
}

export type DocsProps = React.Props<Docs> & StateProps & DispatchProps;

export default class Docs extends React.Component<DocsProps, undefined> {
  constructor(props) {
    super(props);
    const { markdownContent } = props;
    if ( markdownContent === null ) {
      this.props.actions.loadInitiation();
    }
  };

  public render() {
    const {
      markdownContent,
      isLoading,
      error,
    } = this.props;
    return (
      <Section
        alignItems="center"
        flexDirection="column"
        pad="medium"
        full={{ vertical: true }}
        backgroundColor="#f5f5f5"
      >
        <Headline>
          Documentation
          <StyledHr />
        </Headline>
        {error &&
          <Error
            onClose={() => {
              console.log('Called on close');
            }}
            message={error}
          />
        }
        <LoadingIndicator isLoading={isLoading} />
        {typeof markdownContent === 'string' &&
          <Article
            pad="large"
            boxSize={{ horizontal: 'xxlarge' }}
            margin={{ vertical: 'large' }}
            backgroundColor="#FFF"
            content={markdownContent}
          />
        }
      </Section>
    );
  }
}
