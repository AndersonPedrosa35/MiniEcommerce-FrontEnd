import Image from 'next/image';
import React, { useState } from 'react';

export default function Wishlist() {
  const [favoriteClick, setFavoriteClick] = useState<boolean>(false);
  const [favoriteHover, setFavoriteHover] = useState<boolean>(false);

  function selectFavoriteIcon() {
    if (favoriteClick && favoriteHover) {
      return '/coracaoActiveHover.png'
    };
    if (favoriteClick && !favoriteHover) {
      return '/coracaoActive.png'
    };
    if (favoriteHover) {
      return '/coracaoHover.svg'
    };
    return '/coracaoDefault.png';
  }
  return (
    <Image
      src={ selectFavoriteIcon() }
      alt="Selecionar como Favorito"
      onClick={ () => setFavoriteClick(!favoriteClick) }
      onMouseOver={ () => setFavoriteHover(true)}
      onMouseOut={ () => setFavoriteHover(false)}
      className="absolute right-2 z-10"
      width={30}
      height={30}
    />
  )
}
