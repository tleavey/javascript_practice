'use strict';
const greet = require('../lib/greet');

test('should return Hello Tim', () => {
    //Arrange
    //Act
    //Assert
    let actual = greet.sayHello('Tim');
    let expectedValue = 'Hello Tim';

    expect(actual).toBe(expectedValue);
});

test('should return null with no args', () => {
    expect(greet.sayHello()).toBeNull();
})