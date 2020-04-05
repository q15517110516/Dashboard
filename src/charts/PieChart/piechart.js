import * as d3 from 'd3';
import './style.css';

const draw = (props) => {
    const data = props.data;
    const gender = ['Male', 'Female', 'Unknown'];
    let count = new Array(3).fill(0);
    data.forEach(d => {
        let genderIndex = gender.indexOf(d.gender);
        if(genderIndex + 1){
            count[genderIndex] += 1;
        }
    });

    const dataset = [
        {label: 'Male', count: count[0]},
        {label: 'Female', count: count[1]},
        {label: 'Unknown', count: count[2]}
    ]
    

    d3.select('.vis-piechart > *').remove();
    const margin = {top: 10, right: 20, bottom: 30, left: 40};
    const width = props.width - margin.left - margin.right;
    const height = props.width - margin.top - margin.bottom;

    let svg = d3.select('.vis-piechart')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', 'translate(' + (width / 2 + margin.left) + ',' + (height / 2 + margin.top) + ')');

    let radius = Math.min(width, height) / 2;

    let color = d3.scaleOrdinal()
                .range(['#1d8cf8', '#2dce89', '#ff8d72']);

    let arc = d3.arc()
                .innerRadius(0)
                .outerRadius(radius);

    let arc2 = d3.arc()
                .innerRadius(0)
                .outerRadius(radius + 10);

    let pie = d3.pie()
                .value(function(d){
                    return d.count;
                })
                .sort(null);

    // Set tooltip to show the data
    let tooltip = d3.select("body")
                    .append("div")
                    .attr("class", "tooltip-pie");

    // Add mouseover events 
    function handleMouseOver(d){       
        d3.select(this)
            .attr("class", "mouseover-pie")
            .attr("d", arc2(d));
            
        tooltip.transition()
            .duration(200)
            .style("opacity", 0.8); 

        tooltip.html(d.data.label + ": " + d.data.count)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY) + "px");
    }

    // Add mouseout events
    function handleMouseOut(d){
        d3.select(this)
            .attr("class", "mouseout-pie")
            .attr("d", arc(d))

        tooltip.transition()
                .duration(200)
                .style("opacity", 0)
                
    }

        
    let path = svg.selectAll('path')
        .data(pie(dataset))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', function(d){
            return color(d.data.label);
        });
        
    path.on('mouseover', handleMouseOver)
        .on('mouseout', handleMouseOut);
    

    let legendG = svg.selectAll(".legend")
                    .data(pie(dataset))
                    .enter()
                    .append('g')
                    .attr("transform", function(d, i){ 
                        return "translate(" + (i * 100 - 140) + "," + 300 + ")";
                    })
                    .attr("class", "legend");

    legendG.append("rect")
            .attr("width", 10)
            .attr("height", 10)
            .attr("fill", function(d, i){
                return color(i);
            });

    legendG.append("text")
            .text(function(d){
                return d.data.label;
            })
            .style("font-size", 20)
            .style("fill", "white")          
            .attr("y", 10)
            .attr("x", 18);
        
    }

export default draw;