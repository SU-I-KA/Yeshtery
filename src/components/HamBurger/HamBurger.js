import React from 'react'

export default function HamBurger({ ...props }) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height='18.219'
      viewBox='0 0 24 18.219'
    >
      <g transform='translate(-4779.745 -298.903)'>
        <path d='M4802.411,301.57h-21.333a1.333,1.333,0,0,1,0-2.667h21.333a1.333,1.333,0,1,1,0,2.667Z' />
        <path d='M4798.411,309.346h-17.333a1.334,1.334,0,0,1,0-2.667h17.333a1.334,1.334,0,1,1,0,2.667Z' />
        <path d='M4802.411,317.122h-21.333a1.333,1.333,0,0,1,0-2.666h21.333a1.333,1.333,0,1,1,0,2.666Z' />
      </g>
    </svg>
  )
}
