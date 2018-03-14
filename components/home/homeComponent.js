import React, { Component } from 'react';
import { Text, FlatList, View, Button } from 'react-native';
class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentWillMount(){
        this.props.onFetchProduct();
    }
    _onLoadMore(){
        page = 10;
        this.props.onFetchMoreProduct(page);
    }
    render() {
        return (
            <View style={{flex:1}}>
                <FlatList
                    data={this.props.product}
                    renderItem={({ item, index }) => {
                        return (<Text>{item.name}</Text>);
                    }}
                    keyExtractor={item => item._id}
                />
                <Button
                    onPress={this._onLoadMore.bind(this)}
                    title="Load More"
                    color="#841584"
                    accessibilityLabel="Load More Baby Name"
                />
            </View>
        );
    }
}

export default HomeComponent;