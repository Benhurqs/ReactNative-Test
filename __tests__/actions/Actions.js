import React from 'react';
import * as actions from '../../app/actions';
import Discography from '../../app/mock/discography.json';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: actions.DATA_AVAILABLE,
      data: Discography
    }
    expect(actions.getDiscography()).toHaveBeenLastCalledWith(expect.any(Function), 1500);
  })
})