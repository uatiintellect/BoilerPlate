import * as React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import ProductCard from './components/Card';
import MyButton from './components/Button';
import Check from './components/CheckBox'; 
import MyChip from './components/Chip';
import MyTable from './components/Table';
import MyRipple from './components/Ripple';
import Scroll from './components/Scroll';

export default App = () => (
    <View>
      <Scroll />
        <Header /> 
        <ProductCard />  
        <MyButton />
        <Check />
        <MyChip />
        <MyTable />
        <MyRipple />
    </View>
    );