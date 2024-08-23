import algoliasearch from 'algoliasearch';

fetch("https://dashboard.algolia.com/sample_datasets/movie.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((records) => {
    const client = algoliasearch(
      "PH3KTRKQ1I",
      "564f25e29696b5340c77b2a177bdd65b"
    );

    const index = client.initIndex("movies"); // Replace with your actual index name

    return index.saveObjects(records, { autoGenerateObjectIDIfNotExist: true });
  })
  .then(({ objectIDs }) => {
    console.log(`Successfully indexed ${objectIDs.length} records.`);
  })
  .catch((error) => {
    console.error("Error fetching or saving data:", error);
  });
