import useFeaturedProducts from "../../../Hooks/useFeaturedProducts";
import Card from "./Card";

const FeaturedProducts = () => {
    const { FeaturedProducts, loading} = useFeaturedProducts();

    const sortedFeaturedProducts = [...FeaturedProducts].sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
    });

    console.log(sortedFeaturedProducts)

    return (
        <div className="max-h-screen overflow-y-auto scroll-smooth mt-4 md:scroll-auto">
            {loading && <p>Loading...</p>}

            {!loading && sortedFeaturedProducts?.length === 0 && <p>No featured products available.</p>}

            {!loading && sortedFeaturedProducts?.length > 0 && (
                <div className="">
                    {sortedFeaturedProducts.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FeaturedProducts;
