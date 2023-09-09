import cloudinary from "cloudinary";
import { CloudinaryPhoto } from "../gallery/cloudinary-photo";
import { SearchResult } from "../gallery/page";

export default async function FavoritesPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("public_id", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorite Photos</h1>
        </div>
        <div className="columns-4 space-y-4 p-5 mx-auto gap-4">
          {results.resources.map((result) => (
            <CloudinaryPhoto
              path="/favorites"
              key={result.public_id}
              imageData={result}
              width="400"
              height="300"
              alt="this is an example gallery"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
