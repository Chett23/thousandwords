export const getSearchResults = async (searchText) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=${process.env.EXPO_PUBLIC_GOOGLE_BOOKS_API_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return { searchText, ...response };
};
