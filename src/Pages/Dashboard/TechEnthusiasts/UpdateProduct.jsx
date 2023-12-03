import { useLoaderData } from "react-router-dom";
import UpdateProductForm from "../../../Components/DashboardCmp/UpdateProductCmp/UpdateProductForm";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { uploadImage } from "../../../API/uploadImage";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'
import { updateProductInfo } from "../../../API/products";

const UpdateProduct = () => {
    const productForUpdate = useLoaderData();
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
    const { user } = useAuth();
    const navigate = useNavigate()

    const [tags, setTags] = useState(productForUpdate.tags || []);

    const [suggestions, setSuggestions] = useState([
        { id: '1', text: 'Smartphones' },
        { id: '2', text: 'Laptops' },
        { id: '3', text: 'Tablets' },
        { id: '4', text: 'Smartwatches' },
        { id: '5', text: 'Cameras' },
        { id: '6', text: 'Headphones' },
    ]);

    const handleDelete = (i) => {
        const newTags = [...tags];
        newTags.splice(i, 1);
        setTags(newTags);
    };

    const handleAddition = (tag) => {
        setTags([...tags, tag]);
    };

    console.log(tags)


    const handleUpdateFormSubmit = async (e) => {
        setLoading(true);

        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const image = form.image.files[0]
        const image_url = await uploadImage(image)
        const description = form.description.value;

        const productTags = tags;

        const externalLinks = form.externalLinks.value;
        const updatedProduct = {
            productName,
            tags: productTags,
            description,
            image: image_url?.data?.display_url,
            externalLinks:externalLinks
        };
    
      
        console.log("updatedProduct",updatedProduct);

        try {
            const data = await updateProductInfo(productForUpdate._id, updatedProduct);
           console.log(data)
           toast.success("product Updated successfully ")
           navigate('/dashboard/myProducts');
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleImageChange = image => {
        setUploadButtonText(image.name)
    }

    return (
        <div className="font-mono">
            <Helmet>
                <title>TLI | Update Product</title>
            </Helmet>

            <UpdateProductForm
                productForUpdate={productForUpdate}
                loading={loading}
                uploadButtonText={uploadButtonText}
                user={user}
                tags={tags}
                suggestions={suggestions}
                handleImageChange={handleImageChange}
                handleUpdateFormSubmit={handleUpdateFormSubmit}
                handleDelete={handleDelete}
                handleAddition={handleAddition} />
        </div>
    );
};

export default UpdateProduct;