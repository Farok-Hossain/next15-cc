import Form from "next/form";

const SearchForm = () => {
  return (
    <Form action="/">
      <input name="query" />
    </Form>
  );
};

export default SearchForm;
