import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IFooBarState } from './reducer';
import {
  loadDataInitiation,
  loadDataSuccess,
  loadDataFailure,
} from './actions';
import {
  selectIsLoading,
  selectError,
  selectData,
} from './selectors';
import { Heading, Section } from './styles';

interface IFooBarProps extends React.Props<any> {
  isLoading: boolean;
  error?: { message: string };
  data?: any;
};

interface IFooBarDispatchProps {
  actions: {
    loadDataInitiation: Function;
    loadDataSuccess: Function;
    loadDataFailure: Function;
  };
};

type IFooBarPropTypes = IFooBarProps & IFooBarDispatchProps;

const mapStateToProps = (state: IFooBarState): IFooBarProps => ({
  isLoading: selectIsLoading(state),
  error: selectError(state),
  data: selectData(state),
});

const mapDispatchToProps = (dispatch): IFooBarDispatchProps => ({
  actions: bindActionCreators(
    {
      loadDataInitiation,
      loadDataSuccess,
      loadDataFailure,
    },
    dispatch,
  )
});

class FooBar extends React.Component<IFooBarPropTypes, IFooBarState> {
  public render() {
    return (
      <Section>
        <Heading>
          Best container ever!
        </Heading>
      </Section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooBar);
