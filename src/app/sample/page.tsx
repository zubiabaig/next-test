import Link from "next/link";

export default function Sample(){
  return(
    <main>
      <h3><Link href={'/players'}>Meet the players</Link></h3>
    </main>
  )
}
