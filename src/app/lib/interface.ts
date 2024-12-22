// import { Key, JSX } from "react";
import { PortableTextBlock } from '@portabletext/types';
// Define a type for the image structure
interface Image {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
}


// Define the simpleBlogCard interface
export interface SimpleBlogCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: Image; // Use the Image type instead of any
}

// Define the fullBlog interface
export interface FullBlog {
    currentSlug: string;
    title: string;
    content: PortableTextBlock[]; // Use Block type for rich text content
    titleImage:Image; // Adjust this type based on your image structure
}