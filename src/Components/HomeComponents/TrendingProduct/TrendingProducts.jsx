import { Link } from "react-router-dom";
import { gradientBorder } from "../../Shared/StyleJS/border"
import useFeaturedProducts from "../../../Hooks/useFeaturedProducts";
import TrendingProductCard from "./TrendingProductCard";

const TrendingProducts = () => {
    const { FeaturedProducts, loading } = useFeaturedProducts();

    const trendingProducts = [...FeaturedProducts].sort((a, b) => {
        return b.vote - a.vote;
    });
    return (
        <div className="mx-2 mt-2">
            {loading && <p>Loading...</p>}

            {!loading && trendingProducts?.length === 0 && <p>No featured products available.</p>}

            {!loading && trendingProducts?.length > 0 && (
                <div className="max-h-screen overflow-y-auto scroll-smooth md:scroll-auto">
                    { trendingProducts.slice(0, 6).map((trendingProduct) => <TrendingProductCard key={trendingProduct.id} trendingProduct={trendingProduct} />)}
                </div>
            )}
        
            <Link
                to='products'>
                <button
                    className="w-full border-[1px] py-1 shadow-md shadow-slate-900 mt-6 "
                    style={{ ...gradientBorder }}>
                    Show All Products
                </button>
            </Link>
        </div>
    );
};

export default TrendingProducts;