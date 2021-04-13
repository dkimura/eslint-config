/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

// react/button-has-type
type ButtonHasTypeProps = {
  type: 'submit' | 'button' | 'reset'
}

const ButtonHasType: React.FC<ButtonHasTypeProps> = ({ type, children }) => (
  <button type={type}>{children}</button>
)

// react/jsx-props-no-spreading
const PropsNoSpreading: React.FC = ({ children, ...props }) => (
  <h1 {...props}>{children}</h1>
)

// react/jsx-key
type JsxKeyProps = {
  data: string[]
}

const JsxKey1: React.VFC<JsxKeyProps> = ({ data }) => (
  <div>
    {data.map((item) => (
      <React.Fragment key={item}>{item}</React.Fragment>
    ))}
  </div>
)
const JsxKey2: React.VFC<JsxKeyProps> = ({ data, ...props }) => (
  <div>
    {data.map((item) => (
      <React.Fragment key={item} {...props}>
        {item}
      </React.Fragment>
    ))}
  </div>
)

// react/jsx-sort-props
const JsxSortProps1: React.FC = ({ children }) => (
  <button onClick={() => ({})} type="button">
    {children}
  </button>
)

const JsxSortProps2: React.FC = ({ children, ...props }) => (
  <button {...props} onClick={() => ({})} type="button">
    {children}
  </button>
)
