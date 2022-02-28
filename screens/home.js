import { StyleSheet, Text, View } from 'react-native';

export const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        marginTop: 10
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18
    }
})

export default Home