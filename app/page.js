export default function Home() {
  return (
    <div>
      <h1 className="text-2xl m-5 mb-1">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="ml-7">
        <li>
          <a
            href="/week-2"
            className="hover:text-blue-500 hover:underline">
            Week-2 Assignment
          </a>
        </li>
        <li>
          <a
            href="/week-3"
            className="hover:text-blue-500 hover:underline">
            Week-3 Assignment
          </a>
        </li>
        <li>
          <a
            href="/week-4"
            className="hover:text-blue-500 hover:underline">
            Week-4 Assignment
          </a>
        </li>
        <li>
          <a
            href="/week-5"
            className="hover:text-blue-500 hover:underline">
            Week-5 Assignment
          </a>
        </li>
      </ul>
    </div>
  );
}
