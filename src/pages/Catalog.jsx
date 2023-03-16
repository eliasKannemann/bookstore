import React from "react";
import Category from "../components/Category";
import categories from "../data/categories.json";

function Catalog() {
  console.log(categories);
  return (
    <div>
      <article className="flex gap-4 ">
        <aside className="min-w-[200px] bg-purple-700 p-4">
          <nav className="">
            {categories.categories.map((category) => (
              <Category key={category.id} {...category} />
            ))}
          </nav>
        </aside>
        <main className="p-4">aca va el amain</main>
      </article>
    </div>
  );
}

export default Catalog;
