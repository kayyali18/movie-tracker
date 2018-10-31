import * as Actions from './index';

describe('actions', () => {
  it('takes a username and password to login', () => {
    const email = 'ahmad@gmail.com'
    const password = 'Ahmad'

    const expected = {
      type: 'LOGIN_USER',
      user: {
        email: 'ahmad@gmail.com',
        password: 'Ahmad'
      }
    }
    const result = Actions.loginUser({email, password})
    expect(result).toEqual(expected);
  })
})
