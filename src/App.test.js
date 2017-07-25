import React from 'react';
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
import Title from './components/Title'

chai.use(chaiEnzyme())

describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).to.have.tagName('div')
  })

  it('contains a Title', () => {
    expect(app).to.have.descendants(Title)
  })

  it('sets the Title to "All Recipes"', () => {
    expect(app).to.contain(<Title content="All Recipes" />)
  })

})

describe('<Title />', () => {
  const title = shallow(<Title content="Hello, World" />)

  it('has a wrapping h1 tag', () => {
    expect(title).to.have.tagName('h1')
  })
})


describe('with a different content prop', () => {
  const title = shallow(<Title content="Something Completely Different!" />)

  it('renders a different title text', () => {
    expect(title).to.have.text('Something Completely Different!')
  })
})
