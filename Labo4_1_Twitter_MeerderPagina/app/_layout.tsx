
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
                <Stack.Screen name="index" options={{ title: "Home", headerStyle:{backgroundColor:"#1D9BF0"} }} ></Stack.Screen>
            </Stack>
        </DataProvider>

    )
}