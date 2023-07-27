import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Spinner,
  Center,
  Text,
  Card,
  Box,
  Divider,
  Flex,
} from "@prismane/core";
import { CursorClick, Hash } from "@phosphor-icons/react";
import { adviceUrl } from "../../../src/urls/url";

const RandomAdvice = () => {
  const [adv, setAdv] = useState("");
  const [loading, setLoading] = useState(true);

  const searchAdvice = async () => {
    const response = await axios.get(adviceUrl, { cache: "no-cache" });
    const adv = await response.data.slip;

    setAdv(adv);
    setLoading(false);
  };

  useEffect(() => {
    searchAdvice();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {adv ? (
        <Card bg="#f1edf7">
          <Center w="100%" h="40rem" direction="column">
            <Flex align="center" w="100%" my="50px">
              <Divider variant="dashed" />
              <Text as="h1" cl="#0d1245">
                Advice Generator
              </Text>
              <Divider variant="dashed" />
            </Flex>    
            <Box mb="10px">  
              <Text fw="bold" as="h3" cl="#242e9c">
                <Hash size={30}/> {adv.id}
             </Text>   
            </Box>
            <Text as="h2" cl="#0d1245" fw="bold">
              {adv.advice}
            </Text>
            <Button
              my="50px"
              br="full"
              size="base"
              bg="#242e9c"
              icon={<CursorClick />}
              variant="primary"
              onClick={searchAdvice}
            >
              RANDOM ADVICE
            </Button>
          </Center>
        </Card> 
      ) : null}
    </>
  );
};

export default RandomAdvice;
