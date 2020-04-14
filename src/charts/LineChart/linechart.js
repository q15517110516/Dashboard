import * as d3 from 'd3';
import _ from 'lodash';
import "./style.css";

const draw = (props) => {
    let data = [];
    if(props.data !== null){
        data = _.cloneDeep(props.data.activities);
    }

    d3.select('.vis-linechart > *').remove();
    let margin = {top: 20, right: 20, bottom: 30, left: 40};
    const width = props.width - margin.left - margin.right;
    const height = props.height - margin.top - margin.bottom;
    const radius = 5;

    
    let svg = d3.select('.vis-linechart')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Change time format
    var formatTime = d3.timeFormat("%B %e");
    data.forEach(function(d){
        
        d.date = d3.timeParse("%Y-%m-%d")(d.date);
        d.count = +d.count;
    });

    // Set tooltip to show the data
    let tooltip = d3.select("body")
                    .append("div")
                    .attr("class", "tooltip-line");
                    
    
    // Add mouseover events 
    function handleMouseOver(d){
        
        d3.select(this)
            .attr("class", "mouseover-line")
            .attr("r", radius * 2);
            
        tooltip.transition()
            .duration(200)
            .style("opacity", 0.8);        
        tooltip.html(formatTime(d.date) + "<br />Performance: " + d.count)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY) + "px");
    }

    // Add mouseout events
    function handleMouseOut(d){
        d3.select(this)
            .attr("class", "mouseout-line")
            .attr("r", radius);
        tooltip.transition()
                .duration(200)
                .style("opacity", 0)
                
    }

    // Append y grid lines
    function x_gridline(){
        return d3.axisBottom(xScale).ticks(10);
    }

    //Add X axis --> it is a date format
    let xScale = d3.scaleTime()
            .domain(d3.extent(data, function(d){
                return d.date;
            }))
            .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale))
        .attr("stroke-width", 0)
        .style("font", "13px times")
        .style("font-family", "sans-serif");


    //Add Y axis
    let yScale = d3.scaleLinear()
            .domain([0, 10])
            .range([height,0]);
    svg.append("g")
        .call(d3.axisLeft(yScale)
        .ticks(5))
        .attr("stroke-width", 0)
        .style("font", "14px times");

    // Add y grid lines
    svg.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .call(x_gridline()
            .tickSize(-height)
            .tickFormat("")
        )
            

    //Add the line
    var path = svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", d3.line()
            .x(function(d){
                return xScale(d.date);
            })
            .y(function(d){
                return yScale(d.count);
            })
            .curve(d3.curveMonotoneX)
            );
        
    var totalLength = path.node().getTotalLength();
    path.attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(2000)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);

        
    // Appends a circle for each datapoint
    svg.selectAll(".dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", 'dot')
        .attr("cx", function(d){
            return xScale(d.date);
        })
        .attr("cy", function(d){
            return yScale(d.count);
        })
        .attr("r", radius)
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut);
}
    

export default draw;