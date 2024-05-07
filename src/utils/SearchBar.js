import React from "react";
import { View, TextInput, Text } from "react-native";
import { Image } from "expo-image";
import { getSearchResults } from "./searchFunctions";
import useDebouncedSearch from "../utils/useDebounceSearch";

import tailwindColors from "../utils/tailwindColors";

import { Fontisto } from "@expo/vector-icons";

const SearchBar = () => {
  const { inputText, handleInputChange, results } = useDebouncedSearch(
    getSearchResults,
    200,
  );

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <View className="bg-accent-300-700 relative z-10 w-full rounded p-2">
      <View className="bg-background-700 max-w-screen absolute left-2 top-1 h-12 w-full flex-row items-center justify-start rounded px-2">
        <Fontisto name="search" size={20} color={tailwindColors.text[900]} />
        <TextInput
          className="px-2"
          onChangeText={handleInputChange}
          value={inputText}
          placeholder="Search for Books . . ."
        />
      </View>
      <View className="bg-accent-200 absolute left-2 top-14 z-10 w-full rounded">
        {results?.items &&
          results?.items.map((book) => (
            <View
              className="flex h-10 flex-row justify-start p-1"
              key={book.id}
            >
              <View className="mr-2 w-5 flex-shrink-0 items-center justify-center">
                <Image
                  className="w-full flex-1"
                  source={book.volumeInfo.imageLinks.smallThumbnail}
                  placeholder={blurhash}
                  contentFit="cover"
                />
              </View>
              <View className="flex flex-grow flex-col">
                <Text
                  numberOfLines={1}
                  className="text-text-900 w-80 truncate font-semibold"
                >
                  {book?.volumeInfo?.title} (
                  {book?.volumeInfo?.publishedDate?.split("-")[0]})
                </Text>
                <Text className="text-text-900 font-thin">
                  {book?.volumeInfo?.authors?.length > 1
                    ? book.volumeInfo.authors.join(", ")
                    : book.volumeInfo.authors}
                </Text>
              </View>
              {book.volumeInfo.averageRating && (
                <View className="flex flex-shrink-0 flex-row items-center gap-x-1">
                  <Fontisto
                    name="star"
                    size={10}
                    color={tailwindColors.primary[500]}
                  />
                  <Text className="text-text-900">
                    {book.volumeInfo.averageRating}
                  </Text>
                </View>
              )}
            </View>
          ))}
      </View>
    </View>
  );
};

export default SearchBar;
