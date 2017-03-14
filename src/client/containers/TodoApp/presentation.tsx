import * as React from 'react';
import { StateProps } from './types';
import {
  Container,
  DeleteButton,
  Section,
  Input,
  Header,
  InnerContainer,
  Ul,
  Li,
  Todos,
  Todo as TodoLabel,
  H1,
} from './styles';

interface Props extends StateProps {
  onInput: React.EventHandler<React.FormEvent<HTMLInputElement>>;
  onDeletion: (index: number) => void;
  onAddition: React.EventHandler<React.KeyboardEvent<HTMLInputElement>>;
}
class TodoAppPresentation extends React.Component<Props, undefined> {
  public render() {
    const {
      todos,
      input,
      onInput,
      onDeletion,
      onAddition,
    } = this.props;
    return (
      <Container>
        <H1>
          Example Todo App
        </H1>
        <InnerContainer>
          <Section>
            <Header>
              <Input
                value={input}
                onChange={onInput}
                onKeyPress={onAddition}
                autoFocus
                placeholder="Start typing to add a Todo..."
              />
            </Header>
            <Todos>
              <Ul>
                {todos && todos.map((item, i) =>
                  <Li key={i}>
                    <TodoLabel>
                      {item.text}
                    </TodoLabel>
                    <DeleteButton
                      onClick={() => onDeletion(i)}
                    />
                  </Li>,
                )}
              </Ul>
            </Todos>
          </Section>
        </InnerContainer>
      </Container>
    );
  }
}

export default TodoAppPresentation;
