import { Metadata } from "next";
import React from "react";
import { IoCalendar } from "react-icons/io5";
import { AiOutlineUser, AiTwotoneClockCircle } from "react-icons/ai";

import slugify from "slugify";
import { PostProps } from "@/assets/props/PropsPost";
import { CategoryProps } from "@/assets/props/Props";
import { PageHero } from "@/components/page/page-hero";
import { find } from "@/config/lib/api";

interface PostsDetailProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PostsDetailProps): Promise<Metadata> {
  const posts = await find("Posts");

  const Data: PostProps = posts?.find(
    (item: PostProps) => item.url == params.slug,
  );
  return {
    title: Data?.title ? Data?.title : "Bài viết",
    description: Data?.description,
  };
}

export async function generateStaticParams() {
  const res: PostProps[] = await find("Posts");
  const resFilter = res.filter((item) => item.id !== "introduction");
  return resFilter.map((post) => ({
    slug: post.url,
  }));
}

const PostDetail = async ({ params }: PostsDetailProps) => {
  const Posts = await find("Posts");
  const CategoryData: CategoryProps[] = await find("PostCategory");

  const Data: PostProps = Posts?.find(
    (item: PostProps) => item.url == params.slug,
  );
  const SimilarData = Posts?.filter((item: any) => item.level0 == Data?.level0);

  return (
    <>
      <PageHero
        eyebrow="Tin tức"
        title={Data?.title}
        description={Data?.description}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Quy trình" },
        ]}
      />
      <div className="bg-bgcontent  py-10 min-h-screen">
        <div className="flex flex-col items-center mt-3 d:w-[1200px] d:mx-auto p:w-auto p:mx-2">
          <div className="bg-white rounded-md w-full">
            <p className="tracking-[2px] text-[20px]  p-4 text-center">
              Đăng ngày{" "}
              <strong className="text-mainYellow">{Data?.date}</strong> bởi{" "}
              {Data?.author ? Data?.author : "Pawlife "}
            </p>
          </div>
          <div className="rounded-md mt-4 text-black">
            <div
              className="ck-content p-5"
              dangerouslySetInnerHTML={
                Data?.content ? { __html: Data?.content } : { __html: "" }
              }
            ></div>
          </div>
          {/* <div className="bg-white rounded-md mt-10 w-full">
            <ContactCard />
          </div> */}
          {/* <div className=" border-t border-dashed border-main w-full mt-5">
            <div className="bg-white rounded-md mt-4">
              <h3 className="text-center font-normal py-5 text-[25px] ">
                <strong>Bài viết liên quan</strong>
              </h3>
              <SimilarBlogs Data={SimilarData} />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
