import styled from 'styled-components';
import { SvgIcon } from 'ui';

export interface CardThumbnailProps {
  image: string;
}

export const Card = styled.div`
  width: 384px;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  background-color: white;
`;

export const CardThumbnail = styled.div`
  background: url('${(props: CardThumbnailProps) => props.image}') center center / cover no-repeat;
  min-height: 192px;
  align-items: center;
  justify-content: center;
`;

export const CardContents = styled.div`
  padding: 24px;
`;

export const CardHeading = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.23;
`;

export const CardDescription = styled.p`
  color: #333;
  font-size: 24px;
  line-height: 1.167;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Icon = styled(SvgIcon)`
  vertical-align: middle;
  margin-right: 12px;
  transition: all .3s ease-in-out;
  display: inline-block;
  width: 24px;
  height: 24px;
  fill: #007acc;
  stroke: #007acc;
  flex: 0 0 auto;
  stroke-width: 2;
  &:hover {
    transform: translate(4px, 0px);
  }
`;

export const Anchor = styled.a`
  color: #007acc;
  font-size: 1.1875rem;
  line-height: 24px;
  font-weight: 600;
`;

export const CardFooter = styled.footer``;
