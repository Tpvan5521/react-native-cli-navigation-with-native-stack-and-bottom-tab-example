import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
    const isAuth = false

    function handleLogout() {
        navigation.navigate('Home')
        // dispatch logout
    }

    function handleLogin() {
        navigation.navigate('Authentication')
        // dispatch logout
    }

    const AuthButton = () => {
        if(isAuth) {
            return (          
                <Button
                    title="Log out"
                    color="#f194ff"
                    onPress={handleLogout}
                />
            )
        }
        return (          
            <Button
                title="Log in"
                color="#f194ff"
                onPress={handleLogin}
            />
        )
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <AuthButton />
        </View>
    );
}