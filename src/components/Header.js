import React from 'react';
import {Appbar} from 'react-native-paper';

export default Header = () => {

    const _onSearch = () => console.warn('Searching');
      
    return (
        <Appbar.Header>
          <Appbar.BackAction/>
          <Appbar.Content
            title="olx"
            subtitle="Bech dy"
          />
          <Appbar.Action icon="search" onPress={() => _onSearch()} />
          <Appbar.Action icon="more-vert"  />
        </Appbar.Header>
      );
    }
  