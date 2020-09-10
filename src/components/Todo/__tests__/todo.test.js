import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import HelloWorldTodo from "../index";


test('renders correctly', () => {
    const tree = renderer.create(<HelloWorldTodo />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("something", () => {
    expect("this").not.toEqual("that");
})

it('renders correctly', () => {
    const tree = renderer
        .create(<HelloWorldTodo/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});