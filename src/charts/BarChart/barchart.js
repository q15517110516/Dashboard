import * as d3 from 'd3';
import './style.css';
import data from '../../data';

const draw = (props) => {
    let dataset = [];
    d3.select('.barchart > *').remove();
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    const width = props.width - margin.left - margin.right;
    const height = props.height - margin.top - margin.bottom;
    let svg = d3.select('.barchart').append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    //format the data
    data.forEach(function(d){
        dataset.push(d.activities);
    });

    //get the total amount
    var totalPerMonth = [];
    for(let i = 0; i < dataset.length; i++){
        var total = 0;
        var totalCount = {};
        for(let j = 0; j < dataset[i].length; j++){
            total += (dataset[i][j]).count;
            
        }
        totalCount.name = data[i].name;
        totalCount.total = total;
        totalPerMonth.push(totalCount);        
    }

    // Set tooltip to show the data
    let tooltip = d3.select("body")
                    .append("div")
                    .attr("class", "tooltip-bar")
                    .style("opacity", 0.5);

    // Set color gradient
    var linearGradient = svg.append("defs")
        .append("linearGradient")
        .attr("id", "linear-gradient")
        .attr("x1", "0%")
        .attr("y1", "100%")
        .attr("x2", "0%")
        .attr("y2", "0%");
        
    linearGradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#1F8EF1")
        .attr("stop-opacity", 0);
        
    linearGradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#1F8EF1")
        .attr("stop-opacity", 0.4);

    // Add grid lines in x Axis function
    function x_gridlines(){
        return d3.axisBottom(x)
                    .ticks(5);
    }

    // Add grid lines in y Axis function
    function y_gridlines(){
        return d3.axisLeft(y).ticks(5);
    }
    

    // Add mouseover events 
    function handleMouseOver(d){       
        d3.select(this)
            .attr("class", "mouseover")
            .style("fill", "url(#linear-gradient)")
            .style("stroke", "#1F8EF1")
            .style("stroke-width", 4);
            
        tooltip.transition()
            .duration(200)
            .style("opacity", 0.8);        
        tooltip.html(d.name + "<br />" + "Total Performances" + ":" + " " + d.total)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY) + "px");
    }

    // Add mouseout events
    function handleMouseOut(d){
        d3.select(this)
            .attr("class", "mouseout")
            .style("fill", "url(#linear-gradient)");
        tooltip.transition()
                .duration(500)
                .style("opacity", 0)
                
    }

    //Scale the range of the data in the domains
    let x = d3.scaleBand()
            .range([0, width])
            .padding(0.1);

    let y = d3.scaleLinear()
            .range([height,0]);
    x.domain(totalPerMonth.map(function(d){
        return d.name;
    }));
    y.domain([0, d3.max(totalPerMonth, function(d){
        return d.total;
    })])

    // add the X gridlines
    svg.append("g")			
    .attr("class", "grid")
    .attr("transform", "translate(0," + height + ")")
    .call(x_gridlines()
        .tickSize(-height)
        .tickFormat("")      
    );

    // add the Y gridlines
    svg.append("g")			
    .attr("class", "grid")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .call(y_gridlines()
        .tickSize(-width)
        .tickFormat("")
        
    )
    
    //Append the rectangles for the bar chart
    svg.selectAll(".bar")
        .data(totalPerMonth)
        .enter().append("rect")
        .attr("class", "bar")
        .style("fill", "url(#linear-gradient)")
        .attr("x", function(d){
            return x(d.name) + (x.bandwidth())/4;
        })
        .attr("width", (x.bandwidth())/2)
        .attr("y", function(d){
            return height;
        })
        .attr("height", 0)
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut)
        .transition()
        .duration(1000)
        .delay(function(d, i){
            return i*50;
        })
        .attr("y", function(d){
            return y(d.total);
        })
        .attr("height", function(d){
            return height - y(d.total);
        });

    

    //add the x Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .attr("stroke-width", 0)
        .style("font", "14px times")
        .style("font-family", "sans-serif");

    //add the y Axis
    svg.append("g")
        .call(d3.axisLeft(y))
        .attr("stroke-width", 0)
        .style("font", "14px times");
            
    


}

export default draw;