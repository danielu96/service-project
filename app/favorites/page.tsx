import EmptyList from '@/components/home/EmptyList';
import ProductList from '@/components/home/ProductList';
import { fetchFavorites } from '@/utils/actions';

interface Favorite {

    id: string;
    name: string;
    image: string;
    tagline: string;
    country: string;
    price: number;
}



async function FavoritesPage() {
    const favorites: Favorite[] = await fetchFavorites();

    if (favorites.length === 0) {
        return <EmptyList />;
    }

    return <ProductList properties={favorites} />;

}
export default FavoritesPage;