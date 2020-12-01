import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

const Repos = () => {
  const { repos } = React.useContext(GithubContext);
  // console.log(repos);
  let languages = repos.reduce((total, item) => {
    // console.log(item)
    const { language, stargazers_count } = item;
    if (!language) return total; // removes null values from github info
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count }; // check if language is not on object create the instance
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      }; // keep same instance add value
    }
    return total;
  }, {});
  // console.log(languages);
  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 7);
  // console.log(languages)

  // most stars per language
  const mostPopular = Object.values(languages).sort((a,b)=> {
    return b.stars - a.stars
  }).map((item)=> {
    return {...item, value: item.stars}
  }).slice(0, 5)
  console.log(mostPopular);

  // example chart data
  const chartData = [
    {
      label: "Html",
      value: "290",
    },
    {
      label: "JS",
      value: "260",
    },
    {
      label: "CSS",
      value: "180",
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart data={chartData} /> */}
        <Pie3D data={mostUsed} />
        <div></div>
        <Doughnut2D data={mostPopular} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
