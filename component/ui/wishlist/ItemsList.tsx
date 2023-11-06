import { VStack } from "@chakra-ui/react";
import Item from "./Item";
import { useState, useContext } from "react";
import WishlistContext from "@/context/WishlistContext";
import { IGame } from "@/context/WislistContextType";

interface ItemsListProps{
  list: Array<IGame>,
}

export default function ItemsList({list}:ItemsListProps) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <VStack spacing={5}>
      {list.map((game) => (<Item key={game.id} id={game.id} name={game.name} price={game.price}/>))}
    </VStack>
  );
}
