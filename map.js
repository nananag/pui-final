var h = 450,
w = 960;
// set-up unit projection and path
var projection = d3.geo.mercator()
    .scale(1)
    .translate([0, 0]);
var path = d3.geo.path()
    .projection(projection);
// set-up svg canvas
var svg = d3.select("#map").append("svg")
    .attr("height", h)
    .attr("width", w);
//https://github.com/johan/world.geo.json
d3.json("countries.json", function(error, data) {
    d3.csv("idCountry.csv", function(error, csv) {
        var world = data.features;
        csv.forEach(function(d, i) {
            world.forEach(function(e, j) {
                if (d.id === e.id) {
                    e.name = d.name
                }
            })
        })
        // calculate bounds, scale and transform
        // see http://stackoverflow.com/questions/14492284/center-a-map-in-d3-given-a-geojson-object
        var b = path.bounds(data),
        s = .95 / Math.max((b[1][0] - b[0][0]) / w, (b[1][1] - b[0][1]) / h),
        t = [(w - s * (b[1][0] + b[0][0])) / 2, (h - s * (b[1][1] + b[0][1])) / 2];
        projection.scale(s)
        .translate(t);
        svg.selectAll("path")
        .data(world).enter()
        .append("path")
        .style("fill", "none")
        .style("stroke", "grey")
        .style("stroke-width", "1px")
        .attr("d", path)
        .on("mouseover", function(d, i) {
            reporter(d);
        });
    })
    function reporter(x) {
        console.log(x)
        d3.select("#report").text(function() {
            return x.name;
        });
    }
});