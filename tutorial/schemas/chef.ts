// create a schema for chefs
export default {
    name: "chef", // internal name of the schema
    title: "Chef", // client facing name for the schema
    type: "document", // type of schema.
    // fields of each document in the schema
    fields: [
        {
            // string field to store name of chef
            name: "name",
            title: "Chef's name",
            type: "string"
        },
        {
            // image field to store image of chef
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true // option to allow you to focus on a section of the image
            }
        },
        {
            // creates a portable text editor to store bio
            name:"bio",
            title: "Bio",
            type: "array",
            of:[{
                title: "Block",
                type: "block",
                styles: [{title: "Normal", value: "normal"}],
                lists: []
            }]
        }
    ]
}