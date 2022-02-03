import React from "react";
import Image from 'next/image';
import {Box, Text, Heading, Center, Flex } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Masthead from "../components/masthead";

const Home = () => {
    return (
        <Box h={"100vh"} w={"100vw"}>
            <Navbar />
        <Center h={"80vh"} w={"100vw"} fontSize={"4vw"}>
            <Flex>
                <Box
                    height={'400px'}
                    width={'400px'}
                    rounded={'lg'}
                    overflow={'hidden'}
                    pos={'relative'}
                >
                    <Image
                        src={'/assets/wyatt.png'}
                        layout={'fill'}
                        objectFit={'contain'}
                        quality={3}
                    />
                </Box>
                <Text textAlign={"center"} m={3}> Hello this is Wyatt's app <br /> My name is wyatt and this is my face <br /> {"<--------"}</Text>
            </Flex>
        </Center>
            <Masthead />
        </Box>
    );
};

export default Home;
