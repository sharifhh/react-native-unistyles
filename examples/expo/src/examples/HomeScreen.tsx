import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { DemoGroup, DemoLink } from '../components'
import { DemoNames } from '../common'
import type { NavigationProps } from '../common'

export const HomeScreen = () => {
    const navigation = useNavigation<NavigationProps>()
    const { top } = useSafeAreaInsets()

    return (
        <View
            style={{
                ...styles.container,
                paddingTop: top
            }}
        >
            <View style={styles.titleContainer}>
                <Text style={styles.unicorn}>
                    🦄
                </Text>
                <Text style={styles.header}>
                    Welcome to Unistyles 2.0!
                </Text>
                <Text style={styles.text}>
                    / Select demo /
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.list}>
                <DemoGroup title="Themes">
                    <DemoLink
                        description="No themes"
                        onPress={() => navigation.navigate(DemoNames.NoThemes)}
                    />
                    <DemoLink
                        description="Single theme"
                        onPress={() => navigation.navigate(DemoNames.SingleTheme)}
                    />
                    <DemoLink
                        description="Two themes"
                        onPress={() => navigation.navigate(DemoNames.TwoThemes)}
                    />
                    <DemoLink
                        description="Light/Dark themes"
                        onPress={() => navigation.navigate(DemoNames.LightDarkThemes)}
                    />
                    <DemoLink
                        description="Multiple themes"
                        onPress={() => navigation.navigate(DemoNames.MultipleThemes)}
                    />
                    <DemoLink
                        description="Multiple themes and adaptive modes"
                        onPress={() => navigation.navigate(DemoNames.MultipleThemesAdaptive)}
                    />
                </DemoGroup>
                <DemoGroup title="Breakpoints">
                    <DemoLink
                        description="No breakpoints"
                        onPress={() => navigation.navigate(DemoNames.NoBreakpoints)}
                    />
                    <DemoLink
                        description="With breakpoints"
                        onPress={() => navigation.navigate(DemoNames.WithBreakpoints)}
                    />
                    <DemoLink
                        description="With orientation breakpoints"
                        onPress={() => navigation.navigate(DemoNames.OrientationBreakpoints)}
                    />
                </DemoGroup>
                <DemoGroup title="Media queries">
                    <DemoLink
                        description="Width and Height"
                        onPress={() => navigation.navigate(DemoNames.MediaQueriesWidthHeight)}
                    />
                </DemoGroup>
            </ScrollView>
        </View>
    )
}

// oh, no! StyleSheet.create in unistyles demo!?
// yup, it's just a wrapper for all the demos, I want to demonstrate startup time
// and I don't want to use unistyles for this screen
// by the way, now you can appreciate what unistyles does for you!
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff9ff3'
    },
    titleContainer: {
        alignItems: 'center'
    },
    unicorn: {
        fontSize: 80
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#B53471'
    },
    text: {
        color: '#2f3542',
        fontWeight: 'bold'
    },
    list: {
        marginTop: 50,
        paddingHorizontal: 20
    }
})