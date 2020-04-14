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

    let parseTime = d3.timeParse("%m");
    let bisectDate = d3.bisector(function(d) { 
        return d.month; 
    }).left;
    
    homedata.forEach(function(d){
        d.month = parseTime(d.month);
        d.taskCompleted = +d.taskCompleted;
        d.newEmployees = +d.newEmployees;
        d.supplies = +d.supplies;
    });

    let x = d3.scaleTime()
        .domain(d3.extent(homedata, function(d) { 
            return d.month; 
        }))
        .range([0, width]);
    let y = d3.scaleLinear()
        .domain([0, 10])
        .range([height, 0]);

    // 3 lines
    var line1 = d3.line()
        .x(function(d) { return x(d.month); })
        .y(function(d) { return y(d.taskCompleted); });
    var line2 = d3.line()
        .x(function(d) { return x(d.month); })
        .y(function(d) { return y(d.newEmployees); });
    var line3 = d3.line()
        .x(function(d) { return x(d.month); })
        .y(function(d) { return y(d.supplies); });


    let g = svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .attr("stroke-width", 0)
        .style("font", "13px times")
        .style("font-family", "sans-serif");

    g.append("g")
        .call(d3.axisLeft(y)
                .ticks(6)
                .tickFormat(function(d) { 
                    return parseInt(d / 1000) + "k"; 
                }))
        .attr("stroke-width", 0)
        .style("font", "14px times");
    
    // Append 3 path
    g.append("path")
        .datum(homedata)
        .attr("class", "homeline1")
        .attr("d", line1);
    g.append("path")
        .datum(homedata)
        .attr("class", "homeline2")
        .attr("d", line2);
    g.append("path")
        .datum(homedata)
        .attr("class", "homeline3")
        .attr("d", line3);

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

    focus.append("text")
        .attr("x", 15)
        .attr("dy", ".31em");

    svg.append("rect")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .on("mouseover", function() { focus.style("display", null); })
        .on("mouseout", function() { focus.style("display", "none"); })
        .on("mousemove", mousemove);

    function mousemove() {
        var x0 = x.invert(d3.mouse(this)[0]),
            i = bisectDate(homedata, x0, 1),
            d0 = homedata[i - 1],
            d1 = homedata[i],
            d = x0 - d0.month > d1.month - x0 ? d1 : d0;
        focus.attr("transform", "translate(" + x(d.year) + "," + y(d.value) + ")");
        focus.select("text").text(function() { return d.value; });
        focus.select(".x-hover-line").attr("y2", height - y(d.value));
        focus.select(".y-hover-line").attr("x2", width + width);
    }
}

export default draw;
