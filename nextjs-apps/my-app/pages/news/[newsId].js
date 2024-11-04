
import { useRouter } from "next/router";
export default function HomePage() {
  const router=useRouter()
console.log(router.query);
  return <h1>the else page</h1>;
}
