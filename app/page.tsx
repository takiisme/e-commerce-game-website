"use client";
import ProductSection from "../component/OnSaleSection/ProductSection";
import { useContext, useEffect } from "react";
import { Box, Container, Flex, Icon } from "@chakra-ui/react";
import HeroSection from "@/component/HeroSection/HeroSection";
import GameList from "../component/ui/search/GameList";
import { useRouter } from "next/navigation";
import { ChevronRightIcon } from "@chakra-ui/icons";
import WishlistContext, {
  WishlistContextProvider,
} from "../context/WishlistContext";
import { IGame } from "@/context/WislistContextType";
export default function WithSubnavigation() {
  const router = useRouter();
  const buyCtx = useContext(WishlistContext);


  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   const storage: IGame[] = JSON.parse(localStorage.getItem("gameBuy")!);
    //   console.log(storage);
    //   if (storage?.length) {
    //     console.log("Yes, there are some game");
    //     storage.map((game) => buyCtx.addBuy(game));
    //     //favs will be populated with your localStorage once, on component mount.
    //   }
    // }
    // localStorage.removeItem('gameBuy');
  }, []);

  return (
    <>
      <title>Arcelity</title>
      <meta name="description" content="Home"></meta>
      <HeroSection />
      <ProductSection />

      <Container p={0} maxW={{ base: "90%", lg: "75%" }} my={10}>
        <Flex
          my={4}
          _hover={{ color: "blue.500", transform: "translateX(10px)" }}
          cursor={"pointer"}
          fontWeight="800"
          onClick={() => router.push("/games")}
          transition={"all .3s ease"}
          color={"white"}
          align={"left"}
          alignItems={"center"}
        >
          {"Games Collection"} <Icon w={5} h={5} as={ChevronRightIcon} />
        </Flex>
        <Flex>
          {/* <WishlistContextProvider children={<GameList />} /> */}
          <GameList />
        </Flex>
      </Container>
    </>
  );
}
