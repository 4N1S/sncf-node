# SNCF Api Node.js Wrapper

## Synopsis

This projects helps you to make HTTP requests to the SNCF API.


## Installation

```sh
npm install sncf-node
```

```javasctipt
var sncfclient = require('sncf-node');
```

```javasctipt
// Public API

var client = new sncfclient();

```

## SNCF API

The SNCF Api is the open API for building cool stuff with mobility data. It provides the following services

journeys computation
line schedules
next departures
exploration of public transport data / search places
and sexy things such as isochrones

sncf api datasets are accessible by developers through an HTTP REST API.


## API Index
The API is available at https://api.sncf.com


## Methods

* [departures](#departures)
* [arrivals](#arrivals)
* [route_schedules](#route_schedules)
* [traffic_reports](#traffic_reports)
* [lines](#lines)
* [places](#places)
* [linesdetail](#linesdetail)
* [journey](#journey)
* [vehicle_journeys](#vehicle_journeys)
* [disruptions](#disruptions)
* [disruptionstream](#disruptionstream)


### departures

**Response**

```javasctipt
{ 
  display_informations:
     { direction: 'Nantes (Nantes)',
       code: '',
       network: 'SNCF',
       links: [],
       color: '000000',
       name: 'PAYS DE LOIRE',
       physical_mode: 'Train grande vitesse',
       headsign: '8879',
       label: 'PAYS DE LOIRE',
       equipments: [],
       text_color: '',
       commercial_mode: 'TGV',
       description: '' },
    stop_point:
     { commercial_modes: [Array],
       name: 'Paris-Montparnasse 1-2',
       links: [],
       physical_modes: [Array],
       coord: [Object],
       label: 'Paris-Montparnasse 1-2 (Paris)',
       equipments: [],
       administrative_regions: [Array],
       id: 'stop_point:OCE:SP:TGV-87391003',
       stop_area: [Object] },
    route:
     { direction: [Object],
       name: 'Paris-Montparnasse 1-2 vers Nantes (TGV)',
       links: [],
       physical_modes: [Array],
       is_frequence: 'False',
       geojson: [Object],
       direction_type: '',
       line: [Object],
       id: 'route:OCE:40-TGV-87391003-87481002' 
     }
}
```

**Examples**
Request:
    /api/departures

    param: 
    location: The id of location example Montparnasse -> OCE:SA:87391003 
    date :Date and time to go (iso-date-time) example:20180316T133748

```javasctipt
 client.departures(location,date,function (error, data) {
  if(error) console.log("E!",error)
  console.dir(data);
 });

```


### arrivals

**Response**

```javasctipt
{ 
  display_informations:
     { direction: 'Nantes (Nantes)',
       code: '',
       network: 'SNCF',
       links: [],
       color: '000000',
       name: 'PAYS DE LOIRE',
       physical_mode: 'Train grande vitesse',
       headsign: '8879',
       label: 'PAYS DE LOIRE',
       equipments: [],
       text_color: '',
       commercial_mode: 'TGV',
       description: '' },
    stop_point:
     { commercial_modes: [Array],
       name: 'Paris-Montparnasse 1-2',
       links: [],
       physical_modes: [Array],
       coord: [Object],
       label: 'Paris-Montparnasse 1-2 (Paris)',
       equipments: [],
       administrative_regions: [Array],
       id: 'stop_point:OCE:SP:TGV-87391003',
       stop_area: [Object] },
    route:
     { direction: [Object],
       name: 'Paris-Montparnasse 1-2 vers Nantes (TGV)',
       links: [],
       physical_modes: [Array],
       is_frequence: 'False',
       geojson: [Object],
       direction_type: '',
       line: [Object],
       id: 'route:OCE:40-TGV-87391003-87481002' 
     }
}
```

**Examples**
Request:
    /api/arrivals

    param: 
    location: The id of location example Montparnasse -> OCE:SA:87391003 
    date :Date and time to go (iso-date-time) example:20180316T133748
    
```javasctipt
 client.arrivals(location,date,function (error, data) {
  if(error) console.log("E!",error)
  console.dir(data);
 });

```


### route_schedules

**Response**

```javasctipt
[ { display_informations:
     { direction: 'Paris-Montparnasse 1-2 (Paris)',
       code: '',
       network: 'SNCF',
       links: [],
       color: '000000',
       label: 'AQUITAINE',
       commercial_mode: 'TGV',
       text_color: '',
       name: 'AQUITAINE' },
    table: { headers: [Array], rows: [Array] },
    additional_informations: null,
    geojson: { type: 'MultiLineString', coordinates: [] },
    links: [ [Object], [Object], [Object], [Object] ] 
  }
]

```

**Examples**

Request:
    /api/route_schedules
    
    param: 
    location: The id of location example Montparnasse -> OCE:SA:87391003 
    date :Date and time to go (iso-date-time) example:20180316T133748

```javasctipt
 client.route_schedules(location,date,function (error, data) {
  if(error) console.log("E!",error)
  console.dir(data);
 });

```


### traffic_reports

**Response**
```javasctipt
{ vehicle_journeys:
  [ 
     { disruptions: [Array],
       codes: [],
       name: '852340',
       id: 'vehicle_journey:OCE:SN852340F01002_dst_1' 
     } 
  ]
}
```

**Examples**
Request:
    /api/traffic_reports

    param:  
    network: sncf

```javasctipt
 client.traffic_reports(from,to,lang,date,timesel,typeOfTransport,function (data) {
  console.dir(data);
 });

```



### lines

**Response**
```javasctipt
{ code: '',
    network: { id: 'network:sncf', links: [], name: 'SNCF' },
    links: [],
    color: '000000',
    routes:
     [ [Object]
    geojson: { type: 'MultiLineString', coordinates: [] },
    text_color: '',
    physical_modes: [ [Object] ],
    codes: [],
    closing_time: '200300',
    opening_time: '055900',
    commercial_mode: { id: 'commercial_mode:ter', name: 'TER' },
    id: 'line:OCE:581',
    name: '(Evx) / Lisieux / Caen  / Cherbourg' 
}
  
```

**Examples**

Request:
    /api/lines
    
    
```javasctipt
 client.lines(function (data) {
  console.dir(data);
 });

```
### places

**Response**
```javasctipt
{ embedded_type: 'administrative_region',
    quality: 80,
    administrative_region:
     { insee: '75056',
       name: 'Paris',
       level: 8,
       coord: [Object],
       label: 'Paris (75001-75116)',
       id: 'admin:fr:75056',
       zip_code: '75001;75116' },
    name: 'Paris (75001-75116)',
    id: 'admin:fr:75056' 
}
```

**Examples**

Request:
    /api/places
    
    params: 
    query:Information about places
     
    
```javasctipt
 client.places(query,function (data) {
  console.dir(data);
 });

```
### linesdetail

**Response**
```javasctipt
{ 
  departures:
     [ { display_informations: [Object],
         stop_point: [Object],
         route: [Object],
         links: [Array],
         stop_date_time: [Object] 
       }
      ]
}
```

**Examples**

Request:
    /api/linesdetail
    
    params: 
    idline: The id of location example Montparnasse -> OCE:SA:87391003  
    type:route_schedules,stop_schedules,arrivals,,departures,places_nearby,calendars,traffic_report
     
    
```javasctipt
 client.linesdetail(idline,type,function (data) {
  console.dir(data);
 });

```

### journeys

**Response**
```javasctipt
[ { status: '',
    distances: { car: 0, walking: 648, bike: 0, ridesharing: 0 },
    links: [ [Object] ],
    tags: [ 'walking', 'ecologic' ],
    nb_transfers: 2,
    durations: { car: 0, walking: 817, total: 4957, ridesharing: 0, bike: 0 },
    arrival_date_time: '20180317T182433',
    calendars: [ [Object] ],
    departure_date_time: '20180317T170156',
    requested_date_time: '20180317T164931',
    fare: { found: false, total: [Object], links: [] },
    co2_emission: { value: 275.1994, unit: 'gEC' },
    type: 'best',
    duration: 4957,
    sections:
     [ [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object] ] 
  } 
]
```

**Examples**

Request:
    /api/journeys?from=2.3749036;48.8467927&to=2.2922926;48.8583736&datetime=20180317T164931    
    params: 
    from: The id of the departure of your journey. If none are provided an isochrone is computed
    to:The id of the arrival of your journey. If none are provided an isochrone is computed
    datetime:string (optional) Default: current date in Belgium Example: 300917 The date to query.
    lang: string (optional) Avaible: en,fr,de,nl     
    
```javasctipt
 client.journeys(from,to,datetime,function (data) {
  console.dir(data);
 });

```

### vehicle_journeys

**Response**
```javasctipt
[ { codes: [],
    name: '852201',
    journey_pattern: { id: 'journey_pattern:0', name: 'journey_pattern:0' },
    disruptions: [ [Object] ],
    calendars: [ [Object] ],
    stop_times: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
    validity_pattern:
     { beginning_date: '20180228',
       days: '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001111110111111011111101110' },
    id: 'vehicle_journey:OCE:SN852201F01002_dst_1',
    trip: { id: 'OCE:SN852201F01002', name: '852201' } 
  }
]
```

**Examples**

Request:
    /api/vehicle_journeys
    
    params: 
    id: The id of vehicle Example: vehicle_journey:OCE:SN852213F01005_dst_1
       
    
```javasctipt
 client.vehicle_journeys(id,function (data) {
  console.dir(data);
 });

```

### disruptions

**Response**
```javasctipt
[ { status: 'past',
    disruption_id: 'fdd1f5e6-2b0f-433a-9313-61b0da330b49',
    severity:
     { color: '#000000',
       priority: 42,
       name: 'trip delayed',
       effect: 'SIGNIFICANT_DELAYS' },
    impact_id: 'fdd1f5e6-2b0f-433a-9313-61b0da330b49',
    application_periods: [ [Object] ],
    updated_at: '20180316T183716',
    uri: 'fdd1f5e6-2b0f-433a-9313-61b0da330b49',
    impacted_objects: [ [Object] ],
    disruption_uri: 'fdd1f5e6-2b0f-433a-9313-61b0da330b49',
    contributor: 'realtime.ire',
    cause: '',
    id: 'fdd1f5e6-2b0f-433a-9313-61b0da330b49' 
  }
]
```

**Examples**

Request:
    /api/disruptions     
    
```javasctipt
 client.disruptions(function (data) {
  console.dir(data);
 });

```

### disruptionstream

**Response**
```javasctipt
[ { status: 'past',
    disruption_id: 'fdd1f5e6-2b0f-433a-9313-61b0da330b49',
    severity:
     { color: '#000000',
       priority: 42,
       name: 'trip delayed',
       effect: 'SIGNIFICANT_DELAYS' },
    impact_id: 'fdd1f5e6-2b0f-433a-9313-61b0da330b49',
    application_periods: [ [Object] ],
    updated_at: '20180316T183716',
    uri: 'fdd1f5e6-2b0f-433a-9313-61b0da330b49',
    impacted_objects: [ [Object] ],
    disruption_uri: 'fdd1f5e6-2b0f-433a-9313-61b0da330b49',
    contributor: 'realtime.ire',
    cause: '',
    id: 'fdd1f5e6-2b0f-433a-9313-61b0da330b49' 
  }
]
```

**Examples**

Request:
    /api/disruptionstream
    
    params: 
    
    
```javasctipt
 client.disruptionstream(function (data) {
  console.dir(data);
 });

```
## API Reference

https://www.digital.sncf.com/startup/api

https://doc.navitia.io/


## Contributors

Anis Haboubi

## License

See [LICENSE.txt](LICENSE.txt) for more info.