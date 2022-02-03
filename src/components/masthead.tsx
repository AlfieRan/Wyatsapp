import React from "react";
import Image from 'next/image';
import {Box, Text, Heading, Center, Flex, Link } from "@chakra-ui/react";

const mastHead = () => {
    return (
        <Flex h={"10vh"} w={"100vw"} fontSize={"1vw"} justifyContent={"space-between"} px={5} pt={2} bg={"AltBlue"}>
            <Flex>
                <Text>Special Thanks to:
                    <br/><Link>Wyatt sell</Link> - for letting me use his face
                    <br/><Link>Alistair Smith</Link> - for cofounding Wyatsapp
                </Text>
            </Flex>
            <Flex>
                <Link href={"https://alfieranstead.com"}><br /><br />Created by Alfie Ranstead</Link>
            </Flex>
        </Flex>
    );
};

export default mastHead;
