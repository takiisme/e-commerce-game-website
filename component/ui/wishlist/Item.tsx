import WishlistContext from "@/context/WishlistContext";
import { IGame } from "@/context/WislistContextType";
import {
  Button,
  Card,
  CardHeader,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";

interface ItemPropsType{
  game:IGame,
  isCart: boolean
}

export default function Item({game, isCart}:ItemPropsType) {
  const wishlistCtx = useContext(WishlistContext);

  const removeWishlist = ()=>{
    wishlistCtx.removeFavorite(game.id);
  }

  const removeCart = ()=>{
    wishlistCtx.removeCart(game.id);
  }
  
  const moveToCart = ()=>{
    wishlistCtx.removeFavorite(game.id);
    wishlistCtx.addCart(game);
  }

  const moveToWishlist = ()=>{
    wishlistCtx.removeCart(game.id);
    wishlistCtx.addFavorite(game);
  }

  return (
    <Card
      w={"full"}
      p={5}
      display={"inline-flex"}
      bg={"whiteAlpha.200"}
      textColor={"white"}
    >
      <SimpleGrid columns={{ sm: 1, md: 4, lg: 4 }}>
        <GridItem colSpan={3}>
          <Flex>
            <Image
              src="https://cdn1.epicgames.com/offer/6f43ab8025ad42d18510aa91e9eb688b/EGS_FINALFANTASYVIIREMAKEINTERGRADE_SquareEnix_S2_1200x1600-e147110cf8dd1bc8c96810a5867b3475?h=480&quality=medium&resize=1&w=360"
              alt="FFVII"
              w={100}
              borderRadius={5}
            />
            <CardHeader p={0} pl={5} fontSize={20}>
              {game.name}
            </CardHeader>
          </Flex>
        </GridItem>

        {/* Game price and button area*/}
        <GridItem colSpan={1} mt={{ sm: 5, md: 0 }}>
          <Text pb={5}>${game.price}</Text>
          <Button
            bg={"none"}
            textColor={"whiteAlpha.600"}
            p={0}
            _hover={{ textColor: "white" }}
            pr={{ sm: 5, lg: 0 }}
            onClick={isCart?removeCart:removeWishlist}
          >
            <Text textDecor={"underline"}>Remove</Text>
          </Button>
          <Button
            textColor={"whiteAlpha.600"}
            p={0}
            bg={"none"}
            border={"2px"}
            _hover={{ textColor: "white", bg: "whiteAlpha.400" }}
            w={"full"}
            onClick={isCart ? moveToWishlist : moveToCart}
          >
            <Text textTransform={"uppercase"}>{isCart?"Move to Wishlist" : "Add to cart"}</Text>
          </Button>
        </GridItem>
      </SimpleGrid>
    </Card>
  );
}
