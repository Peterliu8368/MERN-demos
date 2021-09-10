const mongoose = require("mongoose");

// {PATH} will be replaced with the field name, such as "location".
const DestinationSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },

    description: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [5, "{PATH} must be at least {MINLENGTH} characters."],
    },

    // src URL for an <img> or <iframe>
    src: {
      type: String,
      required: [true, "{PATH} is required."],
    },

    srcType: {
      type: String,
      required: [true, "{PATH} is required."],
    },

    /* 
    Checkboxes for the season's you'd like to travel to this destination.

    We know there are only 4 seasons, however some things you might want an array
    for you may be able to do something like this instead. Such as
    primaryCategory and secondaryCategory instead of an array of many categories.
    */
    summer: {
      type: Boolean,
      default: false,
    },

    winter: {
      type: Boolean,
      default: false,
    },

    spring: {
      type: Boolean,
      default: false,
    },

    fall: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // adds createdAt and updatedAt
);

/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Destination = mongoose.model("Destination", DestinationSchema);

// The mongoose model that lets you connect to it's DB collection.
module.exports = Destination;
