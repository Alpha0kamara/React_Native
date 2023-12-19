import { Drawer } from "expo-router/drawer";
export default function Layout() {
    return (
        <Drawer
            screenOptions={{
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#1D9BF0" }
            }}>
                <Drawer.Screen name="(tabs)" options={{title:"Home"}}/>
                <Drawer.Screen name="Settings" options={{title:"Settings"}}/>
        </Drawer>


    )
}