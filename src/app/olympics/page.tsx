export default async function Olympics(){
  const response = fetch("http://127.0.0.1:3000/api/olympics")
  const results = (await response).json()
  const data = await results

  return(
    <main>
      <h1>The olympics</h1>

      {data ? data.map((result: any)=>{
        return(
          <div key={result.id}>
            <h2>{result.name}</h2>
            <p> {result.about} </p>
            <p> {result.rules} </p>
          </div>

        )
      }): null}
    </main>
  )
}
