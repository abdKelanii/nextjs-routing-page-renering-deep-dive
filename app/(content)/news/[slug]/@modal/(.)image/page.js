"use client";
import React from "react";
import { DUMMY_NEWS } from "../../../../../../dummy-news";
import { useRouter } from "next/navigation";

const Image = ({ params }) => {
  const router = useRouter();
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if (!newsItem) notFound();

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div id="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default Image;
