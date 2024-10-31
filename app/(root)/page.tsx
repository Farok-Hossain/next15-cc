import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Jack" },
      _id: 1,
      description: "This is a description.",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2024%2F02%2F29%2Fscience%2Fcats-animal-behavior-meow.html&psig=AOvVaw3ah-3mWn12pp2M9fY0zKfV&ust=1730379142144000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLj32uSStokDFQAAAAAdAAAAABAE",
      category: "Robots",
      title: "We Robots",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Enterpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className=" section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
