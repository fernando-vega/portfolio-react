/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import renderer from 'react-test-renderer'
import React from 'react';
import Link from './Link'

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter()
  })
  // re-rendering
  tree = "tree".toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave()
  })
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
