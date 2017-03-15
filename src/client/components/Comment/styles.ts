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

export const CommentText = styled.p`
  color: #555f77;
  margin-bottom: 1.25rem;
  line-height: 1.3125rem;
`;

export const PicWrapper = styled.div`
  padding-top: 0.625rem;
  width: 3.5rem;
`;
interface PicProps {
  url?: string;
}

export const Pic = styled.div`
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 50%;
  background-size: contain;
  background-image: url(${(props: PicProps) => props.url});
`;

export const Footer = styled.footer`
  color: #acb4c2;
  font-size: 0.875rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-direction: row;
`;
