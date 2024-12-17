import EmptyList from '@/components/home/EmptyList';
import ProductList from '@/components/home/ProductList';
import { fetchFavorites } from '@/utils/actions';

async function FavoritesPage() {
    const favorites = await fetchFavorites();

    if (favorites.length === 0) {
        return <EmptyList />;
    }

    return <ProductList properties={favorites} />;

}
export default FavoritesPage;