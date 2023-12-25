import { Home, profile } from "..";

export default function (Stack) {
    return (
        <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="profile" component={profile} />
        </>
    )
}