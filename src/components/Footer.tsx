import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="flex snap-end bg-black pr-5 pt-5 pl-5 pb-12 text-gray-100">
      <div className="mr-6">
        <h1 className="text-3xl font-bold">Created by</h1>
        <p className="text-lg">Oke Amuwha</p>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Websites</h1>
        <a href="https://okeamuwha.com" rel="noreferrer" target="_blank">
          <p className="text-lg transition hover:text-gray-300">
            okeamuwha.com
          </p>
        </a>
      </div>
    </footer>
  );
}
