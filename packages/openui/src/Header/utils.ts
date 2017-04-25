export type State = 'Pinned' | 'Unpinned';
export interface HeaderState {
  state: State;
  position: number;
  height: number;
}

export type GetHeaderState = (
  w: Window,
  header: HTMLElement,
  currentState: HeaderState,
) => HeaderState;
const getHeaderState: GetHeaderState = (
  w,
  header,
  currentState,
) => {
  if (typeof w !== 'undefined') {
    const currentPosition = w.pageYOffset;
    const headerHeight = header.offsetHeight;
    let nextState: State = 'Unpinned';
    if (currentPosition < headerHeight &&
      (currentPosition === 0 || currentPosition > currentState.position)
    ) {
      nextState = 'Pinned';
    } else if (currentPosition < currentState.position) {
      nextState = 'Pinned';
    } else if (currentPosition > currentState.position) {
      nextState = 'Unpinned';
    }
    return {
      state: nextState,
      position: currentPosition,
      height: header.clientHeight,
    };
  }
  return currentState;
};

export default getHeaderState;
