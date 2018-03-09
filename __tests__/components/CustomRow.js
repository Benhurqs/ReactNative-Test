// import 'react-native';
import React from 'react';
import CustomRow from '../../app/components/CustomRow';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <CustomRow
        title='Teste title'
        description='Teste description'
        image_url="https://i.imgur.com/K3KJ3w4h.jpg"
    />
  );
  expect(tree).toMatchSnapshot();
});
