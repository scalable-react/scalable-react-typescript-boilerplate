import * as React from 'react';
import { Article, Headline, LoadingIndicator, Box, Section } from 'components';
import { StyledHr } from './styles';
import { LoadInitiationAction, LoadSuccessAction, LoadFailureAction } from './actions';

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
          <Box
            backgroundColor="#ff324d"
            size={{ horizontal: 'medium' }}
            pad="small"
            alignItems="center"
          >
            <p style={{ color: 'white' }}>{error}</p>
          </Box>
        }
        <LoadingIndicator isLoading={isLoading} />
        {typeof markdownContent === 'string' &&
          <Article
            pad="large"
            size={{ horizontal: 'xxlarge' }}
            margin={{ vertical: 'large' }}
            backgroundColor="#FFF"
            content={markdownContent}
          />
        }
      </Section>
    );
  }
}
