import * as d3 from 'd3';
import homedata from '../../components/Home/homedata';
import './style.css';

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

    homedata.forEach(function(d){
        d.month = d3.timeParse("%Y-%m-%d")(d.month);
        d.taskCompleted = +d.taskCompleted;
        d.newEmployees = +d.newEmployees;
        d.supplies = +d.supplies;

    })

    // Add Tooltip
    let tooltip = d3.select("body")
                    .append("div")
                    .attr("class", "tooltip-homechart");
                    
    // Append y grid lines
    function y_gridline(){
        return d3.axisLeft(yScale).ticks(10);
    }


    

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
        .attr("stroke-width", 0)
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

    // Add y grid lines
    svg.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + width + ")")
        .call(y_gridline()
            .tickSize(-width)
            .tickFormat("")
        );

    let g = svg.append("g")
        // .attr("transform", "translate(" ")");

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

    
    // Display the path
    g.append("path")
        .datum(homedata)
        .attr("class", "homechart-line")
        .attr("d", line1)
        .attr("fill", "none")
        .attr("stroke", "#E14ECA")
        .attr("stroke-width", 4);

    g.append("path")
        .datum(homedata)
        .attr("class", "homechart-line")
        .attr("d", line2)
        .attr("fill", "none")
        .attr("stroke", "#1F8EF1")
        .attr("stroke-width", 4);

    g.append("path")
        .datum(homedata)
        .attr("class", "homechart-line")
        .attr("d", line3)
        .attr("fill", "none")
        .attr("stroke", "#DC3545")
        .attr("stroke-width", 4);


    let focus = g.append("g")
        .attr("class", "focus")
        .style("display", "none");


    // Append circles to each line
    g.selectAll(".dot-homechart")
        .data(homedata)
        .enter()
        .append("circle")
        .attr("class", ".dot-homechart")
        .attr("cx", function(d){
            return xScale(d.month);
        })
        .attr("cy", function(d){
            return yScale(d.taskCompleted);
        })
        .attr("r", radius)
        .attr("fill", "#E14ECA");


    g.selectAll(".dot-homechart")
        .data(homedata)
        .enter()
        .append("circle")
        .attr("class", ".dot-homechart")
        .attr("cx", function(d){
            return xScale(d.month);
        })
        .attr("cy", function(d){
            return yScale(d.newEmployees);
        })
        .attr("r", radius)
        .attr("fill", "#1F8EF1");
        

    g.selectAll(".dot-homechart")
        .data(homedata)
        .enter()
        .append("circle")
        .attr("class", ".dot-homechart")
        .attr("cx", function(d){
            return xScale(d.month);
        })
        .attr("cy", function(d){
            return yScale(d.supplies);
        })
        .attr("r", radius)
        .attr("fill", "#DC3545");
        

    g.append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .attr("opacity", 0)
        .on("mouseover", function() { 
            focus.style("display", null);
            
            tooltip.transition()
                .duration(200)
                .style("opacity", 0.9); ; 
        })
        .on("mouseout", function() { 
            focus.style("display", "none");
            tooltip.transition()
                .duration(200)
                .style("opacity", 0); 
        })
        .on("mousemove", mousemove);


    // Vertical line
    focus.append("line")
        .attr("class", "x-hover-line hover-line")
        .attr("y1", -height)
        .attr("y2", height)
        .attr("stroke", "white")
        .attr("stroke-width", 3);

    focus.append("rect")
        .attr("class", "tooltip-homechart")
        .attr("width", 100)
            .attr("height", 50)
            .attr("x", 10)
            .attr("y", -22)
            .attr("rx", 4)
            .attr("ry", 4);
    

    function mousemove() {
        let x0 = xScale.invert(d3.mouse(this)[0]),
            i = bisectDate(homedata, x0, 1),
            d0 = homedata[i - 1],
            d1 = homedata[i],
            d = x0 - d0.month > d1.month - x0 ? d1 : d0;
        focus.attr("transform", "translate(" + xScale(d.month) + "," + yScale(d.taskCompleted) + ")");
        focus.select(".x-hover-line").attr("y2", height);
        // focus.select(".y-hover-line").attr("x2", width + width);
        tooltip.html(d3.timeFormat("%b")(d.month) + "<br />Task Completed: " + d.taskCompleted + "<br />New Employees: " + d.newEmployees + "<br />Supplies: " + d.supplies)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY) + "px");
    }


}

export default draw;
