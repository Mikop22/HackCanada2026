import mongoose, { Schema, type InferSchemaType } from "mongoose";

const poiCategorySchema = new Schema(
  {
    count: { type: Number, default: 0 },
    nearest: { type: String, default: "" },
    highlights: { type: [String], default: [] },
  },
  { _id: false }
);

const listingSchema = new Schema(
  {
    hostId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    price: { type: Number, required: true },
    dates: {
      start: { type: Date, required: true },
      end: { type: Date, required: true },
    },
    sqft: { type: Number, default: 0 },
    beds: { type: Number, default: 1 },
    baths: { type: Number, default: 1 },
    type: {
      type: String,
      enum: ["Studio", "Apartment", "Room", "Loft"],
      default: "Apartment",
    },
    status: {
      type: String,
      enum: ["active", "paused", "filled"],
      default: "active",
    },
    images: { type: [String], default: [] },
    videoPublicId: { type: String, default: "" },
    highlightUrl: { type: String, default: "" },
    videoProcessing: { type: Boolean, default: false },
    description: { type: String, default: "" },
    amenities: { type: [String], default: [] },
    rules: { type: [String], default: [] },
    neighborhood: { type: String, default: "" },

    requirements: {
      budgetMin: { type: Number, default: 0 },
      budgetMax: { type: Number, default: 0 },
      lifestyleTags: { type: [String], default: [] },
      termPreference: { type: String, default: "" },
      petPolicy: {
        type: String,
        enum: ["no-pets", "pets-ok"],
        default: "no-pets",
      },
      genderPreference: {
        type: String,
        enum: ["no-preference", "male", "female", "non-binary"],
        default: "no-preference",
      },
      occupants: { type: Number, default: 1 },
      referencesRequired: { type: Boolean, default: false },
    },

    stats: {
      views: { type: Number, default: 0 },
      inquiries: { type: Number, default: 0 },
    },

    // Agent-populated enrichment data
    enrichment: {
      processedAt: { type: Date },
      status: {
        type: String,
        enum: ["pending", "processing", "complete", "failed"],
        default: "pending",
      },

      imageAnalysis: {
        brightness: { type: String, enum: ["high", "medium", "low"] },
        style: { type: [String], default: [] },
        features: { type: [String], default: [] },
        condition: { type: String, enum: ["excellent", "good", "fair"] },
        furnished: { type: Boolean },
        cleanliness: { type: Number, min: 0, max: 1 },
        rawCaption: { type: String, default: "" },
      },

      geo: {
        coordinates: {
          type: { type: String, enum: ["Point"] },
          coordinates: { type: [Number] }, // [lng, lat]
        },
        walkScore: { type: Number },
        transitScore: { type: Number },
      },

      nearbyPOIs: {
        restaurants: { type: poiCategorySchema },
        bars: { type: poiCategorySchema },
        cafes: { type: poiCategorySchema },
        grocery: { type: poiCategorySchema },
        gyms: { type: poiCategorySchema },
        parks: { type: poiCategorySchema },
        transit: { type: poiCategorySchema },
      },

      neighborhoodSummary: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

listingSchema.index({ city: 1, status: 1, "dates.start": 1 });
listingSchema.index({ hostId: 1 });
listingSchema.index({ price: 1 });
listingSchema.index({ "enrichment.geo.coordinates": "2dsphere" });

export type IListing = InferSchemaType<typeof listingSchema>;

export const Listing =
  mongoose.models.Listing ?? mongoose.model("Listing", listingSchema);
