export interface CloudinaryImages {
  resources: {
    format: string;
    url: string;
    width: number;
    height: number;
    public_id: string;
    asset_id: string;
  }[];
}

export async function loadSlideshowImages(): Promise<
  CloudinaryImages["resources"]
> {
  const resp = await fetch("/api/images");
  const data = (await resp.json()) as CloudinaryImages;
  return data.resources;
}
