import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  photos: [
    {
      type: String,
    },
  ],
});

const Gallery = mongoose.model(
  "Gallery",
  gallerySchema
);

export default Gallery;