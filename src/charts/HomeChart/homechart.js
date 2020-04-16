import * as d3 from 'd3';
import homedata from '../../components/Home/homedata';

const draw = (props) => {
    d3.select(".vis-homechart > *").remove();
    let margin = {top: 20, right: 20, bottom: 30, left: 40};
    const width = props.width - margin.left - margin.right;
    const height = props.height - margin.top - margin.bottom;
    const radius = 5;

    let svg = d3.select('.vis-homechart')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let bisectDate = d3.bisector(function(d) { return d.month; }).left;
    console.log(bisectDate)

    homedata.forEach(function(d){
        d.month = d3.timeParse("%Y-%m-%d")(d.month);
        d.taskCompleted = +d.taskCompleted;
        d.newEmployees = +d.newEmployees;
        d.supplies = +d.supplies;
        // console.log(d.month)
    })

    // Add Y axis
    let xScale = d3.scaleTime()
            .domain(d3.extent(homedata, function(d){
                return d.month;
            }))
            .range([0, width]);
        
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale)
                .tickFormat(d3.timeFormat("%b"))
            )
        .attr("stroke-width", 1)
        .style("font", "13px times")
        .style("font-family", "sans-serif");

    
    //Add Y axis
    let yScale = d3.scaleLinear()
            .domain([0, 500])
            .range([height,0]);
    svg.append("g")
        .call(d3.axisLeft(yScale)
                .ticks(5)
        )
        .attr("stroke-width", 0)
        .style("font", "14px times");

    // Append the line3
    let line1 = d3.line()
        .x(function(d){
            return xScale(d.month);
        })
        .y(function(d){
            return yScale(d.taskCompleted)
        })
        .curve(d3.curveMonotoneX);
    let line2 = d3.line()
        .x(function(d){
            return xScale(d.month);
        })
        .y(function(d){
            return yScale(d.newEmployees)
        })
        .curve(d3.curveMonotoneX);
    let line3 = d3.line()
        .x(function(d){
            return xScale(d.month);
        })
        .y(function(d){
            return yScale(d.supplies)
        })
        .curve(d3.curveMonotoneX);

    let g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    // Display the path
    g.append("path")
        .datum(homedata)
        .attr("class", "taskCompleted-line")
        .attr("d", line1)
        .attr("fill", "none")
        .attr("stroke", "#E14ECA")
        .attr("stroke-width", 4);

    g.append("path")
        .datum(homedata)
        .attr("class", "newEmployees-line")
        .attr("d", line2)
        .attr("fill", "none")
        .attr("stroke", "#1F8EF1")
        .attr("stroke-width", 4);

    g.append("path")
        .datum(homedata)
        .attr("class", "supplies-line")
        .attr("d", line3)
        .attr("fill", "none")
        .attr("stroke", "#DC3545")
        .attr("stroke-width", 4);

    let focus = g.append("g")
        .attr("class", "focus")
        .style("display", "none");
    
    focus.append("line")
        .attr("class", "x-hover-line hover-line")
        .attr("y1", 0)
        .attr("y2", height);

    focus.append("line")
        .attr("class", "y-hover-line hover-line")
        .attr("x1", width)
        .attr("x2", width);
    
    focus.append("circle")
        .attr("r", 7.5);

    svg.append("rect")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .attr("class", "overlay")
    .attr("width", width)
    .attr("height", height)
    .attr("opacity", 0)
    .on("mouseover", function() { focus.style("display", null); })
    .on("mouseout", function() { focus.style("display", "none"); })
    .on("mousemove", mousemove);

    function mousemove() {
        let x0 = xScale.invert(d3.mouse(this)[0]),
            i = bisectDate(homedata, x0, 1),
            d0 = homedata[i - 1],
            d1 = homedata[i],
            d = x0 - d0.month > d1.month - x0 ? d1 : d0;
        focus.attr("transform", "translate(" + xScale(d.month) + "," + yScale(d.taskCompleted) + ")");
        // focus.select("text").text(function() { return d.value; });
        focus.select(".x-hover-line").attr("y2", height - yScale(d.taskCompleted));
        focus.select(".y-hover-line").attr("x2", width + width);
    }

}

export default draw;
