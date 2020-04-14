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

    let parseTime = d3.timeParse("%m")
        bisectDate = d3.bisector(function(d) { return d.month; }).left;
    
    homedata.forEach(function(d){
        d.month = parseTime(d.month);
        d.taskCompleted = +d.taskCompleted;
        d.newEmployees = +d.newEmployees;
        d.supplies = +d.supplies;
    });

    //Add X axis --> it is a date format
    let xScale = d3.scaleTime()
                    .range([0, width]);
    let yScale = d3.scaleLinear()
                    .range([height,0]);

    let line = d3.line()
                .xScale(function(d){
                    return xScale(d.month);
                })
                .yScale(function(d){
                    return yScale(d.taskCompleted);
                });
    let g = svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

}

export default draw;
