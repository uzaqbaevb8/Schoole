
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Button,
    Card,
    Container,
    Stack,
    TextInput,
    PasswordInput,
    Text,
    Loader,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Check, X } from "tabler-icons-react";
import { AuthContext } from "../context/auth-context";

const Login = () => {
    const [phone, setPhone] = useState("998941570630");
    const [password, setPassword] = useState("password");
    const [loading, setLoading] = useState(false);

    const { login } = useContext(AuthContext);
    const nav = useNavigate();

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const success = await login({ phone, password });
            if (success) {
                notifications.show({
                    title: "Success",
                    message: "Login successful",
                    color: "teal",
                    icon: <Check />,
                });
                nav("/admin");
            } else {
                notifications.show({
                    title: "Error",
                    message: "Login failed! Please check your credentials.",
                    color: "red",
                    icon: <X />,
                });
            }
        } catch (error) {
            console.error(error);
            notifications.show({
                title: "Error",
                message: "Unexpected error occurred",
                color: "red",
                icon: <X />,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container size={400}>
            <Card w={300} m="50% auto" p={15} shadow="sm">
                <Stack>
                    <Text ta="center" fw={500} size="lg">
                        Login Page
                    </Text>
                    <TextInput
                        type="number"
                        label="Phone"
                        placeholder="Your phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <PasswordInput
                        label="Password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button fullWidth onClick={handleSubmit} disabled={loading}>
                        {loading ? <Loader size="xs" /> : "Login"}
                    </Button>
                    <Link to="/">Back Home</Link>
                </Stack>
            </Card>
        </Container>
    );
};

export default Login;