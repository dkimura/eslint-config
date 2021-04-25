/* eslint-disable no-unused-vars */
import React from 'react'

// react/button-has-type
const ButtonHasType = ({ children, type }) => (
  <button type={type}>{children}</button>
)

// react/jsx-props-no-spreading
const PropsNoSpreading = ({ children, ...props }) => (
  <h1 {...props}>{children}</h1>
)

// react/jsx-key
const JsxKey1 = ({ data }) => (
  <div>
    {data.map((item) => (
      <React.Fragment key={item}>{item}</React.Fragment>
    ))}
  </div>
)

const JsxKey2 = ({ data, ...props }) => (
  <div>
    {data.map((item) => (
      <React.Fragment key={item} {...props}>
        {item}
      </React.Fragment>
    ))}
  </div>
)

// react/jsx-sort-props
const JsxSortProps1 = ({ children }) => (
  <button onClick={() => ({})} type="button">
    {children}
  </button>
)

const JsxSortProps2 = ({ children, ...props }) => (
  <button {...props} onClick={() => ({})} type="button">
    {children}
  </button>
)
