import { createContext, useContext, useState } from "react";
import { IGame, WishlistContextType } from "./WislistContextType";

const WishlistContext = createContext<WishlistContextType>({
  favorites: [],
  totalFavorites: 0,
  addFavorite: () => {},
  removeFavorite: () => {},
  carts: [],
  totalCarts: 0,
  addCart: () => {},
  removeCart: () => {},
  filter: "",
  handleFilter: () => {},
});


interface WishlistContextProviderProps {
  children: React.ReactNode;
}

export function WishlistContextProvider({
  children,
}: WishlistContextProviderProps) {
  const [gameFavorites, setGameFavorites] = useState<Array<IGame>>([]);
  const [gameCarts, setGameCarts] = useState<Array<IGame>>([]);
  const [filterText, setFilterText] = useState<string>("");

  const handleFilterContent = (name: string) => {
    // console.log('Set keyword...')
    setFilterText(name);
  };

  function addFavoriteHandler(favoriteGame: IGame | null) {
    if (
      favoriteGame &&
      gameFavorites.every((game) => game.id !== favoriteGame.id)
    ) {
      // console.log(`Adding item...${favoriteGame.id}`);
      setGameFavorites([...gameFavorites, favoriteGame]);
    }
    console.log(gameFavorites);
  }

  function addCartHandler(cartGame: IGame | null) {
    if (
      cartGame &&
      gameCarts.every((game) => game.id !== cartGame.id)
    ) {
      // console.log(`Adding item...${cartGame.id}`);
      setGameCarts([...gameCarts, cartGame]);
    }
    console.log(gameCarts);
  }

  function removeFavoriteHandler(favoriteId: number | null) {
    if (favoriteId) {
      setGameFavorites((prev) => {
        return prev.filter((game) => game.id !== favoriteId);
      });
    }
  }

  function removeCartHandler(cartGameId: number | null) {
    if (cartGameId) {
      setGameCarts((prev) => {
        return prev.filter((game) => game.id !== cartGameId);
      });
    }
  }

  const context: WishlistContextType = {
    favorites: gameFavorites,
    totalFavorites: gameFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    carts: gameCarts,
    totalCarts: gameCarts.length,
    addCart: addCartHandler,
    removeCart: removeCartHandler,
    filter: filterText,
    handleFilter: handleFilterContent,
  };

  return (
    <WishlistContext.Provider value={context}>
      {children}
    </WishlistContext.Provider>
  );
}

// export const useWishlistContext = () : WishlistContextType =>useContext(WishlistContext) as WishlistContextType;

export default WishlistContext;
