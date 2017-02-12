import * as React from 'react';
import { Article, Headline, LoadingIndicator } from 'components';
import * as DocsActionCreators from './actions';
import { selectError, selectIsLoading, selectMarkdownContent } from './selectors';
const connect = require('react-redux').connect;
const bindActionCreators = require('redux').bindActionCreators;
const { Section, StyledHr } = require('./styles');

interface IAppProps extends React.Props<any> {
  error?: string;
  docs?: string;
  isLoading: boolean;
  actions: any;
};

const mapStateToProps = (state) => ({
  error: selectError(state),
  markdownContent: selectMarkdownContent(state),
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    DocsActionCreators,
    dispatch,
  ),
});

class Docs extends React.Component<any, any> {
  public componentDidMount() {
    this.props.actions.loadMarkdown();
  }
  public render() {
    const {
      markdownContent,
      isLoading,
      error,
    } = this.props;
    return (
      <Section>
        <Headline>
          Documentation
          <StyledHr />
        </Headline>
        {error && <p>{error}</p>}
        <LoadingIndicator isLoading={isLoading} />
        {typeof markdownContent === 'string' &&
          <Article content={markdownContent} />
        }
      </Section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Docs);
