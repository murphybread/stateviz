import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './style.css';  // CSS 파일 import



function Chart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const svg = d3.select(chartRef.current);
      
      // SVG 크기 설정
      const width = 800;
      const height = 600;
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };

      svg.attr('width', width).attr('height', height);

      // 스케일 설정
      const xScale = d3.scaleLinear()
        .domain([-1, 1])
        .range([margin.left, width - margin.right]);

      const yScale = d3.scaleLinear()
        .domain([-1, 1])
        .range([height - margin.bottom, margin.top]);

      // 4분면 배경 추가
      const quadrants = [
        { class: 'quadrant-1', x: width / 2, y: margin.top, width: width / 2 - margin.right, height: height / 2 - margin.top },
        { class: 'quadrant-2', x: margin.left, y: margin.top, width: width / 2 - margin.left, height: height / 2 - margin.top },
        { class: 'quadrant-3', x: margin.left, y: height / 2, width: width / 2 - margin.left, height: height / 2 - margin.bottom },
        { class: 'quadrant-4', x: width / 2, y: height / 2, width: width / 2 - margin.right, height: height / 2 - margin.bottom }
      ];

      svg.selectAll('.quadrant')
        .data(quadrants)
        .enter()
        .append('rect')
        .attr('class', d => d.class)
        .attr('x', d => d.x)
        .attr('y', d => d.y)
        .attr('width', d => d.width)
        .attr('height', d => d.height)
        .attr('fill', (d, i) => ['#3773b3', '#33dd33', '#cc2b2b', '#ddda2a'][i]);

      // 축 생성
      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale);

      // 축 추가
      svg.append('g')
        .attr('transform', `translate(0,${height / 2})`)
        .call(xAxis);

      svg.append('g')
        .attr('transform', `translate(${width / 2},0)`)
        .call(yAxis);

      // 샘플 데이터
      const data = [
        { x: 0.5, y: 0.5, label: 'Node 1' },
        { x: -0.3, y: 0.8, label: 'Node 2' },
        { x: -0.7, y: -0.2, label: 'Node 3' },
        { x: 0.2, y: -0.6, label: 'Node 4' }
      ];

      // 노드 추가
      svg.selectAll('.node')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'node')
        .attr('cx', d => xScale(d.x))
        .attr('cy', d => yScale(d.y))
        .attr('r', 5)
        .attr('fill', 'azure');

      // 라벨 추가
      svg.selectAll('.node-label')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'node-label')
        .attr('x', d => xScale(d.x) + 10)
        .attr('y', d => yScale(d.y) + 5)
        .text(d => d.label)
        .attr('fill', 'black');

      // 4분면 라벨 추가
      const quadrantLabels = [
        { x: width * 3/4, y: height / 4, text: '1사분면' },
        { x: width / 4, y: height / 4, text: '2사분면' },
        { x: width / 4, y: height * 3/4, text: '3사분면' },
        { x: width * 3/4, y: height * 3/4, text: '4사분면' }
      ];

      svg.selectAll('.quadrant-label')
        .data(quadrantLabels)
        .enter()
        .append('text')
        .attr('class', 'quadrant-label')
        .attr('x', d => d.x)
        .attr('y', d => d.y)
        .attr('text-anchor', 'middle')
        .text(d => d.text)
        .attr('fill', '#0d0d0d')
        .attr('font-size', '24px')
        .attr('font-weight', 'bold');
    }
  }, []);

  return <svg ref={chartRef}></svg>;
}

export default Chart;