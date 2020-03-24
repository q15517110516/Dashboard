import * as d3 from 'd3';
import _ from 'lodash';
import "./style.css";

const draw = (props) => {
    let data = [];
    if(props.data !== null){
        data = _.cloneDeep(props.data.activities);
    }

    d3.select('.linechart > *').remove();
    let margin = {top: 20, right: 20, bottom: 30, left: 40};
    const width = props.width - margin.left - margin.right;
    const height = props.height - margin.top - margin.bottom;
    const radius = 4;

    // Set tooltip to show the data
    let tooltip = d3.select("body")
                    .append("div")
                    .attr("class", "tooltip")
                    .style("opacity", 0);
                    
    
    
    let svg = d3.select('.linechart')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Change time format
    var formatTime = d3.timeFormat("%e %B");
    data.forEach(function(d){
        
        d.date = d3.timeParse("%Y-%m-%d")(d.date);
        d.count = +d.count;
    });
    
    // Add mouseover events 
    function handleMouseOver(d){
        
        d3.select(this)
            .attr("class", "mouseover")
            .attr("r", radius * 2);
            
        tooltip.transition()
            .duration(200)
            .style("opacity", 0.9);        
        tooltip.html(formatTime(d.date) + "<br />" + d.count)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY) + "px");
    }

    // Add mouseout events
    function handleMouseOut(d){
        d3.select(this)
            .attr("class", "mouseout")
            .attr("r", radius);
        tooltip.transition()
                .duration(500)
                .style("opacity", 0)
                
    }

    //Add X axis --> it is a date format
    let xScale = d3.scaleTime()
            .domain(d3.extent(data, function(d){
                return d.date;
            }))
            .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

    //Add Y axis
    var yScale = d3.scaleLinear()
            .domain([0, d3.max(data, function(d){
                return +d.count;
            })])
            .range([height,0]);
    svg.append("g")
        .call(d3.axisLeft(yScale).ticks(5));

    
    //Add the line
    svg.append("path")
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