import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";

const useDebouncedSearch = (searchFunction, debounceValue) => {
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState({});

  const debouncedSearchFunction = useCallback(
    debounce(searchFunction, debounceValue),
    [searchFunction],
  );

  const handleInputChange = async (text) => {
    setInputText(text);
    const data = await debouncedSearchFunction(text);
    setResults(data);
    console.log(text, data);
  };

  return { inputText, handleInputChange, results };
};

export default useDebouncedSearch;
