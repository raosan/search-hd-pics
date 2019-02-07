import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

// Factory function to create shallowWrapper
const setup = (props={}, state=null) => {
	return shallow(<App {...props} />)
}

const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`)
}

test('renders wihtout crashing', () => {
	const wrapper = setup()
	const appComponent = findByTestAttr(wrapper, 'component-app')
	expect(appComponent.length).toBe(1)
})

test('renders search bar', () => {
	const wrapper = setup()
	const searchBar = findByTestAttr(wrapper, 'search-bar')
	expect(searchBar.length).toBe(1)
})

test('renders list pic', () => {
	const wrapper = setup()
	const picList = findByTestAttr(wrapper, 'pic-list')
	expect(picList.length).toBe(1)
})

test('list pic start with 0', () => {
	
})

test('click search will getl list of pic', () => {
	
})