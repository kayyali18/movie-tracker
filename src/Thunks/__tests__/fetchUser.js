import {loginUser} from '../../Actions'
import {fetchUser} from '../fetchUser'


describe('fetchUser', () => {
  let mockEmail
  let mockDispatch
  let mockPass
  beforeEach(() => {
    mockEmail = 'tman2272@aol.com'
    mockPass = 'password'
    mockDispatch = jest.fn()
  })

  it('should call dispatch with loginUser(data)', async () => {
    //setup
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))
    const thunk = fetchUser(mockEmail, mockPass)
    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith()
  });
});