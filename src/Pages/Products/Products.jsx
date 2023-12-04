/* eslint-disable react/prop-types */
import Tags from "../../Components/HomeComponents/AllTechTags/Tags";
// import { tagsList } from "../../Components/HomeComponents/AllTechTags/tagsList";
import ProductCard from "../../Components/ProductsComponents/ProductCard";
import { IoSearch } from "react-icons/io5";
import Container from "../../Components/Shared/Container";

import useAllProducts from "../../Hooks/useAllProducts";


const Products = () => {
    const {  AllProducts, loading, refetch } = useAllProducts();
    // console.log(AllProducts)
    const acceptedProducts = AllProducts.filter(product => product.status === 'Accepted');

    return (
        <Container>
            <div className="flex gap-4">
                <div>
                    <Tags />
                </div>
                <div className="">

                    <div className='text-sm mb-6 w-1/2 flex border-[1px] border-black justify-between rounded-l-full'>
                     <div className="w-full">
                     {/* <select
                            className='w-full px-4 py-3 rounded-full cu'
                            name='eachTag'
                        >
                            {tagsList.map(eachTag => (
                                <option value={tagsList.label} key={eachTag.label}>
                                    {eachTag.label}
                                </option>
                            ))}
                        </select> */}
                     </div>
                        <button className="px-5">
                            <IoSearch className="h-5 w-5" />
                        </button>
                    </div>

                    {loading && <p>Loading...</p>}

                    {!loading && acceptedProducts?.length === 0 && <p>No featured products available.</p>}

                    {!loading && acceptedProducts?.length > 0 && (
                        <div className="grid grid-col-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                            {acceptedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} refetch={refetch}/>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default Products;

