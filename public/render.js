function renderSVG() {
    // ==================================================
    // 1. 기본 설정: SVG 크기 및 마진 정의
    // ==================================================
    const width = 500;
    const height = 500;
    const margin = {top: 20, right: 30, bottom: 80, left: 60}; // 하단 마진 확대

    // ==================================================
    // 2. 상수 정의: X, Y의 최대값 설정
    // ==================================================
    const x_value = 10;
    const y_value = 10;

    // ==================================================
    // 3. 데이터 정의: 예시 데이터
    // ==================================================
    const data = [
        { id: 'A', valueX: 3, valueY: 8 },
        { id: 'B', valueX: 7, valueY: 4 },
        { id: 'C', valueX: -5, valueY: 9 },
        { id: 'D', valueX: 6, valueY: -3 }
    ];

    // ==================================================
    // 4. 축 범위 계산: 데이터 기반으로 X, Y 축 범위 설정
    // ==================================================
    const xExtent = d3.extent(data, d => d.valueX);
    const yExtent = d3.extent(data, d => d.valueY);

    const scaleX = d3.scaleLinear()
        .domain([Math.min(xExtent[0], -x_value), Math.max(xExtent[1], x_value)]) 
        .range([margin.left, width - margin.right]);

    const scaleY = d3.scaleLinear()
        .domain([Math.min(yExtent[0], -y_value), Math.max(yExtent[1], y_value)]) 
        .range([height - margin.bottom, margin.top]);

    // ==================================================
    // 5. 노드 데이터 정의: 노드의 위치 설정
    // ==================================================
    const nodes = [
        { id: 'A', x: 3, y: 8 },
        { id: 'B', x: 7, y: 4 },
        { id: 'C', x: -5, y: 9 },
        { id: 'D', x: 6, y: -3 },
        { id: 'center', x: 0, y: 0 }
    ];

    // ==================================================
    // 6. SVG 컨테이너 생성: 그래프 영역 생성
    // ==================================================
    const svg = d3.select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    // ==================================================
    // 7. 배경 사각형 추가: 각 사분면에 배경 색상 적용
    // ==================================================
    const quadrantBackgrounds = [
        {
            x: scaleX(0),
            y: scaleY(y_value),
            width: scaleX(x_value) - scaleX(0),
            height: scaleY(-y_value) - scaleY(y_value),
            class: 'quadrant-1'
        }, // 1사분면
        {
            x: scaleX(-x_value),
            y: scaleY(y_value),
            width: scaleX(0) - scaleX(-x_value),
            height: scaleY(-y_value) - scaleY(y_value),
            class: 'quadrant-2'
        }, // 2사분면
        {
            x: scaleX(-x_value),
            y: scaleY(0),
            width: scaleX(0) - scaleX(-x_value),
            height: scaleY(-y_value) - scaleY(0),
            class: 'quadrant-3'
        }, // 3사분면
        {
            x: scaleX(0),
            y: scaleY(0),
            width: scaleX(x_value) - scaleX(0),
            height: scaleY(-y_value) - scaleY(0),
            class: 'quadrant-4'
        } // 4사분면
    ];
    
    // 사각형 추가
    svg.selectAll('rect.quadrant-background')
        .data(quadrantBackgrounds)
        .enter()
        .append('rect')
        .attr('class', d => `quadrant-background ${d.class}`) // 각 사각형에 고유한 클래스 적용
        .attr('x', d => d.x)
        .attr('y', d => d.y)
        .attr('width', d => d.width)
        .attr('height', d => d.height);
    

    // ==================================================
    // 8. 축 추가: X축과 Y축을 추가
    // ==================================================
    const xAxis = d3.axisBottom(scaleX).ticks(x_value); 
    const yAxis = d3.axisLeft(scaleY).ticks(y_value); 

    svg.append('g')
        .attr('transform', `translate(0, ${scaleY(0)})`)
        .call(xAxis);

    svg.append('g')
        .attr('transform', `translate(${scaleX(0)}, 0)`)
        .call(yAxis);

    // ==================================================
    // 9. 사분면 레이블 추가: 각 사분면에 레이블 추가
    // ==================================================
    const quadrantLabels = [
        { text: 'Should', x: (x_value * 3) / 4, y: (y_value * 3) / 4 }, 
        { text: 'Did', x: (-x_value * 3) / 4, y: (y_value * 3) / 4 }, 
        { text: 'Can', x: (-x_value * 3) / 4, y: (-y_value * 3) / 4 }, 
        { text: 'Want', x: (x_value * 3) / 4, y: (-y_value * 3) / 4 } 
    ];

    svg.selectAll('text.quadrant-label')
        .data(quadrantLabels)
        .enter()
        .append('text')
        .attr('class', 'quadrant-label')
        .attr('x', d => scaleX(d.x))
        .attr('y', d => scaleY(d.y))
        .attr('text-anchor', 'middle')
        .attr('font-size', '24px') 
        .attr('font-weight', 'bold')
        .text(d => d.text);

    // ==================================================
    // 10. 노드 추가: 그래프에 노드 추가
    // ==================================================
    svg.selectAll('circle')
        .data(nodes)
        .enter()
        .append('circle')
        .attr('cx', d => scaleX(d.x))
        .attr('cy', d => scaleY(d.y))
        .attr('r', 10)

    // ==================================================
    // 11. 노드 텍스트 레이블 추가: 각 노드에 텍스트 레이블 추가
    // ==================================================
    svg.selectAll('text.node-label')
        .data(nodes)
        .enter()
        .append('text')
        .attr('class', 'node-label')
        .attr('x', d => scaleX(d.x))
        .attr('y', d => scaleY(d.y) - 15)
        .attr('text-anchor', 'middle')
        .text(d => d.id)
        .attr('fill', 'black');
}

// 페이지 로드 완료 후 SVG 렌더링
window.addEventListener('load', function() {
    requestAnimationFrame(renderSVG);
});
