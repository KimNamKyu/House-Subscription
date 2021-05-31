import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { css } from '@emotion/react';

interface Props {
  ref: any;
  children: any; 
}

const Modal: FC<Props> = React.forwardRef(
  (props: Props, ref?: React.Ref<HTMLDivElement>) => {
    return ReactDOM.createPortal(
      <div css={wrapperModalStyle} ref={ref}>
        <div>
          {props.children}
        </div>
      </div>,
      document.querySelector('body')!
    );
  })
const wrapperModalStyle = css`
    background: rgba(0, 0, 0, 0.25);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
        border-radius: 5px;
        background: white;
        padding: 36px;
        width: 360px;
        height: auto;
    }
`
export default Modal;