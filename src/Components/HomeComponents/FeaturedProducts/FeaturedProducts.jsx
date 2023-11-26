import useFeaturedProducts from "../../../Hooks/useFeaturedProducts";
import Card from "./Card";

const FeaturedProducts = () => {
    const { FeaturedProducts, loading} = useFeaturedProducts();

    return (
        <div className="max-h-screen overflow-y-auto scroll-smooth md:scroll-auto">
            {loading && <p>Loading...</p>}

            {!loading && FeaturedProducts.length === 0 && <p>No featured products available.</p>}

            {!loading && FeaturedProducts.length > 0 && (
                <div className="">
                    {FeaturedProducts.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FeaturedProducts;
