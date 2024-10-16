
import properties from '../db/products.json'

export const fetchProperties = async ({
    search = '',
    category,
}: {
    search?: string;
    category?: string;
}) => {
    properties

    let filteredProperties = properties;
    if (search) {
        filteredProperties = filteredProperties.filter(property => {
            const nameMatch = property.name.toLowerCase().includes(search.toLowerCase());
            const taglineMatch = property.tagline.toLowerCase().includes(search.toLowerCase());
            return nameMatch || taglineMatch;
        });
    }
    // if (category) {
    //   filteredProperties = filteredProperties.filter(property => property.category === category);
    // }

    return filteredProperties;
};
export const fetchPropertyDetails = (id: string) => {
    const foundProduct = properties.find((property) => property.id === id);
    console.log(foundProduct)
    const property = foundProduct
    return property;
};




