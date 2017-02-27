import reducer from '../reducers';
import * as types from '../constants';
import { actionCreators } from '../actionCreators';
import {initialState} from '../state';

describe('docs reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, actionCreators.loadInitiation()),
    ).toEqual(initialState);
  });
});

//   it('should handle ADD_TODO', () => {
//     expect(
//       reducer([], {
//         type: types.ADD_TODO,
//         text: 'Run the tests'
//       })
//     ).toEqual(
//       [
//         {
//           text: 'Run the tests',
//           completed: false,
//           id: 0
//         }
//       ]
//       )

//     expect(
//       reducer(
//         [
//           {
//             text: 'Use Redux',
//             completed: false,
//             id: 0
//           }
//         ],
//         {
//           type: types.ADD_TODO,
//           text: 'Run the tests'
//         }
//       )
//     ).toEqual(
//       [
//         {
//           text: 'Run the tests',
//           completed: false,
//           id: 1
//         },
//         {
//           text: 'Use Redux',
//           completed: false,
//           id: 0
//         }
//       ]
//       )
//   })
// })
