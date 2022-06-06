// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
//import { jsx, css } from '@emotion/react'
import { jsx, css } from 'https://esm.sh/@emotion/react@11.9.0'

import { renderToString } from 'https://esm.sh/react-dom@18.1.0/server'
//import App from './App'



const style = css`
  color: hotpink;
`

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
)

const anotherStyle = css({
  textDecoration: 'underline'
})

const AnotherComponent = () => (
  <div css={anotherStyle}>Some text with an underline.</div>
)
// render(
//   <SomeComponent>
//     <AnotherComponent />
//   </SomeComponent>
// )


let html = renderToString(<SomeComponent />)

console.log(11,html)
