import React from 'react';
import {ScrollView, Text, Image} from 'react-native';

export default class Scroll extends React.Component {
    constructor(props){
        super(props);
    }
render(){
    return( 
        <ScrollView
        style = {{marginBottom: 10}}>
            <Text
            style = {
                {
                    fontSize: 30,
                    padding: 20,
                    backgroundColor: "red"
                }
            }>
                Scroll it first 
            </Text>
            <Text
            style = {
                {
                    fontSize: 30,
                    padding: 20,
                    backgroundColor: "yellow"
                }
            }>
                Bingooo
            </Text>
        </ScrollView>
    );
}
}