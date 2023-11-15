import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Main.module.scss";
import { ThreeDots } from "react-loader-spinner";

const Main = React.forwardRef(({ beerData, isFetchingNextPage }, ref) => {
  const searchResults = beerData.pages.flat().length;

  return (

      <main className={styles.mainContainer}>
        {beerData.pages.map((page) =>
          page.map((beer, i) => {
            // adding ref to last item result in page
            if (page.length === i + 1) {
              return <Card key={i} beer={beer} ref={ref} />;
            }
            return <Card key={i} beer={beer} />;
          })
        )}
        {searchResults === 0 && (
          <p className={styles.notFound}>Sorry, no beers were found</p>
        )}
        {isFetchingNextPage && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#000"
            ariaLabel="three-dots-loading"
            visible={true}
            wrapperClass={styles.loading}
          />
        )}
      </main>
 
  );
});

export default Main;
