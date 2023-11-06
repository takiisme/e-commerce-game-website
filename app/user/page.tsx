"use client";

import React from "react";
import Avatar from "../../component/ui/user/UserAvatar";
import { Container, Text } from "@chakra-ui/react";
import GameBuyList from "../../component/ui/user/GameBuyList";
import getFromLocalStorage from "../_lib/getFromLocalStorage";
export default function UserPage() {
  return (
    <Container p={0} maxW={"75%"} my={10}>
      <Avatar />
      <GameBuyList />
    </Container>
  );
}
