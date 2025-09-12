import { useForm } from "@mantine/form";
import { Button, TextInput, Textarea, Stack, Flex } from "@mantine/core";
import { modals } from "@mantine/modals";

const FormPosition = ({ submitFn, initialValues }) => {
    const form = useForm({
        initialValues,
    });

    const handleSubmit = async (values) => {
        await submitFn(values);
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
                <TextInput
                    label="Karakalpak (kk)"
                    placeholder="Your name"
                    {...form.getInputProps("name.kk")}
                />
                <TextInput
                    label="Uzbek (uz)"
                    placeholder="Your name"
                    {...form.getInputProps("name.uz")}
                />
                <TextInput
                    label="Russian (ru)"
                    placeholder="Your name"
                    {...form.getInputProps("name.ru")}
                />
                <TextInput
                    label="English (en)"
                    placeholder="Your name"
                    {...form.getInputProps("name.en")}
                />

                <Textarea
                    label="Karakalpak (kk)"
                    placeholder="Description"
                    minRows={2}
                    {...form.getInputProps("description.kk")}
                />
                <Textarea
                    label="Uzbek (uz)"
                    placeholder="Description"
                    minRows={2}
                    {...form.getInputProps("description.uz")}
                />
                <Textarea
                    label="Russian (ru)"
                    placeholder="Description"
                    minRows={2}
                    {...form.getInputProps("description.ru")}
                />
                <Textarea
                    label="English (en)"
                    placeholder="Description"
                    minRows={2}
                    {...form.getInputProps("description.en")}
                />

                <Flex justify="end" gap={10}>
                    <Button onClick={() => modals.closeAll()}>Отмена</Button>
                    <Button type="submit">Сохранить</Button>
                </Flex>
            </Stack>
        </form>
    );
};

export default FormPosition;