import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import { CloudinaryPhoto } from "./cloudinary-photo";

export type SearchResult = {
  public_id: string;
  tags: string[];
};
export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };
  console.log("results", results);
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>
        <div className="columns-4 space-y-4 p-5 mx-auto gap-4">
          {results.resources.map((result) => (
            <CloudinaryPhoto
              path="/gallery"
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
