import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 5.3125rem;
  margin-bottom: 1.25rem;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const CommentWrapper = styled.div`
  padding: 1rem;
  background-color: #fff;
  vertical-align: top;
  border-radius: 0.1875rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  flex: 1;
`;

export const Footer = styled.footer`
  color: #acb4c2;
  font-size: 0.875rem;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  flex-direction: row;
`;

export const Actions = styled.ul`
  list-style: none;
`;

export const Action = styled.li`
  padding-right: 0.75rem;
`;

export const ActionButton = styled.a`
  cursor: pointer;
`;

export const PicWrapper = styled.div`
  padding-top: 0.625rem;
  width: 3.5rem;
`;

export const Pic = styled.div`
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 50%;
  background-size: contain;
  background-image: url('https://github.com/RyanCCollins/cdn/blob/master/misc/missing.png?raw=true');
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  outline: none;
  border: none;
  display: block;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  font-family: "PT Sans", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif;
  font-size: 1rem;
  color: #555f77;
`;
