
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

const Page: React.FC = () => {
    const { data, loading: propertiesLoading, error: propertiesError } = useQuery(FETCH_PROPERTIES, { client: graphqlClient });
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 3) % data.reviewCollection.edges.length);
        }, 10000); // Change every 10 seconds

        return () => clearInterval(interval);
    }, [data]);

    if (propertiesLoading) {
        return <div>Loading...</div>;
    }

    if (propertiesError) {
        return <div>{propertiesError.message}</div>;
    }

    const properties = data.reviewCollection.edges.map((edge: any) => edge.node);
    const displayedProperties = properties.slice(currentIndex, currentIndex + 3);

    return (<>
        <div>
            <h1 className='text-2xl font-semibold bg-blend-color-dodge text-left my-5'>Users opinion</h1>
        </div>
        <div className='mx-auto my-6 gap-6 items-center grid grid-cols-1 md:grid-cols-3 p-5'>
            {displayedProperties.map((property: any, index: number) => (
                <div
                    className='bg-primary-foreground shadow-md rounded-lg p-6 text-center transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn'
                    key={property.id}
                    style={{ animationDelay: `${index * 0.5}s` }} // Delay each card by 0.5s
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
