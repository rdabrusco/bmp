import * as React from 'react'
import Greeting from '../components/greeting'

const Test = () => {
    return (
        <div>
      <Greeting name='Ryan' />
      <Greeting name='Bill' />
      <Greeting name='Jillian' />
            
        </div>
    )
}

export const Head = () => <title>About Us</title>


export default Test
