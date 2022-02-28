import { StyleSheet, Text, View } from 'react-native';

export const Home = () => {
    return (
        <View style={style.container}>
            <Text>Home Screen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 24
    }
})

export default Home