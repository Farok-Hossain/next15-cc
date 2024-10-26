const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <h1 className="text-center text-2xl">User Profile: {id}</h1>;
};

export default Page;
