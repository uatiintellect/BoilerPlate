import * as React from 'react';
import { Chip } from 'react-native-paper';

const MyChip = () => (
  <Chip icon="info" onPress={() => console.log('Pressed')}>Its the Best Product Page</Chip>
);

export default MyChip;