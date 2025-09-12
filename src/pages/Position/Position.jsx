import { useEffect, useState } from "react";
import { Button, Flex, Stack, Table, Title, Loader, Text, Pagination, Textarea } from "@mantine/core";
import { modals } from "@mantine/modals";
import { api } from "../../api/api";
import CreatePosition from "./Create";
import UpdatePosition from "./Update";
import DeletePosition from "./Delete";

function Position() {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const currentLang = "ru";
  const getPositions = async (page = 1) => {
    setLoading(true);
    try {
      const { data } = await api.get(`/positions?page=${page}&per_page=10`);
      setPositions(data.data.items);
      setLastPage(data.data.pagination.last_page);
    } catch (error) {
      console.error("Error fetching positions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPositions(page);
  }, [page]);

  const deleteFn = (id) => {
    modals.open({
      children: (
        <DeletePosition
          id={id}
          positions={positions}
          setPositions={setPositions}
        />
      ),
    });
  };

  const createFn = () => {
    modals.open({
      children: <CreatePosition getPositions={getPositions} />,
    });
  };

  const updateFn = (id) => {
    modals.open({
      children: <UpdatePosition id={id} getPositions={getPositions} />,
    });
  };

  return (
    <Stack p={20} w="100%">
      <Flex justify="space-between" align="center">
        <Title>Positions</Title>
        <Button onClick={createFn}>Create</Button>
      </Flex>

      {loading ? (
        <Flex justify="center" align="center" style={{ height: "200px" }}>
          <Loader variant="dots" />
        </Flex>
      ) : (
        <Table
          highlightOnHover
          withTableBorder
          withColumnBorders
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Id</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {positions.map((el) => (
              <Table.Tr key={el.id}>
                <Table.Td>{el.id}</Table.Td>
                <Table.Td>{el.name[currentLang]}</Table.Td>
                <Table.Td
                  style={{
                    maxWidth: "300px",
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    overflowWrap: "anywhere",
                  }}
                >{el.description[currentLang]}</Table.Td>
                <Table.Td>
                  <Flex gap={10}>
                    <Button onClick={() => deleteFn(el.id)}>Delete</Button>
                    <Button onClick={() => updateFn(el.id)}>Update</Button>
                  </Flex>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      )}
      <Flex justify="center" mt="md">
        <Pagination total={lastPage} value={page} onChange={setPage} />
      </Flex>
    </Stack>
  );
}

export default Position;