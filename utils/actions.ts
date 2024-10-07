export const fetchProperties = async ({
    search = '',
    category,
}: {
    search?: string;
    category?: string;
}) => {
    const properties =
        [
            {
                id: "1",
                name: "John",
                tagline: "Doe",
                image: "https://mugstore.pl/Kubek-kwiaty.png",
            },
            {
                id: "2",
                name: "Jane",
                tagline: "Smith",
                image: "https://mugstore.pl/Kubek-kwiaty.png",
            },
            {
                id: "3",
                name: "Bob",
                tagline: "Johnson",
                image: "https://mugstore.pl/Kubek-kwiaty.png",
            },
        ];

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




