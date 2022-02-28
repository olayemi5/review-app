import { StyleSheet, Text, View } from 'react-native';

export const About = () => {
    return (
        <View style={style.container}>
            <Text>About Screen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 24
    }
})

export default About