import * as d3 from 'd3';

const draw = (props) => {
    d3.select(".vis-homechart > *").remove();
    const data = props.data;
    const width = props.width;
    const height = props.height;
    let svg = d3.select('.vis-homechart').append('svg').attr('width', width).attr('height', height);
    
}

export default draw;
