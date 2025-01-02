"use client";

import { formatDate } from "@/lib/utils";
import { Author, Startup } from "@/sanity/types";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export type StartupCardType = Omit<Startup, "author"> & { author?: Author };
export default function StartupCard({
  key,
  post,
}: {
  key: string;
  post: StartupCardType;
}) {
  return (
    <li
      className="bg-white py-6 px-5 rounded-2xl px-4 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100"
      key={key}
    >
      <div className="flex-between">
        <p className="font-medium text-[16px] text-black py-2 rounded text-gray-500">
          {formatDate(post._createdAt)}
        </p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-secondary" />
          <span className="text-16-medium">{post.views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1 py-2">
          <Link href={`/user/${post.author?._id}`}>
            <p className="text-16-medium line-clamp-1">{post.author?.name}</p>
          </Link>
          <Link href={`/startup/${post._id}`}>
            <h3 className="text-26-semibold line-clamp-1">{post.title}</h3>
          </Link>
        </div>
        <Link href={`/startup/${post.author?.id}`}>
          <Image
            src={post.author?.image}
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${post._id}`}>
        <p className="startup-card_desc">{post.description}</p>
        <Image
          width={200}
          height={200}
          src={post.image!}
          alt={post.author?.name!}
          className="w-full h-[164px] rounded-[10px] object-cover"
        />
      </Link>

      <div className="flex-between mt-4">
        <Link href={`/?query=${post?.category?.toLowerCase()}`}>
          <h3 className="text-16-medium">{post.category}</h3>
        </Link>
        <Button className="" asChild>
          <Link href={`/startup/${post._id}`}> Details</Link>
        </Button>
      </div>
    </li>
  );
}
