// array to store all locations

var locationsArray : Array<Locations> = [];

// parent Class Locations

class Locations {
    lName : string;
    city : string;
    zip : number;
    img : string;
    // date : Date; in case I manage to add the date

    // constructor (locName : string, cty : string, z : number, im : string, dat : Date) { in case I manage to add the date
    constructor (locName : string, cty : string, z : number, im : string) {
        this.lName = locName;
        this.city = cty;
        this.zip = z;
        this.img = im;
        locationsArray.push(this);
        // this.date = dat; in case I manage to add the date
    }

    display(){
        console.log(this);
        return `<div id="locations_card" class="card col-sm-12 col-md-6 col-lg-3 m-1" style="width: 20rem;">
            <div class="card-body">
            <h5 class="card-title">${this.lName}</h5>
            <p class="card-text text-secondary">${this.city} ${this.zip}</p>
            <p class="card-text"><small class="text-muted">Date visited</small></p>
        </div>
        <img src="${this.img}" class="card-img-bottom d-none d-md-block img-thumbnail img-fluid" style="height: 200px; object-fit: cover;" alt="${this.lName}">
        </div>`
    }
}

class Restaurants extends Locations {
    phone : number;
    cuisine : string;
    webAdress : string;

    constructor (locName : string, cty : string, z : number, im : string, pho : number, cuis : string, web : string) {
        super(locName, cty, z, im);
        this.phone = pho;
        this.cuisine = cuis;
        this.webAdress = web;
    }
    display(){
        console.log(this);
        return `<div id="restaurant_card" class="card col-sm-12 col-md-6 col-lg-3 m-1" style="width: 20rem;">
            <div class="card-body">
            <h5 class="card-title">${this.lName} -> ${this.cuisine} Cuisine</h5>
            <p class="card-text text-secondary">${this.city} ${this.zip}</p>
            <p class="card-text text-secondary">Phone: ${this.phone}</p>
            <p><a href="${this.webAdress}" class="link-info" target="_blank">${this.webAdress}</a></p>
            <p class="card-text"><small class="text-muted">Date visited</small></p>
        </div>
        <img src="${this.img}" class="card-img-bottom d-none d-md-block img-fluid img-thumbnail" style="height: 200px; object-fit: cover;" alt="${this.lName}">
        </div>`
    }
}

class Events extends Locations {
    eventDate : string;
    eventTime : string;
    price : number;

    constructor (locName : string, cty : string, z : number, im : string, evDa : string, evTi : string, pri : number) {
        super(locName, cty, z, im);
        this.eventDate = evDa;
        this.eventTime = evTi;
        this.price = pri;
    }
    display(){
        return `<div id="events_card" class="card col-sm-12 col-md-6 col-lg-3 m-1" style="width: 20rem;">
            <div class="card-body">
            <h5 class="card-title text-secondary">${this.lName}</h5>
            <p class="card-text text-secondary">Starting ${this.eventDate} at ${this.eventTime}</p>
            <p class="card-text text-secondary">${this.city} ${this.zip}</p>
            <p class="card-text fw-bold">Price € ${this.price}</p>
            <!--<p class="card-text"><small class="text-muted">Date visited</small></p>-->
        </div>
        <img src="${this.img}" class="card-img-bottom d-none d-md-block img-fluid img-thumbnail" style="height: 200px; object-fit: cover;" alt="${this.lName}">
        </div>`
    }
}

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


for (let value of locationsArray) {
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



