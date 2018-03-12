import React from 'react';
import * as actions from '../../app/actions';
import Discography from '../../app/mock/discography.json';
import Artists from '../../app/mock/artists.json';

describe('actions', () => {
  test('Test getDiscography action', () => {
    const expectedAction = {
      type: actions.DATA_AVAILABLE,
      data: Discography
    }

     expect(actions.getDiscography())
    .toEqual(expect.any(Function))
  })

  test('Test getArtists action', () => {
    const expectedAction = {
      type: actions.DATA_AVAILABLE,
      data: Artists
    }

    expect(actions.getArtists()).toEqual(expectedAction)
  })
})