import React from 'react'
import { render } from '@testing-library/react'

import Display from '../display/Display'
import Controls from '../controls/Controls'


// make sure dashboard shows the controls and display
test('display renders', () =>{
    render(<Display />)
})

test('controls render', () => {
    render(<Controls />)
})