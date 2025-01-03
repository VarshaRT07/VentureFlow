import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_COUNT } from "@/sanity/lib/queries";

export default async function View({ id }: { id: string }) {
  const views_data = await client.fetch(STARTUP_VIEWS_COUNT, { id });
  console.log(views_data, "views");
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
        <span className="text-black">{views_data.views} Views</span>
      </p>
    </div>
  );
}
