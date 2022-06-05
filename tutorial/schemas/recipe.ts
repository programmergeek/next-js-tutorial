export default {
    name: "recipe",
    title: "Recipe",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Recipe Name",
            type: "string"
        },
        {
            // a string for the recipe url
            name: "slug",
            title: "Slug",
            type: "slug",
            options: [
                {
                  source: "name", // derive slug from the recipe name
                  maxLength: 96  // slug should have 96 characters or less
                }
            ]
        },
        {
            // reference to the chief documents
            name: "chef",
            title: "Chef",
            type: "reference",
            to: {type: "chef"}
        },
        {
            // image of the final dish
            name: "mainImage",
            title: "Recipe Main Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            // an array of ingredients
            name: "ingredient",
            title: "Ingredient",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            // references ingredient document
                            name: "ingredient",
                            title: "Ingredient",
                            type: "reference",
                            to: [{type: "ingredient"}]
                        },
                        {
                            name: "wholeNumber",
                            title: "Whole Number",
                            type: "number"
                        },
                        {
                            name:"fraction",
                            title: "Fraction",
                            type: "string",
                            options: {
                                list: ["1/2", "1/3", "1/4", "3/4", "2/3"]
                            }
                        },
                        {
                            name: "unit",
                            title: "Unit",
                            type: "string",
                            options: {
                                list: ["grams", "cup", "Tbsp.", "tsp."]
                            }
                        }
                        
                    ],
                    // specify what values you want to use in the preview of the ingredient list
                    preview: {
                        select: {
                            title: "ingredient.name",
                            name: "ingredient.name",
                            media: "ingredient.image",
                            wholeNumber: "wholeNumber",
                            fraction: "fraction",
                            unit: "unit"
                        },
                        // function to transform the selected values into the desired output
                        prepare({
                            title,
                            media,
                            wholeNumber = "(No whole number set)",
                            fraction = "(No fraction set)",
                            unit = "(No unit set)"
                        }) {
                            return {
                                title,
                                subtitle: `${wholeNumber} ${fraction} ${unit}`,
                                media
                            }
                        }
                    }
                }
            ]
        },
        {
            // editing block to add cooking instructions
            name: "instructions",
            title: "Instructions",
            type: "array",
            of: [
                {
                    type: "block"
            }
        ]
        }
]
}