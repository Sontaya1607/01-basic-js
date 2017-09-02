const hello = require('./hello')
test('hello function', () => {
  //Arrange
  let nickname = 'Golf'

  //Act
  let result = hello(nickname)

  //Assert
  expect(result).toBe('Hello Golf')

})
