import { Login, SignUp } from "..";

export default function (Stack) {
    return (
        <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </>
    )
}