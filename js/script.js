// array to store all locations
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locationsArray = [];
// parent Class Locations
var Locations = /** @class */ (function () {
    // date : Date; in case I manage to add the date
    // constructor (locName : string, cty : string, z : number, im : string, dat : Date) { in case I manage to add the date
    function Locations(locName, cty, z, im) {
        this.lName = locName;
        this.city = cty;
        this.zip = z;
        this.img = im;
        locationsArray.push(this);
        // this.date = dat; in case I manage to add the date
    }
    Locations.prototype.display = function () {
        console.log(this);
        return "<div id=\"locations_card\" class=\"card col-sm-12 col-md-6 col-lg-3 m-1\" style=\"width: 20rem;\">\n            <div class=\"card-body\">\n            <h5 class=\"card-title\">" + this.lName + "</h5>\n            <p class=\"card-text text-secondary\">" + this.city + " " + this.zip + "</p>\n            <p class=\"card-text\"><small class=\"text-muted\">Date visited</small></p>\n        </div>\n        <img src=\"" + this.img + "\" class=\"card-img-bottom d-none d-md-block img-thumbnail img-fluid\" style=\"height: 200px; object-fit: cover;\" alt=\"" + this.lName + "\">\n        </div>";
    };
    return Locations;
}());
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(locName, cty, z, im, pho, cuis, web) {
        var _this = _super.call(this, locName, cty, z, im) || this;
        _this.phone = pho;
        _this.cuisine = cuis;
        _this.webAdress = web;
        return _this;
    }
    Restaurants.prototype.display = function () {
        console.log(this);
        return "<div id=\"restaurant_card\" class=\"card col-sm-12 col-md-6 col-lg-3 m-1\" style=\"width: 20rem;\">\n            <div class=\"card-body\">\n            <h5 class=\"card-title\">" + this.lName + " -> " + this.cuisine + " Cuisine</h5>\n            <p class=\"card-text text-secondary\">" + this.city + " " + this.zip + "</p>\n            <p class=\"card-text text-secondary\">Phone: " + this.phone + "</p>\n            <p><a href=\"" + this.webAdress + "\" class=\"link-info\" target=\"_blank\">" + this.webAdress + "</a></p>\n            <p class=\"card-text\"><small class=\"text-muted\">Date visited</small></p>\n        </div>\n        <img src=\"" + this.img + "\" class=\"card-img-bottom d-none d-md-block img-fluid img-thumbnail\" style=\"height: 200px; object-fit: cover;\" alt=\"" + this.lName + "\">\n        </div>";
    };
    return Restaurants;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(locName, cty, z, im, evDa, evTi, pri) {
        var _this = _super.call(this, locName, cty, z, im) || this;
        _this.eventDate = evDa;
        _this.eventTime = evTi;
        _this.price = pri;
        return _this;
    }
    Events.prototype.display = function () {
        return "<div id=\"events_card\" class=\"card col-sm-12 col-md-6 col-lg-3 m-1\" style=\"width: 20rem;\">\n            <div class=\"card-body\">\n            <h5 class=\"card-title text-secondary\">" + this.lName + "</h5>\n            <p class=\"card-text text-secondary\">Starting " + this.eventDate + " at " + this.eventTime + "</p>\n            <p class=\"card-text text-secondary\">" + this.city + " " + this.zip + "</p>\n            <p class=\"card-text fw-bold\">Price \u20AC " + this.price + "</p>\n            <!--<p class=\"card-text\"><small class=\"text-muted\">Date visited</small></p>-->\n        </div>\n        <img src=\"" + this.img + "\" class=\"card-img-bottom d-none d-md-block img-fluid img-thumbnail\" style=\"height: 200px; object-fit: cover;\" alt=\"" + this.lName + "\">\n        </div>";
    };
    return Events;
}(Locations));
new Locations("Green Aqua", "Budapest, major köz 12", 1119, "https://live.staticflickr.com/1863/30561112848_4d8b97c1fd_b.jpg");
new Events("Alfred Dorfer", "Simpl", 1010, "https://upload.wikimedia.org/wikipedia/commons/7/77/Nestroy_2014_04_Alfred_Dorfer.jpg", "24.12.2021", "20:00", 40.00);
new Events("Michael Niavarani", "Simpl", 1010, "https://www.news.at/_storage/asset/10044786/storage/newsat:key-visual/file/132460069/michael-niavarani-wien-morawa-michael-niavarani-buchpr%C3%A4sentation-ein-trottel-kommt.jpg", "01.01.2022", "20:00", 45.00);
new Locations("Therme Erding", "Erding, Thermenallee 1", 85435, "https://www.merkur.de/bilder/2019/10/02/13063919/1980460656-therme-erding-archivfoto-UskoP6Ktfea.jpg");
new Events("Zwa Voitrottln", "Kulisse", 1160, "https://tubestatic.orf.at/static/images/site/tube/20130940/zwa-voitrottln.5187228.jpg", "01.06.2021", "19:30", 21.50);
new Locations("Central Park", "New York City", 12345, "https://www.usatipps.de/wp-content/uploads/2019/09/central-park-overview.jpg");
new Restaurants("The Bank Brasserie & Bar", "Wien, Bognergasse 4", 1010, "https://www.restaurant-thebank.at/typo3temp/_processed_/csm_the-bank-brasserie-bar-1_01_59660ada20.jpg", 12345, "Viennese", "https://www.restaurant-thebank.at/");
new Restaurants("Kenny´s im Sonnwendviertel", "Wien, Sissy-Löwinger-Weg", 1100, "https://www.pocket.at/lounge/wp-content/uploads/2020/01/kennysworld2.jpg", 12345, "Salads", "http://www.kennys.at/");
new Restaurants("Rocky Docky Western Steak House", "Wien, Rückertgasse 39", 1160, "https://www.herold.at/FS/picture/9/4/5/5934549.jpg", 12345, "Steak", "http://www.rockydocky.com/");
new Locations("Aquapalace Prag", "Czech Republic, Pražská 138", 25101, "https://cdn-vsh.prague.eu/object/888/aqua1.jpg");
new Events("Josef Hader", "Vienna, Globe Theater", 1030, "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Josef_Hader_Photo_Call_Wilde_Maus_Berlinale_2017_01.jpg/1200px-Josef_Hader_Photo_Call_Wilde_Maus_Berlinale_2017_01.jpg", "22.10.2021", "18:00", 35.90);
new Events("Rudi Fußi", "Kulisse", 1160, "https://datum.at/wp-content/uploads/2017/03/da_32-37_03-17_fussi_170220_MZ_THOM.jpg", "25.09.2021", "19:00", 21.90);
for (var _i = 0, locationsArray_1 = locationsArray; _i < locationsArray_1.length; _i++) {
    var value = locationsArray_1[_i];
    if (value instanceof Restaurants) {
        document.getElementById("output_row_restaurants").innerHTML += value.display();
    }
    if (value instanceof Events) {
        document.getElementById("output_row_events").innerHTML += value.display();
    }
    if (value instanceof Locations && !(value instanceof Events) && !(value instanceof Restaurants)) {
        document.getElementById("output_row_locations").innerHTML += value.display();
    }
}
