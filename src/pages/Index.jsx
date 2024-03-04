import { Box, Container, Heading, VStack, HStack, Text, Select, Divider, Button, Input, Textarea, useToast, Image } from "@chakra-ui/react";
import { FaBus, FaClock, FaInfoCircle, FaPhone, FaRegCommentDots } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleContactSubmit = () => {
    toast({
      title: "Message Sent",
      description: "Your message has been sent to the bus company.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const routes = Array.from({ length: 23 }, (_, i) => i + 10); // Routes from 10 to 32

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="xl" mb={2}>
            City Bus Tracker
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Stay updated with real-time bus schedules and alerts
          </Text>
        </Box>

        <Box width="100%">
          <VStack align="stretch" spacing={4}>
            <Heading size="md">
              <FaBus /> Bus Schedules
            </Heading>
            <HStack>
              <Select placeholder="Select a route">
                {routes.map((route) => (
                  <option key={route} value={route}>
                    Route {route}
                  </option>
                ))}
              </Select>
              <Button colorScheme="blue">Go</Button>
            </HStack>
          </VStack>
        </Box>

        <Divider />

        <Box width="100%">
          <VStack align="stretch" spacing={4}>
            <Heading size="md">
              <FaRegCommentDots /> Driver Messages
            </Heading>
            <Textarea placeholder="Message from the bus drivers..." isReadOnly resize="none" value="The bus on Route 12 will be delayed due to heavy traffic." />
          </VStack>
        </Box>

        <Divider />

        <Box width="100%">
          <VStack align="stretch" spacing={4}>
            <Heading size="md">
              <FaPhone /> Contact Bus Company
            </Heading>
            <VStack spacing={2}>
              <Input placeholder="Your name" />
              <Input placeholder="Your email" />
              <Textarea placeholder="Your message" />
              <Button leftIcon={<FaInfoCircle />} colorScheme="green" onClick={handleContactSubmit}>
                Send Message
              </Button>
            </VStack>
          </VStack>
        </Box>

        <Divider />

        <HStack spacing={4} alignItems="center" justifyContent="center">
          <Image src="https://images.unsplash.com/photo-1546604306-52e655c109b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVzfGVufDB8fHx8MTcwOTUzNzIzMHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" borderRadius="full" alt="City Bus" />
          <VStack>
            <Text fontWeight="bold">Need Help?</Text>
            <HStack>
              <FaClock />
              <Text>24/7 Support</Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
