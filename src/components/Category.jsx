import React from "react";
import { Link } from "react-router-dom";

function Category({ id, name, sublevels }) {
  return (
    <div>
      <Link to={`/${id}/0/desc`}>{name}</Link>
      {sublevels?.map((sublevel) => (
        <Category key={sublevel.id} {...sublevel} />
      ))}
    </div>
  );
}

export default Category;
