
import { Stack } from "expo-router"
import DataProvider from "../components/DataProvider"
export default function Layout() {
    return (
        <DataProvider>
            <Stack
                screenOptions={{
                    headerTintColor: "white",
                    animation: "slide_from_left"
                }}>
                <Stack.Screen name="(drawer)" options={{ headerShown:false }} ></Stack.Screen>
            </Stack>
        </DataProvider>

    )
}