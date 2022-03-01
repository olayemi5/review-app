import { useState } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export const Home = ({ navigation}) => {

    const [reviews, setReviews] = useState([
        {title: 'Zelda, Breathe fresh Air', rating: 5, body: 'Lorem Ipsum', key : 1 },
        {title: 'Gotta, Ctach them all', rating: 3, body: 'Lorem Ipsum', key : 2 },
        {title: 'Not so Final Fantasy', rating: 3, body: 'Lorem Ipsum', key : 3 }
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Home