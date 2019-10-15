import React from 'react'
import { render } from '@testing-library/react'

import Display from '../display/Display'

test('display renders', () => {
    render(<Display />)
})

test('open/closed test', () => {
    const lockedMock = jest.fn()
    const closedMock = jest.fn()
    const { getByText } = render(<Display closed={closedMock} locked={lockedMock} />)
    lockedMock ? getByText(/locked/i) : getByText(/unlocked/i)
    closedMock ? getByText(/closed/i) : getByText(/open/i)
})

test('led color', () => {
    const lockedMock = jest.fn()
    const closedMock = jest.fn()
    const { getByText } = render(<Display locked={lockedMock} closed={closedMock}/>)
    lockedMock ? expect(getByText(/locked/i).classList.contains('red-led')).toBeTruthy() : expect(getByText(/unlocked/i).classList.contains('green-led')).toBeTruthy()
    closedMock ? expect(getByText(/closed/i).classList.contains('red-led')).toBeTruthy() : expect(getByText(/open/i).classList.contains('green-led')).toBeTruthy()
})