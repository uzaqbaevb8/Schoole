import { useState } from "react";
import { Loader, Flex, Stack } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Check, X } from "tabler-icons-react";
import FormPosition from "./Form";
import { api } from "../../api/api";

const CreatePosition = ({ getPositions }) => {
    const [loading, setLoading] = useState(false);

    const createFn = async (body) => {
        setLoading(true);
        try {
            await api.post("/positions/create", body);

            notifications.show({
                title: "Success",
                message: "Position created successfully!",
                color: "teal",
                icon: <Check />,
            });

            if (getPositions) {
                await getPositions();
            }
        } catch (error) {
            console.error("Error creating position:", error);

            notifications.show({
                title: "Error",
                message: "Failed to create position!",
                color: "red",
                icon: <X />,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading ? (
                <Flex justify="center" align="center" style={{ height: "200px" }}>
                    <Loader variant="dots" size="lg" />
                </Flex>
            ) : (
                <Stack>
                    <FormPosition
                        submitFn={createFn}
                        initialValues={{
                            name: { kk: "", uz: "", ru: "", en: "" },
                            description: { kk: "", uz: "", ru: "", en: "" },
                        }}
                    />
                </Stack>
            )}
        </div>
    );
};

export default CreatePosition;