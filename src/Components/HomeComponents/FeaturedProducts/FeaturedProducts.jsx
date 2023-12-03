
import useAllProducts from "../../../Hooks/useAllProducts";
import Card from "./Card";

// import useAuth from "../../../Hooks/useAuth";

const FeaturedProducts = () => {
    const { AllProducts, loading ,refetch} = useAllProducts();
    // const {user}= useAuth();
      
    const featuredProducts = AllProducts.filter(product => product.featured === 'Featured');
    // console.log(AllProducts);
    // console.log(featuredProducts);


    const sortedFeaturedProducts = [...featuredProducts].sort((a, b) => {
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
                        <Card key={item.id} item={item} refetch={refetch} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FeaturedProducts;
