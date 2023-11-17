import React from "react";
import styles from "./App.module.scss";
import Main from "../containers/Main/Main";
import NavBar from "../containers/NavBar/NavBar";
import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import { getBeerData, addFoodFilter } from "../services/beerdata.service";
import Options from "../components/Options/Options";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { RotatingLines } from "react-loader-spinner";

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [abvFilter, setAbvFilter] = useState(false);
  const [classicFilter, setClassicFilter] = useState(false);
  const [foodFilter, setFoodFilter] = useState(false);

  const { ref, inView } = useInView({ threshold: 1, initialInView: false });

  // results per page from api
  const apiResLimit = 25;

  const {
    data,
    isLoading,
    isError,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["beerData", searchItem, abvFilter, classicFilter],
    queryFn: async ({ pageParam = 1 }) =>
      getBeerData(searchItem, abvFilter, classicFilter, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === apiResLimit ? allPages.length + 1 : undefined;
    },
    select: (currentData) => {
      if (foodFilter) {
        const filteredData = addFoodFilter(currentData, foodFilter);
        // keep original format of data object
        return { ...currentData, pages: filteredData };
      } else {
        // return unfiltered data
        return currentData;
      }
    },
  });

  // infinite scroll - fetching next page
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage]);

  return (
    <div className={styles.appContainer}>
      <Header setSearchItem={setSearchItem} />
      <NavBar
        setAbvFilter={setAbvFilter}
        setClassicFilter={setClassicFilter}
        setFoodFilter={setFoodFilter}
      />
      <Options
        setSearchItem={setSearchItem}
        setAbvFilter={setAbvFilter}
        setClassicFilter={setClassicFilter}
        setFoodFilter={setFoodFilter}
      />
      {isLoading ? (
        <div className={styles.loading}>
          <RotatingLines
            visible={true}
            width="96"
            animationDuration="0.75"
            strokeWidth="5"
            strokeColor="grey"
          />
          <p>Loading</p>
        </div>
      ) : isError ? (
        <h3 className={styles.loading}>Oops, something went wrong!</h3>
      ) : (
        isSuccess && (
          <Main
            beerData={data}
            isFetchingNextPage={isFetchingNextPage}
            ref={ref}
          />
        )
      )}
    </div>
  );
}

export default App;
