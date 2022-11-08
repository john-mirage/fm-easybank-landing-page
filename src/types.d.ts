namespace AppData {
  import { ReactNode } from "react";

  interface Feature {
    Icon: ReactNode;
    name: string;
    description: string;
  }

  interface Article {
    image: string;
    author: string;
    name: string;
    excerpt: string;
  }
}
