export type ProductCardProps = {
    id: string;
    name: string;
    tagline: string;

};
export type actionFunction = (
    prevState: any,
    formData: FormData
) => Promise<{ message: string }>;

export type PropertyCardProps = {
    image: string;
    id: string;
    name: string;
    tagline: string;
};
export type DateRangeSelect = {
    startDate: Date;
    endDate: Date;
    key: string;
};
