# leForem Api Node.js Wrapper

## Synopsis

This projects helps you to make HTTP requests to the Forem API.


## Installation

```sh
npm install forem-node
```

```javasctipt
var iralclient = require('forem-node');
```

```javasctipt
// Public API

var client = new foremclient();

```

## SNCF API

The forem Api is the open API for building cool stuff with jobs data. 

Forem api datasets are accessible by developers through an HTTP REST API.


## API Index
The API is not available 


## Methods

* [search](#search)
* [stream](#stream)



### search

**Response**

```javasctipt
[ 
  { author: 'anonymous',
      contractType: 'N',
      description: '<acse:Abstract xmlns="http://www.acse.be/portal"><P>Dans le cadre de nos projets clients et du renforcement de nos équipes, nous recherchons actuellement des Développeurs Java juniors et expérimentés afin d\'intervenir sur les missions suivantes :<BR/>Participer à l\'analyse et à la conception technique<BR/>Développer et maintenir les applications<BR/>Réaliser des tests et participer aux phases de livraison et documentation                              </P></acse:Abstract>',
      id: 'I30133506',
      languageCodes: [],
      lastPublication: 1521470306000,
      lastUpdate: '19 mars 2018',
      location: 'NAMUR',
      nbJobs: '1',
      owner: 'Le Forem',
      permisCodes: [],
      ref: '2242853',
      title: 'DÉVELOPPEURS JAVA SENIORS ET JUNIORS (H/F) [NAMUR]',
      xpInMonth: 0 
    } 
]
```

**Examples**
Request:
    /search

    param: 
    location: The id of location example Montparnasse -> OCE:SA:87391003 
    date :Date and time to go (iso-date-time) example:20180316T133748

```javasctipt
client.search(resultat,page,q,location,function (error, data,count) {
  if(error) console.log("E!",error)
  console.dir(data);
});

```


### Stream

**Response**

```javasctipt
[ 
  { author: 'anonymous',
      contractType: 'N',
      description: '<acse:Abstract xmlns="http://www.acse.be/portal"><P>Dans le cadre de nos projets clients et du renforcement de nos équipes, nous recherchons actuellement des Développeurs Java juniors et expérimentés afin d\'intervenir sur les missions suivantes :<BR/>Participer à l\'analyse et à la conception technique<BR/>Développer et maintenir les applications<BR/>Réaliser des tests et participer aux phases de livraison et documentation                              </P></acse:Abstract>',
      id: 'I30133506',
      languageCodes: [],
      lastPublication: 1521470306000,
      lastUpdate: '19 mars 2018',
      location: 'NAMUR',
      nbJobs: '1',
      owner: 'Le Forem',
      permisCodes: [],
      ref: '2242853',
      title: 'DÉVELOPPEURS JAVA SENIORS ET JUNIORS (H/F) [NAMUR]',
      xpInMonth: 0 
    } 
]
```

## API Reference

https://www.digital.sncf.com/startup/api

https://doc.navitia.io/


## Contributors

Anis Haboubi

## License

See [LICENSE.txt](LICENSE.txt) for more info.