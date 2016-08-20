var config = {
    // Language for the mirror (currently not implemented)
    language : "ko",
    greeting : ["SmartMirror"], // An array of greetings to randomly choose from
    // forcast.io
    forcast : {
        key : "36cd722000a07039dc10c646014ae38c", // Your forcast.io api key
        units : "auto" // See forcast.io documentation if you are getting the wrong units
    },
    // Calendar (An array of iCals)
    calendar: {
      icals : ["https://calendar.google.com/calendar/ical/787ic6fp684a3r3k5kvp2vr544%40group.calendar.google.com/public/basic.ics"],
      maxResults: 9, // Number of calender events to display (Defaults is 9)
      maxDays: 365 // Number of days to display (Default is one year)
    },
    traffic: {
      key : "v6SEVl10pd5d7UdfWbsT~GD4DZECRHMDoo_Uvjwk5eQ~Aoi9Iv9SNvoZDsy8OMRNgPybCz5m3Y2gffXU7sIEizbiQaAAedWP8UHLgc6V3OSk", // Bing Maps API Key
      mode : "Transit", // Possibilities: Driving / Transit / Walking
      origin : "suwon", // Start of your trip. Human readable address.
      destination : "Yangiae", // Destination of your trip. Human readable address.
      name : "킹스정보통신", // Name of your destination ex: "work"
      reload_interval : 5 // Number of minutes the information is refreshed
    },

    youtube: {
      key:"AIzaSyBw5ItJK0diRWcrzDcXv9_oix_-Iav5qfg"
    },

    subway: {
      key:"67646e6d4d676b7336305546677468"
    },
    soundcloud: {
    	key:"....."
    }
}
