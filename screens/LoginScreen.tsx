import { StyleSheet, Text, View } from "react-native";

const LoginPage = () => {
  return (
    <View>
      <Text>Hello world</Text>
    </View>

    /* <Box mt={{ md: "5" }}>
<Center>
  <Box
    mt={{ md: "5" }}
    p="3"
    w={{ base: "100%", lg: "80%" }}
    h={{ md: "fit-content", lg: "fit-content" }}
    display={{ md: "flex" }}
  >
    <Box
      pt="7"
      w={{ base: "90%", md: "50%" }}
      display={{ base: "none", md: "block" }}
      borderTopLeftRadius="80"
      bg="purple.600"
      p="3"
    >
      <Box mt="5" textColor="white" fontSize={{ md: "23px", lg: "25px" }}>
        <Center>
          <Box textAlign="center">
            <h1> FinCash</h1>
            Track your payments
            <br />
            transactions with us and
            <br />
            enjoy other services <br />
            like buying data and airtime
          </Box>
        </Center>
      </Box>
      <Box mt="5">
        <Center>
          <Image
            w="80%"
            h="30vh"
            src="/images/bank image.jpg"
            alt="FinPic"
          />
        </Center>
      </Box>
    </Box>

    <Box p="5" w={{ md: "50%", lg: "40%" }} boxShadow={{ md: "base" }}>
      <Box mb="5" mt="5" textAlign="center">
        <Icon fontSize={{ base: "100px", md: "80px" }} as={FaUser} />
        <Text fontSize="30px">LogIn to your account </Text>
      </Box>

      <Alert />
      <VStack mt="5" spacing="25px">
        <FormControl>
          <Input
            type="email"
            size="lg"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
          />
        </FormControl>

        <FormControl>
          <Input
            type="password"
            size="lg"
            className="form-control"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </FormControl>
        <Button
          bg="purple.600"
          w="100%"
          onClick={(e) => submitHandler(e)}
        >
          Login
          {isLoading && <Spinner />}
        </Button>
      </VStack>
    </Box>
  </Box>
</Center>
</Box> */
  );
};

const styles = StyleSheet.create({});

export default LoginPage;
