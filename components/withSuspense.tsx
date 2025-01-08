import { Suspense } from 'react';

const withSuspense = (Component: React.ComponentType, fallback: React.ReactNode = <div>Loading...</div>) => {
    return (props: any) => (
        <Suspense fallback={fallback}>
            <Component {...props} />
        </Suspense>
    );
};

export default withSuspense;