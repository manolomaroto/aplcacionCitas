Cars = new Mongo.Collection('cars');


if (Meteor.isServer) {
  Cars.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

  }

  Cars.attachSchema(new SimpleSchema({
    brand:{
      type:String,
      label:"Brand",
      max: 100
    },
    model: {
      type:String,
      label:"Model",
      max: 100
    },
    fuelType: {
      type: String,
      label: "Fuel Type",
      allowedValues: ['Petrol','Diesel','Hybrid','Electric'],
    },
    bodyStyle:{
      type: String,
      label: "Body Style",
      allowedValues: ['Convertibles','Coupes','Htachbacks','Sedans','Suvs','Trucks','Wagons'],
      optional: true
    },
    topSpeed:{
      type: Number,
      label: "Top speed (mph)",
      optional: true
    },
    power:{
      type: Number,
      label:"Power (HP)",
      optional:true
    }
  }));

  

