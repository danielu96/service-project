"use client";

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Separator } from '../ui/separator';

const graphqlClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_SUPABASE_URL + '/graphql/v1',
    cache: new InMemoryCache(),
    headers: {
        'apikey': process.env.NEXT_PUBLIC_SUPABASE_KEY || '',
    },
});

const FETCH_PROPERTIES = gql`
    query FetchProperties {
        reviewCollection {
            edges {
                node {
                    id
                    rating
                    comment
                }
            }
        }
    }
`;

interface Review {
    id: string;
    rating: number;
    comment: string;
}

interface ReviewEdge {
    node: Review;
}

interface ReviewData {
    reviewCollection: {
        edges: ReviewEdge[];
    };
}

const Page: React.FC = () => {
    const { data, loading: propertiesLoading, error: propertiesError } = useQuery<ReviewData>(FETCH_PROPERTIES, { client: graphqlClient });
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // console.log("useEffect - Data:", data); // Dodane logowanie w useEffect

        if (data && data.reviewCollection) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 3) % data.reviewCollection.edges.length);
                // console.log("useEffect - currentIndex:", currentIndex); // Dodane logowanie currentIndex
            }, 10000);

            return () => clearInterval(interval);
        }
    }, [data]);

    if (propertiesLoading) {
        return <div>Loading...</div>;
    }

    if (propertiesError) {
        // console.error("propertiesError:", propertiesError); // Logowanie błędu
        return <div>{propertiesError.message}</div>;
    }

    if (!data || !data.reviewCollection) {
        // console.log("No data available"); // Logowanie braku danych
        return <div>No data available</div>;
    }

    const properties = data.reviewCollection.edges.map((edge) => edge.node);
    // console.log("properties:", properties); // Dodane logowanie properties
    const displayedProperties = properties.slice(currentIndex, currentIndex + 3);

    // console.log("displayedProperties:", displayedProperties); // Dodane logowanie wyświetlanych danych

    return (
        <>
            <div>
                <h1 className='text-2xl font-semibold bg-blend-color-dodge text-left my-5'>Users opinion</h1>
            </div>
            <div className='mx-auto my-6 gap-6 items-center grid grid-cols-1 md:grid-cols-3 p-5'>
                {displayedProperties.map((property, index) => (
                    <div
                        className='bg-primary-foreground shadow-md rounded-lg p-6 text-center transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn'
                        key={property.id}
                        style={{ animationDelay: `${index * 0.5}s` }}
                    >
                        <h1 className='font-bold text-xl mb-2'>{property.rating}</h1>
                        <p>{property.comment}</p>
                    </div>
                ))}
            </div>
            <Separator />
        </>
    );
};

export default Page;