import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SearchComponent from './SearchComponent'

Enzyme.configure({ adapter: new Adapter() })

describe('Search Component test', () => {
    it('should render input without initial value', () => {
        const Wrapper = shallow(<SearchComponent />)
        
    })
})