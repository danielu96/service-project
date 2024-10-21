
type Category = {
    label: CategoryLabel;

};

export type CategoryLabel =
    | 'board'
    | 'front'
    | 'service'
    | 'news';

export const categories: Category[] = [
    {
        label: 'board',
    },
    {
        label: 'front',
    },
    {
        label: 'service',
    },
    {
        label: 'news',
    },
];