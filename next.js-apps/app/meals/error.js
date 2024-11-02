'use client'
export default function Error({Error}) {
    console.log(Error);
  return (
    <main className="error">
      <h1>An Error occured</h1>
      <p>error occured while fetching meals pls try again later.</p>
    </main>
  );
}
