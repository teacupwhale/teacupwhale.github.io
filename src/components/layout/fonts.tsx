import React from "react";

const crimsonPro = "Crimson+Pro";
const unna = "Unna";
const nunito = "Nunito";
const rubik = "Rubik";
const notoSans = "Noto+Sans";
const amaticSC = "Amatic+SC";

const googleFonts: string[] = [
  crimsonPro,
  unna,
  nunito,
  rubik,
  notoSans,
  amaticSC,
];

export default function Fonts(): React.ReactElement {
  return (
    <>
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css2?family=amaticSC`}
      />
      {googleFonts.map((font: string) => (
        <link
          key={font}
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=${font}`}
        />
      ))}
    </>
  );
}
