import React from 'react';
import { styled } from '@linaria/react';

import { useStore } from 'effector-react';
import { $backButtonShown, onPreviousClick } from '@app/model/view';
import Logo from './Logo';
import BackButton from './BackButton';
import Title from './Title';

interface WindowProps {
  title?: string;
  blur?: boolean;
  pallete?: 'default' | 'blue' | 'purple';
}

function getColor(pallete: string): string {
  switch (pallete) {
    case 'blue':
      return 'var(--color-blue)';
    case 'purple':
      return 'var(--color-purple)';
    default:
      return '#035b8f';
  }
}

const ContainerStyled = styled.div<WindowProps>`
  position: relative;
  height: 600px;
  padding: 130px 30px 0;
  text-align: center;
  filter: ${({ blur }) => (blur ? 'blur(3px)' : 'none')};

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      to top, rgba(3, 91, 143, 0), ${({ pallete }) => getColor(pallete)} 150%
    );
  }
`;

const HeadingStyled = styled.div<{ pallete: string }>`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 375px;
  height: 130px;
  padding-top: 50px;
  background-color: var(--color-dark-blue);

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      to top, rgba(3, 91, 143, 0), ${({ pallete }) => getColor(pallete)} 150%
    );
  }
`;

const FrameStyled = styled.div`
  overflow: hidden;
  position: absolute;
  top: 10px;
  left: 50%;
  width: 42px;
  height: 30px;
  transform: translateX(-50%);
`;

export const Window: React.FC<WindowProps> = ({
  title,
  blur,
  pallete = 'default',
  children,
}) => {
  const backButtonShown = useStore($backButtonShown);

  return (
    <ContainerStyled blur={blur} pallete={pallete}>
      <HeadingStyled pallete={pallete}>
        <FrameStyled>
          <Logo size="icon" />
        </FrameStyled>
        <Title variant="heading">{title}</Title>
      </HeadingStyled>
      {backButtonShown && <BackButton onClick={onPreviousClick} />}
      {children}
    </ContainerStyled>
  );
};

export default Window;