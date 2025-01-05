import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_COUNT } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from 'next/server';

export default async function View({ id }: { id: string }) {
  const {views:totalViews} = await client.withConfig({useCdn:false}).fetch(STARTUP_VIEWS_COUNT, { id });

  after(async ()=>
    await writeClient.patch(id).set({views:totalViews+1}).commit()
  )

  console.log(totalViews, "views");
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
      <div className="relative">
      <div className="absolute -left-4 top-1">
        <span className="flex size-[11px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-700 opacity-75"></span>
          <span className="relative inline-flex size-[11px] rounded-full bg-lime-700"></span>
        </span>
      </div>
    </div>
      </div>
      <p className="view-text">
        <span className="text-black">{totalViews} Views</span>
      </p>
    </div>
  );
}
