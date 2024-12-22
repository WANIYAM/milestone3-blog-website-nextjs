import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Define an interface for the image source
interface ImageSource {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
}

export const client = createClient({
    apiVersion: "2023-05-03",
    dataset: "production",
    projectId: "zu15ju1c",
    useCdn: false,
});

const builder = imageUrlBuilder(client);

// Update the function to use the new type
export function urlFor(source: ImageSource) {
    return builder.image(source);
}