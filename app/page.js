import Link from "next/link";
export default function Page() {
  return (
    <main className="b h-screen bg-black text-yellow-500 pt-6 ">
      <h1 className="flex items-center justify-center">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="flex items-center justify-center">
        <li className="m-6 text-yellow-500" >
            <Link href="week-2" className="block mb-4">Week 2 Assignments</Link>
            <div>
              <ul>
                <li>
                <Link href="week-3" className="block mb-4">Week 3 Assignments</Link>
                </li>
              </ul>
              <ul>
                <li>
                <Link href="week-4" className="block mb-4">Week 4 Assignments</Link>
                </li>
              </ul>
              <ul>
                <li>
                <Link href="week-5" className="block mb-4">Week 5 Assignments</Link>
                </li>
              </ul>
            </div>
        </li>
      </ul>
    </main>
  );
}