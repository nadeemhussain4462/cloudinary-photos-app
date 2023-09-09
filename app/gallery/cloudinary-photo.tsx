"use client";

import { CldImage } from "next-cloudinary";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Heart } from "@/components/icons/heart";
import cloudinary from "cloudinary";
import { useTransition } from "react";
import { SearchResult } from "./page";
import { setAsFavoritesAction } from "./action";
import { FullHeart } from "@/components/icons/full-heart";

export function CloudinaryPhoto(
  props: any & { imageData: SearchResult; path: string }
) {
  const [transition, startTransition] = useTransition();
  const { imageData } = props;
  const isFavorited = imageData.tags.includes("favorite");
  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />

      {isFavorited ? (
        <FullHeart
          onClick={() => {
            startTransition(() => {
              setAsFavoritesAction(imageData.public_id, false, props.path);
              // cloudinary.v2.uploader.add_tag("favorite", [props.publicId]);
            });
          }}
          className="absolute top-2 right-2 hover:text-white text-red-400 cursor-pointer"
        />
      ) : (
        <Heart
          onClick={() => {
            startTransition(() => {
              setAsFavoritesAction(imageData.public_id, true, props.path);
              // cloudinary.v2.uploader.add_tag("favorite", [props.publicId]);
            });
          }}
          className="absolute top-2 right-2 hover:text-red-400 cursor-pointer"
        />
      )}
    </div>
  );
}
