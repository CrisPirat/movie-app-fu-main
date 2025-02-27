import Link from "next/link";
import { notFound } from "next/navigation";

import { tmdb } from "@/lib/tmdb/api";
import { WithVideos } from "@/lib/tmdb/api/types";
import { format } from "@/lib/tmdb/utils";
import { Tabs, TabsLink, TabsList } from "@/components/ui/tabs";
import {
  MediaBackdrop,
  MediaDetailView,
  MediaPoster,
  MediaRating,
  MediaTrailerDialog,
} from "@/components/composite/media";

interface DetailLayoutProps {
  params: {
    id: string;
  };
  children: React.ReactNode;
}

export async function generateMetadata({ params }: DetailLayoutProps) {
  params = await params;
  const { title } = await tmdb.movie.detail({
    id: params.id,
  });

  return {
    title,
  };
}

export default async function DetailLayout({ params, children }: DetailLayoutProps) {
  params = await params;

  const {
    id,
    title,
    overview,
    genres,
    vote_average,
    vote_count,
    backdrop_path,
    poster_path,
    release_date,
    tagline,
    videos,
  } = await tmdb.movie.detail<WithVideos>({
    id: params.id,
    append: "videos",
  });

  if (!id) return notFound();

  return (
    <MediaDetailView.Root>
      <MediaDetailView.Backdrop>
        <MediaBackdrop priority image={backdrop_path} alt={title} />
      </MediaDetailView.Backdrop>

      <MediaDetailView.Hero>
        <MediaDetailView.Poster>
          <MediaPoster priority image={poster_path} alt={title} size="w780" />
        </MediaDetailView.Poster>

        <div className="space-y-4">
          <MediaDetailView.Genres>
            <MediaRating average={vote_average} count={vote_count} />

            {genres?.map((genre) => (
              <Link key={genre.id} href={`/movie/discover?with_genres=${genre.id}`}>
                <MediaDetailView.Genre key={genre.id}>{genre.name}</MediaDetailView.Genre>
              </Link>
            ))}
          </MediaDetailView.Genres>

          <MediaDetailView.Title>{title}</MediaDetailView.Title>

          {tagline && <MediaDetailView.Overview>&quot;{tagline}&quot;</MediaDetailView.Overview>}

          <MediaDetailView.Overview
            dangerouslySetInnerHTML={{ __html: format.content(overview) }}
          />

          <MediaTrailerDialog videos={videos?.results} />
        </div>
      </MediaDetailView.Hero>

      <MediaDetailView.Content>
        <Tabs className="mt-12 w-full">
          <div className="max-w-screen scrollbar-hidden -mx-8 overflow-x-scroll px-8 lg:m-0 lg:p-0">
            <TabsList>
              <TabsLink href={`/movie/${id}`}>Overview</TabsLink>
              <TabsLink href={`/movie/${id}/credits`}>Credits</TabsLink>
              <TabsLink href={`/movie/${id}/watch`}>Watch</TabsLink>
              <TabsLink href={`/movie/${id}/reviews`}>Reviews</TabsLink>
              <TabsLink href={`/movie/${id}/images`}>Images</TabsLink>
              <TabsLink href={`/movie/${id}/videos`}>Videos</TabsLink>
              <TabsLink href={`/movie/${id}/recommendations`}>Recommendations</TabsLink>
              <TabsLink href={`/movie/${id}/similar`}>Similar</TabsLink>
            </TabsList>
          </div>
        </Tabs>

        <div className="mt-4">{children}</div>
      </MediaDetailView.Content>
    </MediaDetailView.Root>
  );
}
