import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
  width: 100%;
`;

export const InnerContainer = styled.div`
  line-height: 1.4em;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  font-smoothing: antialiased;
  font-weight: 300;
  padding-top: 130px;
  min-height: 100vh;
`;

export const Section = styled.section`
  background: #fff;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

export const Header = styled.header`
  display: block;
`;

export const Input = styled.input`
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
`;

export const Todos = styled.section`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Li = styled.li`
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
`;

export const Todo = styled.label`
  white-space: pre-line;
  word-break: break-all;
  padding: 15px 60px 15px 15px;
  margin-left: 45px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 35px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  border: none;
  background: transparent;
  font-size: 16px;
  &:after {
    content: '✕';
  }
  &:hover {
    color: #af5b5e;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 48px;
  margin: 0;
  padding-top: 60px;
  text-align: center;
  color: #000000;
`;
