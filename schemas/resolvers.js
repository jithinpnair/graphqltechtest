const canines = require("../models/Canine.model");

// Provide resolver functions for schema fields
const resolvers = {
    Query: {
        getAllCanines: async () => {
            return await canines.find();
        },
        getCanine: async (parent, args) => {
            const { name } = args;
            const canine = await canines.findOne({ name });
            return canine;
        }
    },
    Mutation: {
        createCanine: async (parent, args) => {
            const { name, dateOfBirth, breed } = args.canine;
            const canine = new canines({ name, dateOfBirth, breed });
            await canine.save();
            return canine;
        },
        updateCanine: async (parent, args) => {
            const { id } = args;
            const { name } = args.canine;
            const canine = await canines.findByIdAndUpdate(id, { $set: { name } }, { useFindAndModify: false, new: true });
            return canine;
        }
    }


};

module.exports = resolvers;