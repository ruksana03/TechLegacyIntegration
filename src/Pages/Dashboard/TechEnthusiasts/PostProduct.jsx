import useAuth from "../../../Hooks/useAuth";


const PostProduct = () => {
    const {user} = useAuth();
    return (
        <div className="font-mono">
            PostProduct
        </div>
    );
};

export default PostProduct;