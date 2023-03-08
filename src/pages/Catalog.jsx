import React from "react";

function Catalog({ children }) {
  return (
    <div>
      <article className="flex gap-4 ">
        <aside className="min-w-[200px] bg-purple-700">
          <nav className="">Navigation</nav>
        </aside>
        <main className="">{children}</main>
      </article>
    </div>
  );
}

export default Catalog;
