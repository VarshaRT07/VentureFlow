import { auth } from "@/lib/auth";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupCardType } from "../../components/StartupCard";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  console.log((await searchParams).query)
  const query = (await searchParams).query;
  const params = {search: query||null}

  const session = await auth()

  console.log(session?.id, 'session')
  console.log(params)
 
  const posts = await client.fetch(STARTUP_QUERY, params);
  

  console.log(posts);
  return (
    <>
      <div className="flex justify-center gap-2 ">
        <section className="w-full">
          <h1 className="items-left px-6 py-3 font-work-sans text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-left my-5">
            Pitch Your Startup <br /> Connect With Entrepreneurs
          </h1>
          <p className="text-[20px] text-primary max-w-2xl text-left break-words !max-w-3xl px-6 font-work-sans">
            Submit Ideas, Vote on Pitches, and Get Noticed on Virtual
            Competitions
          </p>
          <div className="flex items-center justify-center">
            <SearchForm query={query} />
          </div>
        </section>
        <div className="w-full m-4 px-4">
          <div className="flex gap-3 max-w-xl">
            <Image
              src="/model.jpg"
              alt="demo image"
              width={350}
              height={300}
              className="pb-3"
            />
            <p className="bg-primary w-[300px] font-semibold text-[28px] text-black max-w-xl break-words text-left p-5">
            Where Ideas Take Flight and Visions Turn into Ventures.
            </p>
          </div>
          <div className="bg-white pt-8 py-2 px-2 max-w-xl text-3xl font-bold text-black">
            Empower the best ideas <br /> with your vote and feedback.
          </div>
        </div>
      </div>
      <div className="w-full mx-auto mt-20">
        <p className="text-[30px] font-semibold text-slate-300 mx-4">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 text-white m-4">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p> No Startups found</p>
          )}
        </ul>
      </div>
    </>
  );
}
