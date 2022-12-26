import React from 'react';
import ReactDOM from 'react-dom';
import { scaleSqrt,max } from 'd3';
import {useWorldAtlas} from './useWorldAtlas';
import {Marks} from './Marks';
import {useCities} from './useCities';
import { scaleSqrt } from 'd3';

const width = 960;
const menuHeight = 79
const height = 500-menuHeight;
const margin = { top: 20, right: 30, bottom: 68, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

const App = () => {
  const worldAtlas = useWorldAtlas();
  const cities = useCities();

  if (!worldAtlas || !cities) {
    return <pre>Loading...</pre>;
  }

  const sizeValue= d=>d.population;
  const maxRadius = 20;
  const sizeScale = scaleSqrt()
    .domain([0,max(cities,sizeValue)])
    .range([0,maxRadius])



  return (
  
  <svg width={width} height={height}>
  
  <Marks
    worldAtlas={worldAtlas} cities={cities} sizeScale={sizeScale} sizeValue={sizeValue}/>
  </svg>
  
  );
    const rootElement = document.getElementById('root');
    ReactDOM.render(<App />, rootElement);
  };
