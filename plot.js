
// onload = function() {
// var $ = function(id) { return document.getElementById(id); };
// $('slider').oninput = function() { $('range').innerHTML = this.value; };
// $('slider').oninput();
// };
    
    // data
// var data = {"An Giang":{"1963":1,"1965":3,"1967":2,"1968":18,"1969":39,"1970":18,"1971":22,"1974":1,"1964":0,"1966":0,"1972":0,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":104,"Average Age":26.08,"Average Service Length":204.17},"Ba Ria - Vung Tau":{"1963":0,"1965":2,"1967":87,"1968":46,"1969":38,"1970":49,"1971":14,"1974":0,"1964":4,"1966":63,"1972":6,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":309,"Average Age":23.78,"Average Service Length":186.53},"Bac Lieu":{"1963":0,"1965":0,"1967":1,"1968":3,"1969":5,"1970":6,"1971":3,"1974":0,"1964":5,"1966":0,"1972":1,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":24,"Average Age":27.67,"Average Service Length":263.11},"Ben Tre":{"1963":9,"1965":0,"1967":53,"1968":206,"1969":149,"1970":25,"1971":3,"1974":0,"1964":9,"1966":3,"1972":1,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":458,"Average Age":22.47,"Average Service Length":142.7},"Binh Dinh":{"1963":1,"1965":150,"1967":800,"1968":483,"1969":398,"1970":499,"1971":159,"1974":2,"1964":3,"1966":563,"1972":19,"1973":5,"1975":2,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":3084,"Average Age":22.78,"Average Service Length":172.85},"Binh Duong":{"1963":1,"1965":136,"1967":699,"1968":969,"1969":788,"1970":236,"1971":48,"1974":0,"1964":2,"1966":364,"1972":11,"1973":1,"1975":1,"1962":3,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":3259,"Average Age":22.4,"Average Service Length":151.04},"Binh Phuoc":{"1963":3,"1965":38,"1967":299,"1968":377,"1969":607,"1970":264,"1971":27,"1974":4,"1964":2,"1966":118,"1972":39,"1973":5,"1975":4,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":1787,"Average Age":22.77,"Average Service Length":169.47},"Binh Thuan":{"1963":0,"1965":0,"1967":66,"1968":62,"1969":96,"1970":69,"1971":10,"1974":0,"1964":2,"1966":3,"1972":1,"1973":1,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":310,"Average Age":21.96,"Average Service Length":184.46},"Ca Mau":{"1963":3,"1965":1,"1967":5,"1968":8,"1969":19,"1970":21,"1971":9,"1974":0,"1964":0,"1966":7,"1972":9,"1973":0,"1975":1,"1962":2,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":85,"Average Age":25.59,"Average Service Length":191.49},"Can Tho":{"1963":0,"1965":6,"1967":39,"1968":142,"1969":51,"1970":104,"1971":45,"1974":1,"1964":2,"1966":17,"1972":6,"1973":2,"1975":1,"1962":1,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":417,"Average Age":23.84,"Average Service Length":192.0},"Dac Nong":{"1963":4,"1965":138,"1967":752,"1968":764,"1969":701,"1970":481,"1971":161,"1974":8,"1964":13,"1966":223,"1972":2,"1973":2,"1975":3,"1962":7,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":3259,"Average Age":22.09,"Average Service Length":165.64},"Dak Lak":{"1963":0,"1965":4,"1967":4,"1968":14,"1969":2,"1970":3,"1971":3,"1974":0,"1964":0,"1966":1,"1972":1,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":32,"Average Age":25.56,"Average Service Length":176.32},"Dak Lak|Dac Lac":{"1963":5,"1965":1,"1967":27,"1968":111,"1969":19,"1970":16,"1971":9,"1974":0,"1964":1,"1966":22,"1972":0,"1973":0,"1975":0,"1962":3,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":214,"Average Age":24.66,"Average Service Length":172.71},"Dong Nai":{"1963":1,"1965":108,"1967":391,"1968":444,"1969":494,"1970":297,"1971":189,"1974":1,"1964":19,"1966":76,"1972":96,"1973":1,"1975":14,"1962":3,"1959":2,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":2136,"Average Age":23.43,"Average Service Length":178.57},"Dong Thap":{"1963":2,"1965":0,"1967":11,"1968":37,"1969":52,"1970":20,"1971":2,"1974":0,"1964":2,"1966":0,"1972":0,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":126,"Average Age":25.08,"Average Service Length":155.19},"Gia Lai":{"1963":2,"1965":350,"1967":320,"1968":244,"1969":335,"1970":133,"1971":39,"1974":2,"1964":1,"1966":320,"1972":35,"1973":0,"1975":1,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":1782,"Average Age":23.6,"Average Service Length":162.89},"Hau Giang":{"1963":0,"1965":6,"1967":4,"1968":7,"1969":20,"1970":6,"1971":1,"1974":0,"1964":3,"1966":1,"1972":0,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":48,"Average Age":25.0,"Average Service Length":201.24},"Ho Chi Minh City|Ho Chi Minh":{"1963":8,"1965":29,"1967":155,"1968":822,"1969":154,"1970":50,"1971":42,"1974":0,"1964":14,"1966":92,"1972":17,"1973":4,"1975":0,"1962":1,"1959":1,"1956":1,"1961":2,"1957":0,"1960":0,"Total Death":1392,"Average Age":24.01,"Average Service Length":165.68},"Khanh Hoa":{"1963":1,"1965":19,"1967":66,"1968":73,"1969":105,"1970":108,"1971":55,"1974":3,"1964":2,"1966":31,"1972":13,"1973":1,"1975":1,"1962":1,"1959":0,"1956":0,"1961":0,"1957":1,"1960":0,"Total Death":480,"Average Age":26.19,"Average Service Length":227.05},"Kien Giang":{"1963":0,"1965":5,"1967":9,"1968":33,"1969":43,"1970":31,"1971":32,"1974":0,"1964":1,"1966":13,"1972":4,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":171,"Average Age":25.3,"Average Service Length":219.94},"Kon Tum":{"1963":2,"1965":11,"1967":660,"1968":509,"1969":376,"1970":68,"1971":31,"1974":3,"1964":3,"1966":157,"1972":22,"1973":2,"1975":3,"1962":5,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":1852,"Average Age":22.48,"Average Service Length":173.42},"Lam Dong":{"1963":0,"1965":3,"1967":45,"1968":68,"1969":47,"1970":47,"1971":21,"1974":0,"1964":0,"1966":3,"1972":2,"1973":0,"1975":0,"1962":8,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":244,"Average Age":23.84,"Average Service Length":205.26},"Long An":{"1963":4,"1965":10,"1967":611,"1968":1217,"1969":748,"1970":125,"1971":31,"1974":0,"1964":6,"1966":209,"1972":4,"1973":0,"1975":1,"1962":0,"1959":0,"1956":0,"1961":1,"1957":0,"1960":0,"Total Death":2967,"Average Age":22.26,"Average Service Length":150.61},"Ninh Thuan":{"1963":0,"1965":10,"1967":28,"1968":38,"1969":31,"1970":48,"1971":27,"1974":0,"1964":0,"1966":10,"1972":5,"1973":1,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":198,"Average Age":26.49,"Average Service Length":208.45},"Phu Yen":{"1963":0,"1965":12,"1967":103,"1968":99,"1969":52,"1970":41,"1971":21,"1974":2,"1964":0,"1966":215,"1972":6,"1973":1,"1975":0,"1962":1,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":553,"Average Age":23.15,"Average Service Length":184.98},"Quang Nam":{"1963":16,"1965":238,"1967":1472,"1968":2407,"1969":1917,"1970":806,"1971":243,"1974":11,"1964":8,"1966":874,"1972":60,"1973":8,"1975":7,"1962":4,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":8071,"Average Age":21.38,"Average Service Length":182.51},"Quang Ngai":{"1963":8,"1965":75,"1967":669,"1968":549,"1969":847,"1970":515,"1971":161,"1974":2,"1964":2,"1966":307,"1972":3,"1973":2,"1975":2,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":3142,"Average Age":21.9,"Average Service Length":161.45},"Quang Tri":{"1963":1,"1965":4,"1967":1869,"1968":3296,"1969":1211,"1970":280,"1971":407,"1974":10,"1964":0,"1966":434,"1972":62,"1973":6,"1975":9,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":7589,"Average Age":21.25,"Average Service Length":158.96},"Soc Trang":{"1963":4,"1965":3,"1967":11,"1968":17,"1969":8,"1970":22,"1971":6,"1974":0,"1964":1,"1966":10,"1972":15,"1973":0,"1975":0,"1962":1,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":98,"Average Age":25.66,"Average Service Length":219.62},"Tay Ninh":{"1963":2,"1965":9,"1967":514,"1968":729,"1969":1000,"1970":400,"1971":34,"1974":2,"1964":7,"1966":166,"1972":5,"1973":0,"1975":0,"1962":1,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":2869,"Average Age":22.12,"Average Service Length":159.55},"Thua Thien - Hue":{"1963":0,"1965":14,"1967":374,"1968":2031,"1969":655,"1970":677,"1971":296,"1974":10,"1964":5,"1966":185,"1972":43,"1973":2,"1975":4,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":3,"Total Death":4299,"Average Age":21.89,"Average Service Length":160.34},"Tien Giang":{"1963":8,"1965":3,"1967":167,"1968":434,"1969":266,"1970":39,"1971":13,"1974":1,"1964":12,"1966":6,"1972":17,"1973":0,"1975":0,"1962":1,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":967,"Average Age":22.61,"Average Service Length":157.29},"Tra Vinh":{"1963":4,"1965":1,"1967":18,"1968":11,"1969":16,"1970":8,"1971":13,"1974":0,"1964":5,"1966":4,"1972":0,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":80,"Average Age":26.06,"Average Service Length":180.12},"Vinh Long":{"1963":1,"1965":0,"1967":16,"1968":63,"1969":42,"1970":20,"1971":28,"1974":0,"1964":1,"1966":4,"1972":2,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":177,"Average Age":24.08,"Average Service Length":203.43}}
var data = {"An Giang":{"1963":1,"1965":3,"1967":2,"1968":18,"1969":39,"1970":18,"1971":22,"1974":1,"1964":0,"1966":0,"1972":0,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":104,"Average Age":26.08,"Average Service Length":204.17,"area":3536},
    "Ba Ria - Vung Tau":{"1963":0,"1965":2,"1967":87,"1968":46,"1969":38,"1970":49,"1971":14,"1974":0,"1964":4,"1966":63,"1972":6,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":309,"Average Age":23.78,"Average Service Length":186.53,"area":1980},
    "Bac Lieu":{"1963":0,"1965":0,"1967":1,"1968":3,"1969":5,"1970":6,"1971":3,"1974":0,"1964":5,"1966":0,"1972":1,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":24,"Average Age":27.67,"Average Service Length":263.11,"area":2669},
    "Ben Tre":{"1963":9,"1965":0,"1967":53,"1968":206,"1969":149,"1970":25,"1971":3,"1974":0,"1964":9,"1966":3,"1972":1,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":458,"Average Age":22.47,"Average Service Length":142.7,"area":2394},
    "Binh Dinh":{"1963":1,"1965":150,"1967":800,"1968":483,"1969":398,"1970":499,"1971":159,"1974":2,"1964":3,"1966":563,"1972":19,"1973":5,"1975":2,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":3084,"Average Age":22.78,"Average Service Length":172.85,"area":6066},
    "Binh Duong":{"1963":1,"1965":136,"1967":699,"1968":969,"1969":788,"1970":236,"1971":48,"1974":0,"1964":2,"1966":364,"1972":11,"1973":1,"1975":1,"1962":3,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":3259,"Average Age":22.4,"Average Service Length":151.04,"area":2694},
    "Binh Phuoc":{"1963":3,"1965":38,"1967":299,"1968":377,"1969":607,"1970":264,"1971":27,"1974":4,"1964":2,"1966":118,"1972":39,"1973":5,"1975":4,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":1787,"Average Age":22.77,"Average Service Length":169.47,"area":6876},
    "Binh Thuan":{"1963":0,"1965":0,"1967":66,"1968":62,"1969":96,"1970":69,"1971":10,"1974":0,"1964":2,"1966":3,"1972":1,"1973":1,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":310,"Average Age":21.96,"Average Service Length":184.46,"area":7943},
    "Ca Mau":{"1963":3,"1965":1,"1967":5,"1968":8,"1969":19,"1970":21,"1971":9,"1974":0,"1964":0,"1966":7,"1972":9,"1973":0,"1975":1,"1962":2,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":85,"Average Age":25.59,"Average Service Length":191.49,"area":5221},
    "Can Tho":{"1963":0,"1965":6,"1967":39,"1968":142,"1969":51,"1970":104,"1971":45,"1974":1,"1964":2,"1966":17,"1972":6,"1973":2,"1975":1,"1962":1,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":417,"Average Age":23.84,"Average Service Length":192.0,"area":1438},
    "Dac Nong":{"1963":4,"1965":138,"1967":752,"1968":764,"1969":701,"1970":481,"1971":161,"1974":8,"1964":13,"1966":223,"1972":2,"1973":2,"1975":3,"1962":7,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":3259,"Average Age":22.09,"Average Service Length":165.64,"area":6509},
    "Dak Lak":{"1963":0,"1965":4,"1967":4,"1968":14,"1969":2,"1970":3,"1971":3,"1974":0,"1964":0,"1966":1,"1972":1,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":32,"Average Age":25.56,"Average Service Length":176.32,"area":13030},
    "Dak Lak|Dac Lac":{"1963":5,"1965":1,"1967":27,"1968":111,"1969":19,"1970":16,"1971":9,"1974":0,"1964":1,"1966":22,"1972":0,"1973":0,"1975":0,"1962":3,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":214,"Average Age":24.66,"Average Service Length":172.71,"area":13030},
    "Dong Nai":{"1963":1,"1965":108,"1967":391,"1968":444,"1969":494,"1970":297,"1971":189,"1974":1,"1964":19,"1966":76,"1972":96,"1973":1,"1975":14,"1962":3,"1959":2,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":2136,"Average Age":23.43,"Average Service Length":178.57,"area":5863},
    "Dong Thap":{"1963":2,"1965":0,"1967":11,"1968":37,"1969":52,"1970":20,"1971":2,"1974":0,"1964":2,"1966":0,"1972":0,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":126,"Average Age":25.08,"Average Service Length":155.19,"area":3383},
    "Gia Lai":{"1963":2,"1965":350,"1967":320,"1968":244,"1969":335,"1970":133,"1971":39,"1974":2,"1964":1,"1966":320,"1972":35,"1973":0,"1975":1,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":1782,"Average Age":23.6,"Average Service Length":162.89,"area":15510},
    "Hau Giang":{"1963":0,"1965":6,"1967":4,"1968":7,"1969":20,"1970":6,"1971":1,"1974":0,"1964":3,"1966":1,"1972":0,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":48,"Average Age":25.0,"Average Service Length":201.24,"area":1621},
    "Ho Chi Minh City|Ho Chi Minh":{"1963":8,"1965":29,"1967":155,"1968":822,"1969":154,"1970":50,"1971":42,"1974":0,"1964":14,"1966":92,"1972":17,"1973":4,"1975":0,"1962":1,"1959":1,"1956":1,"1961":2,"1957":0,"1960":0,"Total Death":1392,"Average Age":24.01,"Average Service Length":165.68,"area":2061},
    "Khanh Hoa":{"1963":1,"1965":19,"1967":66,"1968":73,"1969":105,"1970":108,"1971":55,"1974":3,"1964":2,"1966":31,"1972":13,"1973":1,"1975":1,"1962":1,"1959":0,"1956":0,"1961":0,"1957":1,"1960":0,"Total Death":480,"Average Age":26.19,"Average Service Length":227.05,"area":5137},
    "Kien Giang":{"1963":0,"1965":5,"1967":9,"1968":33,"1969":43,"1970":31,"1971":32,"1974":0,"1964":1,"1966":13,"1972":4,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":171,"Average Age":25.3,"Average Service Length":219.94,"area":6348},
    "Kon Tum":{"1963":2,"1965":11,"1967":660,"1968":509,"1969":376,"1970":68,"1971":31,"1974":3,"1964":3,"1966":157,"1972":22,"1973":2,"1975":3,"1962":5,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":1852,"Average Age":22.48,"Average Service Length":173.42,"area":9674},
    "Lam Dong":{"1963":0,"1965":3,"1967":45,"1968":68,"1969":47,"1970":47,"1971":21,"1974":0,"1964":0,"1966":3,"1972":2,"1973":0,"1975":0,"1962":8,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":244,"Average Age":23.84,"Average Service Length":205.26,"area":9783},
    "Long An":{"1963":4,"1965":10,"1967":611,"1968":1217,"1969":748,"1970":125,"1971":31,"1974":0,"1964":6,"1966":209,"1972":4,"1973":0,"1975":1,"1962":0,"1959":0,"1956":0,"1961":1,"1957":0,"1960":0,"Total Death":2967,"Average Age":22.26,"Average Service Length":150.61,"area":4494},
    "Ninh Thuan":{"1963":0,"1965":10,"1967":28,"1968":38,"1969":31,"1970":48,"1971":27,"1974":0,"1964":0,"1966":10,"1972":5,"1973":1,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":198,"Average Age":26.49,"Average Service Length":208.45,"area":3355},
    "Phu Yen":{"1963":0,"1965":12,"1967":103,"1968":99,"1969":52,"1970":41,"1971":21,"1974":2,"1964":0,"1966":215,"1972":6,"1973":1,"1975":0,"1962":1,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":553,"Average Age":23.15,"Average Service Length":184.98,"area":5023},
    "Quang Nam":{"1963":16,"1965":238,"1967":1472,"1968":2407,"1969":1917,"1970":806,"1971":243,"1974":11,"1964":8,"1966":874,"1972":60,"1973":8,"1975":7,"1962":4,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":8071,"Average Age":21.38,"Average Service Length":182.51,"area":10574},
    "Quang Ngai":{"1963":8,"1965":75,"1967":669,"1968":549,"1969":847,"1970":515,"1971":161,"1974":2,"1964":2,"1966":307,"1972":3,"1973":2,"1975":2,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":3142,"Average Age":21.9,"Average Service Length":161.45,"area":5155},
    "Quang Tri":{"1963":1,"1965":4,"1967":1869,"1968":3296,"1969":1211,"1970":280,"1971":407,"1974":10,"1964":0,"1966":434,"1972":62,"1973":6,"1975":9,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":7589,"Average Age":21.25,"Average Service Length":158.96,"area":4621},
    "Soc Trang":{"1963":4,"1965":3,"1967":11,"1968":17,"1969":8,"1970":22,"1971":6,"1974":0,"1964":1,"1966":10,"1972":15,"1973":0,"1975":0,"1962":1,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":98,"Average Age":25.66,"Average Service Length":219.62,"area":3311},
    "Tay Ninh":{"1963":2,"1965":9,"1967":514,"1968":729,"1969":1000,"1970":400,"1971":34,"1974":2,"1964":7,"1966":166,"1972":5,"1973":0,"1975":0,"1962":1,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":2869,"Average Age":22.12,"Average Service Length":159.55,"area":4041},
    "Thua Thien - Hue":{"1963":0,"1965":14,"1967":374,"1968":2031,"1969":655,"1970":677,"1971":296,"1974":10,"1964":5,"1966":185,"1972":43,"1973":2,"1975":4,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":3,"Total Death":4299,"Average Age":21.89,"Average Service Length":160.34,"area":4902},
    "Tien Giang":{"1963":8,"1965":3,"1967":167,"1968":434,"1969":266,"1970":39,"1971":13,"1974":1,"1964":12,"1966":6,"1972":17,"1973":0,"1975":0,"1962":1,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":967,"Average Age":22.61,"Average Service Length":157.29,"area":2510},
    "Tra Vinh":{"1963":4,"1965":1,"1967":18,"1968":11,"1969":16,"1970":8,"1971":13,"1974":0,"1964":5,"1966":4,"1972":0,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":80,"Average Age":26.06,"Average Service Length":180.12,"area":2358},
    "Vinh Long":{"1963":1,"1965":0,"1967":16,"1968":63,"1969":42,"1970":20,"1971":28,"1974":0,"1964":1,"1966":4,"1972":2,"1973":0,"1975":0,"1962":0,"1959":0,"1956":0,"1961":0,"1957":0,"1960":0,"Total Death":177,"Average Age":24.08,"Average Service Length":203.43,"area":1525}}
const year_death = [1, 1, 0, 3, 3, 3, 42, 91, 135, 1389, 4501, 10347, 16331, 11331, 5532, 2205, 507, 44, 63, 54];
var significantDates = {1956.43: "MAAG Vietnam started",
    1964.58: "Gulf of Tonkin Incident", 
    1968.07: "Tet Offensive", 
    1969.07: "Vietnamization began",
    1973.07: "Paris Peace Accord",
    1975.32: "Fall of Saigon"};
var dropdownSelection = "Total Death";
var scaleSelection = "Absolute";

var svg = d3.select("#total"),
width = +svg.attr("width"),
height = +svg.attr("height");

var dropdownsvg = d3.select("#dropdown");

svg.append("text")
.text("Choropleth of Vietnam War Casualties in 1968")
.attr("id", "choropleth_label")
.attr("x", 20)
.attr("y", 20)
.style("font-size", "20px");
dropdownsvg.append("text")
.text("Choropleth of Total Death in Vietnam War")
.attr("id", "dropdown_label")
.attr("x", 20)
.attr("y", 20)
.style("font-size", "20px");
dropdownsvg.append('rect')
    .classed('filled', true)
    .attr('x', 605)
    .attr('y', 70)
    .attr('width', 8)
    .attr('height', 260)
    .attr("stroke-width", 1)
    .attr("stroke", 'black');
var dropdownLegendAxisScale = d3.scaleLinear()
.range([0, 260]).domain([8071, 0]);
var dropdownyAxis = dropdownsvg.append("g")
.attr("transform", `translate(${612.5},${69.5})`)
.call(d3.axisLeft(dropdownLegendAxisScale).ticks(8).tickSize(12));
// Map and projection
var color = d3.scaleLinear().domain([0, 2407]).range(["#ffffff", "#740000"]);
var totalColor = d3.scaleLinear().domain([0, 8071]).range(["#ffffff", "#740000"]);
var densityColor = d3.scaleLinear().domain([0, 1.65]).range(["#ffffff", "#740000"]);
var avgAgeColor = d3.scaleLinear().domain([21, 28]).range(["#ffffff", "#740000"]);
var avgServiceLengthColor = d3.scaleLinear().domain([140, 270]).range(["#ffffff", "#740000"]);
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
        svg.selectAll("path")
        .style("opacity", .5);
        d3.select(this)
        .style("opacity", 1)
        .style("stroke", "black")};
    var mouseMove = function(d) {
        // var curYear = d3.select("#range").node().innerHTML;
        var curYear = d3.select("#slider").node().value;
        var casualtyNumber = (data[d.properties.name_en]) ? data[d.properties.name_en][curYear] : 'unknown';
        tooltip.attr("x", d3.mouse(this)[0]+5)
        .attr("y", d3.mouse(this)[1]-5)
        .text(`Province: ${d.properties.name_en}. Death: ${casualtyNumber}`)};
    var mouseLeave = function(d) {
        svg.selectAll("path")
        .style("opacity", 1);
        tooltip.text("")};
    var dropdownMouseOver = function(d) {
        dropdownsvg.selectAll("path")
        .style("opacity", .5);
        d3.select(this)
        .style("opacity", 1)
        .style("stroke", "black")};
    var dropdownMouseMove = function(d) {
        if (dropdownSelection == "Total Death" & scaleSelection == "Density") {
            var casualtyNumber = (data[d.properties.name_en]) ? Math.round(data[d.properties.name_en]["Total Death"] * 100 / data[d.properties.name_en]["area"]) / 100 : 'unknown';
        
        } else {
            var casualtyNumber = (data[d.properties.name_en]) ? data[d.properties.name_en][dropdownSelection] : 'unknown';
        }
        dropdownsvgTooltip.attr("x", d3.mouse(this)[0]+5)
        .attr("y", d3.mouse(this)[1]-5)
        .text(`Province: ${d.properties.name_en}. ${dropdownSelection}: ${casualtyNumber}`)};
    var dropdownMouseLeave = function(d) {
        dropdownsvg.selectAll("path")
        .style("opacity", 1);
        dropdownsvgTooltip.text("")};

    svg.append("g")
        .attr("id", "choropleth")
        .selectAll("path")
        .data(geojson.features)
        .enter()
        .append("path")
        .attr("d", d3.geoPath()
        .projection(projection))
        .attr("stroke-width", 0.3)
        .attr("stroke", 'black')
        .attr("fill", function(d) {
        if (d.properties.name_en == "Da Nang City|Da Nang") {
            return color(data["Quang Nam"]['1968']);
        } if (data[d.properties.name_en] === undefined) {
            return "#777";
        } else if (data[d.properties.name_en] == null) {
            return color(0);
        }
        return color(data[d.properties.name_en]['1968'])})
        .on("mouseover", mouseOver)
        .on("mousemove", mouseMove)
        .on("mouseleave", mouseLeave);
    dropdownsvg.append("g")
    .attr("id", "choropleth")
    .selectAll("path")
    .data(geojson.features)
    .enter()
    .append("path")
    .attr("d", d3.geoPath()
    .projection(projection))
    .attr("stroke-width", 0.3)
    .attr("stroke", 'black')
    .attr("fill", function(d) {
    if (d.properties.name_en == "Da Nang City|Da Nang") {
        return totalColor(data["Quang Nam"]["Total Death"]);
    } if (data[d.properties.name_en] === undefined) {
        return "#777";
    } else if (data[d.properties.name_en] == null) {
        return totalColor(0)}
    return totalColor(data[d.properties.name_en]["Total Death"])})
    .on("mouseover", dropdownMouseOver)
    .on("mousemove", dropdownMouseMove)
    .on("mouseleave", dropdownMouseLeave);
    var tooltip = svg.append("text")
        .attr("class", "tooltip")
        .style("pointer-events", "none")
        .style("font-size", "17px");
    var dropdownsvgTooltip = dropdownsvg.append("text")
        .attr("class", "tooltip")
        .style("pointer-events", "none")
        .style("font-size", "17px");
};
d3.selectAll("input#slider").on("change", function change() {
    var value = this.value;
    // console.log(d3.select("#slider").node().value)
    svg.select("#choropleth_label").text("Choropleth of Vietnam War Casualties in "  + value);
    svg.selectAll("path").style("fill", function(d) {
    if (d === null) {
        return;
    } if (d.properties.name_en == "Da Nang City|Da Nang") {
        if (data["Quang Nam"][value] === undefined) {
        return color(0);
        }
        return color(data["Quang Nam"][value]);
    } if (data[d.properties.name_en] === undefined) {
        return "#777";
    } else if (data[d.properties.name_en] === undefined || data[d.properties.name_en][value] === undefined) {
        return color(0);
    }
    return color(data[d.properties.name_en][value]);
    });
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
    .attr("x", -50)
    .attr("y", -15)
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
dropdownsvg.append("rect")
    .attr("width", 8)
    .attr("height", 8)
    .attr("x", 605).attr("y", 360)
    .attr("fill", "#777")
    .attr("stroke-width", 1)
    .attr("stroke", 'black');
dropdownsvg.append("text")
    .text("Unknown")
    .attr("x", 535)
    .attr("y", 368);
dropdownsvg.append("text")
    .text("Total Death")
    .attr("x", 560)
    .attr("y", 50)
    .attr("id", "dropdownLegendLabel");

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
    .style("fill", "#ffffff");

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
    .text(`${curYear} Death: ${year_death[curYear - 1956]}`);})
.on("mouseleave", () => {
    histTooltip.text("");});

function updateSelection(selectedGroup) {
    if (selectedGroup == "Total Death") {
        document.getElementById("absoluteScaleRadioSelection").disabled = false;
        document.getElementById("densityScaleRadioSelection").disabled = false;
        updateScale(d3.select('input[name="scaleRadioSelection"]:checked').node().value);
    }
    else {
        if (selectedGroup == "Average Service Length") {
            document.getElementById("absoluteScaleRadioSelection").disabled = true;
            document.getElementById("densityScaleRadioSelection").disabled = true;
            dropdownLegendAxisScale.domain([270, 140]);
            var colorScale = avgServiceLengthColor;
        } else if (selectedGroup == "Average Age") {
            document.getElementById("absoluteScaleRadioSelection").disabled = true;
            document.getElementById("densityScaleRadioSelection").disabled = true;
            dropdownLegendAxisScale.domain([28, 21]);
            var colorScale = avgAgeColor;
        }
        d3.select("#dropdownLegendLabel").text(selectedGroup)
        dropdownyAxis.transition()
            .duration(1000).call(d3.axisLeft(dropdownLegendAxisScale).tickSize(12));
        dropdownsvg.selectAll("path").transition().duration(1000).style("fill", function(d) {
            if (d === null) {
                return;
            } if (d.properties.name_en == "Da Nang City|Da Nang") {
                if (data["Quang Nam"][selectedGroup] === undefined) {
                return colorScale(0);
                }
                return colorScale(data["Quang Nam"][selectedGroup]);
            } if (data[d.properties.name_en] === undefined) {
                return "#777";
            } else if (data[d.properties.name_en] === undefined || data[d.properties.name_en][selectedGroup] === undefined) {
                return colorScale(0);
            }
            return colorScale(data[d.properties.name_en][selectedGroup]);
            });
    }
    
};

function updateScale(selectedScale) {
    if (selectedScale == "Absolute") {
        dropdownLegendAxisScale.domain([8071, 0]);
        var colorScale = totalColor;
        d3.select("#dropdownLegendLabel").text("Total Death");

        dropdownsvg.selectAll("path").transition().duration(1000).style("fill", function(d) {
            if (d === null) {
                return;
            } if (d.properties.name_en == "Da Nang City|Da Nang") {
                return colorScale(data["Quang Nam"]["Total Death"]);
            } if (data[d.properties.name_en] === undefined) {
                return "#777";
            } else if (data[d.properties.name_en] === undefined || data[d.properties.name_en]["Total Death"] === undefined) {
                return colorScale(0);
            }
            return colorScale(data[d.properties.name_en]["Total Death"]);
            });
    } else {
        // density
        dropdownLegendAxisScale.domain([1.65, 0]);
        var colorScale = densityColor;
        d3.select("#dropdownLegendLabel").text("Death Density (death/km2)");

        dropdownsvg.selectAll("path").transition().duration(1000).style("fill", function(d) {
            if (d === null) {
                return;
            } if (d.properties.name_en == "Da Nang City|Da Nang") {
                return colorScale(data["Quang Nam"]["Total Death"] / data["Quang Nam"]["area"]);
            } if (data[d.properties.name_en] === undefined) {
                return "#777";
            } else if (data[d.properties.name_en] === undefined || data[d.properties.name_en]["Total Death"] === undefined) {
                return colorScale(0);
            }
            return colorScale(data[d.properties.name_en]["Total Death"] / data[d.properties.name_en]["area"]);
            });
    }
    dropdownyAxis.transition()
    .duration(1000).call(d3.axisLeft(dropdownLegendAxisScale).tickSize(12));

}

d3.select("div#selectButton").selectAll("input").on("click", function(d) {
    var selectedOption = d3.select(this).node().value;
    dropdownSelection = selectedOption;
    dropdownsvg.select("#dropdown_label").text(`Choropleth of ${selectedOption} Vietnam War Casualties`);
    updateSelection(selectedOption);
});

d3.select("div#scaleButton").selectAll("input").on("click", function(d) {
    var selectedOption = d3.select(this).node().value;
    scaleSelection = selectedOption;
    updateScale(selectedOption);
    // console.log(d3.select('input[name="choroplethRadioSelection"]:checked').node().value)
});