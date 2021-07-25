import React from 'react'

export default function Puase({ ...props }) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width={128}
      height={128}
      viewBox='0 0 128 128'
    >
      <defs>
        <style dangerouslySetInnerHTML={{ __html: '.a{fill:#fff200;}' }} />
      </defs>
      <g transform='translate(-5299.745 -6347.02)'>
        <path
          className='a'
          d='M5363.745,6475.02a64,64,0,1,1,64-64A63.933,63.933,0,0,1,5363.745,6475.02Z'
        />
        <path d='M5341.245,6441.02v-60a3.75,3.75,0,0,1,5.83-3.12l45,30a3.75,3.75,0,0,1,0,6.24l-45,30A3.753,3.753,0,0,1,5341.245,6441.02Z' />
      </g>
    </svg>
  )
}
