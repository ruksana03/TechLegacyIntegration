import { useState } from "react";
import PostForm from "../../../Components/DashboardCmp/PostProductCmp/PostForm";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { uploadImage } from "../../../API/uploadImage";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'
import { addProduct } from "../../../API/products";


const PostProduct = () => {
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
    const { user } = useAuth();
    const navigate = useNavigate()

    const [tags, setTags] = useState([]);
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

    const handleFormSubmit = async (e) => {
        setLoading(true);
    
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const image = form.image.files[0];
        const image_url = await uploadImage(image);
        const description = form.description.value;
        const owner = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
        };
        const productTags = tags;
    
        const externalLinks = form.externalLinks.value;
        const product = {
            productName,
            image: image_url?.data?.display_url,
            description,
            owner,
            tags: productTags,
            externalLinks,
            vote: 0,
            featured: 'Make Featured',
            status: 'pending',
        };
        console.log(product)
    
        try {
            const data = await addProduct(product);
            console.log(data);
            setUploadButtonText('Uploaded!');
            toast.success('Product Added!');
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
                <title>TLI | Post Product</title>
            </Helmet>
            <PostForm
                user={user}
                handleFormSubmit={handleFormSubmit}
                uploadButtonText={uploadButtonText}
                handleImageChange={handleImageChange}
                loading={loading} 
                tags={tags}
                suggestions={suggestions}
                handleDelete={handleDelete}
                handleAddition={handleAddition}/>
        </div>
    );
};

export default PostProduct;