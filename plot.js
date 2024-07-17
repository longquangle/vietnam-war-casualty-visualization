
onload = function() {
var $ = function(id) { return document.getElementById(id); };
$('slider').oninput = function() { $('range').innerHTML = this.value; };
$('slider').oninput();
};
    
    // data
var data = {"An Giang":{"1963":1,"1965":3,"1967":2,"1968":18,"1969":39,"1970":18,"1971":22,"1974":1,"1964":0,"1966":0,"1972":0,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":104},"Ba Ria - Vung Tau":{"1963":0,"1965":2,"1967":87,"1968":46,"1969":38,"1970":49,"1971":14,"1974":0,"1964":4,"1966":63,"1972":6,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":309},"Bac Lieu":{"1963":0,"1965":0,"1967":1,"1968":3,"1969":5,"1970":6,"1971":3,"1974":0,"1964":5,"1966":0,"1972":1,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":24},"Ben Tre":{"1963":9,"1965":0,"1967":53,"1968":206,"1969":149,"1970":25,"1971":3,"1974":0,"1964":9,"1966":3,"1972":1,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":458},"Binh Dinh":{"1963":1,"1965":150,"1967":800,"1968":483,"1969":398,"1970":499,"1971":159,"1974":2,"1964":3,"1966":563,"1972":19,"1973":5,"1975":2,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":3084},"Binh Duong":{"1963":1,"1965":136,"1967":699,"1968":969,"1969":788,"1970":236,"1971":48,"1974":0,"1964":2,"1966":364,"1972":11,"1973":1,"1975":1,"1962":3,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":3259},"Binh Phuoc":{"1963":3,"1965":38,"1967":299,"1968":377,"1969":607,"1970":264,"1971":27,"1974":4,"1964":2,"1966":118,"1972":39,"1973":5,"1975":4,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":1787},"Binh Thuan":{"1963":0,"1965":0,"1967":66,"1968":62,"1969":96,"1970":69,"1971":10,"1974":0,"1964":2,"1966":3,"1972":1,"1973":1,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":310},"Ca Mau":{"1963":3,"1965":1,"1967":5,"1968":8,"1969":19,"1970":21,"1971":9,"1974":0,"1964":0,"1966":7,"1972":9,"1973":0,"1975":1,"1962":2,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":85},"Can Tho":{"1963":0,"1965":6,"1967":39,"1968":142,"1969":51,"1970":104,"1971":45,"1974":1,"1964":2,"1966":17,"1972":6,"1973":2,"1975":1,"1962":1,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":417},"Dak Lak":{"1963":0,"1965":4,"1967":4,"1968":14,"1969":2,"1970":3,"1971":3,"1974":0,"1964":0,"1966":1,"1972":1,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":32},"Dak Lak|Dac Lac":{"1963":5,"1965":1,"1967":27,"1968":111,"1969":19,"1970":16,"1971":9,"1974":0,"1964":1,"1966":22,"1972":0,"1973":0,"1975":0,"1962":3,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":214},"Dac Nong":{"1963":4,"1965":138,"1967":752,"1968":764,"1969":701,"1970":481,"1971":161,"1974":8,"1964":13,"1966":223,"1972":2,"1973":2,"1975":3,"1962":7,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":3259},"Dong Nai":{"1963":1,"1965":108,"1967":391,"1968":444,"1969":494,"1970":297,"1971":189,"1974":1,"1964":19,"1966":76,"1972":96,"1973":1,"1975":14,"1962":3,"1959":2,"1956":0,"1961":0,"1957":0,"1960":0,"total":2136},"Dong Thap":{"1963":2,"1965":0,"1967":11,"1968":37,"1969":52,"1970":20,"1971":2,"1974":0,"1964":2,"1966":0,"1972":0,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":126},"Gia Lai":{"1963":2,"1965":350,"1967":320,"1968":244,"1969":335,"1970":133,"1971":39,"1974":2,"1964":1,"1966":320,"1972":35,"1973":0,"1975":1,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":1782},"Hau Giang":{"1963":0,"1965":6,"1967":4,"1968":7,"1969":20,"1970":6,"1971":1,"1974":0,"1964":3,"1966":1,"1972":0,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":48},"Ho Chi Minh City|Ho Chi Minh":{"1963":8,"1965":29,"1967":155,"1968":822,"1969":154,"1970":50,"1971":42,"1974":0,"1964":14,"1966":92,"1972":17,"1973":4,"1975":0,"1962":1,"1959":1,"1956":1,"1961":2,"1957":0,"1960":0,"total":1392},"Khanh Hoa":{"1963":1,"1965":19,"1967":66,"1968":73,"1969":105,"1970":108,"1971":55,"1974":3,"1964":2,"1966":31,"1972":13,"1973":1,"1975":1,"1962":1,"1959":0,"1956":0,"1961":0,"1957":1,"1960":0,"total":480},"Kien Giang":{"1963":0,"1965":5,"1967":9,"1968":33,"1969":43,"1970":31,"1971":32,"1974":0,"1964":1,"1966":13,"1972":4,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":171},"Kon Tum":{"1963":2,"1965":11,"1967":660,"1968":509,"1969":376,"1970":68,"1971":31,"1974":3,"1964":3,"1966":157,"1972":22,"1973":2,"1975":3,"1962":5,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":1852},"Lam Dong":{"1963":0,"1965":3,"1967":45,"1968":68,"1969":47,"1970":47,"1971":21,"1974":0,"1964":0,"1966":3,"1972":2,"1973":0,"1975":0,"1962":8,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":244},"Long An":{"1963":4,"1965":10,"1967":611,"1968":1217,"1969":748,"1970":125,"1971":31,"1974":0,"1964":6,"1966":209,"1972":4,"1973":0,"1975":1,"1962":0,"1959":0,"1956":0,"1961":1,"1957":0,"1960":0,"total":2967},"Ninh Thuan":{"1963":0,"1965":10,"1967":28,"1968":38,"1969":31,"1970":48,"1971":27,"1974":0,"1964":0,"1966":10,"1972":5,"1973":1,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":198},"Phu Yen":{"1963":0,"1965":12,"1967":103,"1968":99,"1969":52,"1970":41,"1971":21,"1974":2,"1964":0,"1966":215,"1972":6,"1973":1,"1975":0,"1962":1,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":553},"Quang Nam":{"1963":16,"1965":238,"1967":1472,"1968":2407,"1969":1917,"1970":806,"1971":243,"1974":11,"1964":8,"1966":874,"1972":60,"1973":8,"1975":7,"1962":4,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":8071},"Quang Ngai":{"1963":8,"1965":75,"1967":669,"1968":549,"1969":847,"1970":515,"1971":161,"1974":2,"1964":2,"1966":307,"1972":3,"1973":2,"1975":2,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":3142},"Quang Tri":{"1963":1,"1965":4,"1967":1869,"1968":3296,"1969":1211,"1970":280,"1971":407,"1974":10,"1964":0,"1966":434,"1972":62,"1973":6,"1975":9,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":7589},"Soc Trang":{"1963":4,"1965":3,"1967":11,"1968":17,"1969":8,"1970":22,"1971":6,"1974":0,"1964":1,"1966":10,"1972":15,"1973":0,"1975":0,"1962":1,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":98},"Tay Ninh":{"1963":2,"1965":9,"1967":514,"1968":729,"1969":1000,"1970":400,"1971":34,"1974":2,"1964":7,"1966":166,"1972":5,"1973":0,"1975":0,"1962":1,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":2869},"Thua Thien - Hue":{"1963":0,"1965":14,"1967":374,"1968":2031,"1969":655,"1970":677,"1971":296,"1974":10,"1964":5,"1966":185,"1972":43,"1973":2,"1975":4,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":3,"total":4299},"Tien Giang":{"1963":8,"1965":3,"1967":167,"1968":434,"1969":266,"1970":39,"1971":13,"1974":1,"1964":12,"1966":6,"1972":17,"1973":0,"1975":0,"1962":1,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":967},"Tra Vinh":{"1963":4,"1965":1,"1967":18,"1968":11,"1969":16,"1970":8,"1971":13,"1974":0,"1964":5,"1966":4,"1972":0,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":80},"Vinh Long":{"1963":1,"1965":0,"1967":16,"1968":63,"1969":42,"1970":20,"1971":28,"1974":0,"1964":1,"1966":4,"1972":2,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"total":177}};
const year_death = [1, 1, 0, 3, 3, 3, 42, 91, 135, 1389, 4501, 10347, 16331, 11331, 5532, 2205, 507, 44, 63, 54];
// The svg

var svg = d3.select("#total"),
width = +svg.attr("width"),
height = +svg.attr("height");

svg.append("text")
.text("Choropleth of Vietnam War Casualties in 1968")
.attr("id", "choropleth_label")
.attr("x", 20)
.attr("y", 20)
.style("font-size", "20px");

// Map and projection
var color = d3.scaleLinear().domain([0, 2407]).range(["#ffffff", "#910000"]);
var path = d3.geoPath();
var projection = d3.geoMercator()
.scale(1550)
.center([109.5445, 15.173])
.translate([width / 2 - 100, height / 2 - 70]);

// Load external data and boot
d3.queue()
.defer(d3.json, "https://raw.githubusercontent.com/kcjpop/vietnam-topojson/main/legacy/adm2/adm2.json")
.await(ready);

function ready(error, topo) {
var geojson = topojson.feature(topo, topo.objects.adm2);

var mouseOver = function(d) {
    d3.selectAll("path")
    .style("opacity", .5);
    d3.select(this)
    .style("opacity", 1)
    .style("stroke", "black");
}
var mouseMove = function(d) {
    var curYear = d3.select("#range").node().innerHTML
    var casualtyNumber = (data[d.properties.name_en]) ? data[d.properties.name_en][curYear] : 'unknown';
    tooltip.attr("x", d3.mouse(this)[0]+15)
    .attr("y", d3.mouse(this)[1]-10)
    .text(`Province: ${d.properties.name_en}. Death: ${casualtyNumber}`);
}
var mouseLeave = function(d) {
    d3.selectAll("path")
    .style("opacity", 1);
    tooltip.text("");
}
svg.append("g")
    .attr("id", "choropleth")
    .selectAll("path")
    .data(geojson.features)
    .enter()
    .append("path")
    .attr("d", d3.geoPath()
    .projection(projection)
    )
    .attr("stroke-width", 0.3)
    .attr("stroke", 'black')
    .attr("fill", function(d) {
    if (d.properties.name_en == "Da Nang City|Da Nang") {
        return color(0);
    }
    if (data[d.properties.name_en] === undefined) {
        return "#777";
    } else if (data[d.properties.name_en] == null) {
        return color(0);
    }
    return color(data[d.properties.name_en]['1968']);
    })
    .on("mouseover", mouseOver)
    .on("mousemove", mouseMove)
    .on("mouseleave", mouseLeave );
var tooltip = svg.append("text")
    .attr("class", "tooltip")
    .style("pointer-events", "none")
    .style("font-size", "17px");
    };
d3.selectAll("input").on("change", function change() {
    var value = this.value;
    d3.select("#choropleth_label").text("Choropleth of Vietnam War Casualties in "  + value);
    d3.selectAll("path").style("fill", function(d) {
    if (d === null) {
        return;
    }
    if (d.properties.name_en == "Da Nang City|Da Nang") {
        if (data["Quang Nam"][value] === undefined) {
        return color(0);
        }
        return color(data["Quang Nam"][value]);
    }
    if (data[d.properties.name_en] === undefined) {
        return "#777";
    } else if (data[d.properties.name_en] === undefined || data[d.properties.name_en][value] === undefined) {
        return color(0);
    }
    return color(data[d.properties.name_en][value]);
    })
});
var svgDefs = svg.append('defs');

var mainGradient = svgDefs.append('linearGradient')
    .attr('id', 'mainGradient').attr('gradientTransform', 'rotate(90)');

mainGradient.append('stop')
    .attr('class', 'stop-left')
    .attr('offset', '0');

mainGradient.append('stop')
    .attr('class', 'stop-right')
    .attr('offset', '1');
    
svg.append('rect')
    .classed('filled', true)
    .attr('x', 605)
    .attr('y', 70)
    .attr('width', 8)
    .attr('height', 260)
    .attr("stroke-width", 1)
    .attr("stroke", 'black');
var legendAxisScale = d3.scaleLinear()
    .domain([2407, 0])
    .range([0, 260]);
svg.append("g")
.attr("transform", `translate(${613.5},${69.5})`)
.call(d3.axisLeft(legendAxisScale).ticks(8).tickSize(12))
.call((g) => g.select(".domain").remove())
.call((g) => g.append("text")
    .attr("x", -55)
    .attr("y", -10)
    .attr("fill", "currentColor")
    .attr("text-anchor", "start")
    .text("Death"));

svg.append("rect")
    .attr("width", 8)
    .attr("height", 8)
    .attr("x", 605).attr("y", 360)
    .attr("fill", "#777")
    .attr("stroke-width", 1)
    .attr("stroke", 'black');
svg.append("text")
    .text("Unknown")
    .attr("x", 535)
    .attr("y", 368);

var yScale = d3.scaleLinear()
    .domain([0, 16331])
    .range([0, 100]);
var xScale = d3.scaleLinear()
    .domain([1956, 1975])
    .range([150, width-150]);
var histogram = d3.histogram()
    .value(d3.range(1956, 1976)) 
    .domain(xScale.domain()) 
    .thresholds(xScale.ticks(20));
var bins = histogram(d3.range(1956, 1976));
var significantDates = {1956.43: "MAAG Vietnam started",
    1964.58: "Gulf of Tonkin Incident", 
    1968.07: "Tet Offensive", 
    1969.07: "Vietnamization began",
    1973.07: "Paris Peace Accord",
    1975.32: "Fall of Saigon"};

svg.append("g")
    .attr("transform", `translate(${0},${height-50})`)
    .call(d3.axisTop(xScale)
    .tickValues(Object.keys(significantDates))
    .tickFormat(d => significantDates[d]).tickSize(115))
    .call((g) => g.select(".domain").remove())
    .selectAll("text")
    .attr("transform", "rotate(-38)translate(78,26)")
    .style("text-anchor", "start");

svg.selectAll("rect")
    .data(d3.range(20))
    .enter()
    .append("rect")
    .attr("x", (d) => {return xScale(bins[d]["x0"]);})
    .attr("y", (d) => {return height - yScale(year_death[d]) - 50})
    .attr("width", (d) => {return xScale(bins[0]["x1"]) - xScale(bins[0]["x0"])})
    .attr("height", (d) => {return yScale(year_death[d]);})
    .attr("id", (d) => {return "histRect" + d})
    .style("stroke", "black")
    .style("fill", "#ffffff")
    .on("mouseover", );

var yAxisScale = d3.scaleLinear()
    .domain([16331, 0])
    .range([0, 100]);
svg.append("g")
    .attr("transform", `translate(${150},${height - 150})`)
    .call(d3.axisLeft(yAxisScale).tickValues([0, 4000, 8000, 12000, 16000]))
    .call((g) => g.append("text")
        .attr("x", -75)
        .attr("y", -10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("Total Death"));

svg.append("g")
    .attr("transform", `translate(${0},${height - 50})`)
    .call(d3.axisBottom(xScale).ticks(15).tickFormat(x =>`${x.toFixed(0)}`))
    .selectAll("text")
    .attr("transform", "rotate(-90)translate(-8,-14)")
    .style("text-anchor", "end");

var listeningRect = svg.append("rect")
    .attr("id", "listeningRect")
    .attr("transform", `translate(${150},${height - 150})`)
    .attr("width", 526.31)
    .attr("height", 100);

var histTooltip = svg.append("text")
    .attr("class", "histTooltip")
    .style("pointer-events", "none")
    .style("font-size", "17px");


listeningRect.on("mousemove", function(event) {
    var xCoordinate = d3.mouse(this)[0];
    var yCoordinate = d3.mouse(this)[1];
    var curYear = 1956 + Math.floor(xCoordinate / 26.3157);
    histTooltip.attr("x", xCoordinate)
    .attr("transform", `translate(${150},${height - 150})`)
    .attr("y", yCoordinate-10)
    .text(`${curYear} Death: ${year_death[curYear - 1956]}`);
})
.on("mouseleave", () => {
    histTooltip.text("");
});
