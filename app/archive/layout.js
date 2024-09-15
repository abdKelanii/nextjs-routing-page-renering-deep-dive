import React from "react";

export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1>News Archive Page</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
