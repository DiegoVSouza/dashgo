import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";
export default function DashBoard() {
  const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false
  });
  const options = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      foreColor: theme.colors.gray[500]
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600]
      },
      axisTicks: {
        color: theme.colors.gray[600]

      },
      categories: [
        '2022-03-18T00:00:00.000Z',
        '2022-03-19T00:00:00.000Z',
        '2022-03-20T00:00:00.000Z',
        '2022-03-21T00:00:00.000Z',
        '2022-03-22T00:00:00.000Z',
        '2022-03-23T00:00:00.000Z',
        '2022-03-24T00:00:00.000Z',
      ]
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    }
  };
  const series = [
    {
      name: "Series one",
      data: [12, 41, 23, 41, 9, 23, 23],
    },
  ];
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth="1480px" mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={["6", "8"]} bg="gray.800" borderRadius="8px" pb='4'>
            <Text fontSize="lg" mb="4">
              Inscritos da Semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
          <Box p={["6", "8"]} bg="gray.800" borderRadius="8px" pb='4'>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart type="area" height={160} options={options} series={series} />

          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
