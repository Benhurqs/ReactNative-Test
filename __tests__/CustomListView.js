// import 'react-native';
import React from 'react';
import CustomListview from '../app/components/CustomListview';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Discography from '../app/mock/discography.json';

test('renders correctly', () => {
  const tree = renderer.create(
    <CustomListview 
            itemList={Discography}
        />
  );
  expect(tree).toMatchSnapshot();
});
