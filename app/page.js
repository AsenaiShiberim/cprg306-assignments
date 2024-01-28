import Link from "next/link";
export default function Page() {
  return (
    <main className="b h-screen bg-black text-white">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li className="m-6 text-white ">
            <Link href="week-2">Week 2 Assignments</Link>
            <div>
              <ul>
                <li>
                <Link href="week-3">Week 3 Assignments</Link>
                </li>
              </ul>
            </div>
        </li>
      </ul>
    </main>
  );
}