/* eslint-disable react/prop-types */
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string'
import { gradientBorder } from "../../Shared/StyleJS/border";

const TagCard = ({ title, icon: Icon, selected }) => {
    const [params, setParams] = useSearchParams()
    const navigate = useNavigate();

    const handleClicked = () => {
        let activeQuery = {}
        if (params) {
            activeQuery = qs.parse(params.toString())
        }
        const updatedActiveQuery = { ...activeQuery, tag: title }

        const url = qs.stringifyUrl({
            url: '/',
            query: updatedActiveQuery,
        })

        navigate(url)
    }

    return (
        <div
            onClick={handleClicked}
            className={`
        flex
        justify-center
        items-center
        md:flex-col
        md:justify-center
        md:items-center 
        lg:flex-row
        lg:justify-start 
        border-[1px] 
        my-2 
        px-2 
        py-1 
        gap-4
        cursor-pointer 
        shadow-md
        shadow-black
        ${selected ?
                    'bg-gradient-to-b from-[#E63B60] via-[#067FD0] to-[#0D253F] text-white' : 'text-neutral-500'}`} 
            style={{ ...gradientBorder }}>
            <Icon className='text-2xl' />
            <p className="hidden md:block lg:block">{title}</p>
        </div>
    );
};

export default TagCard;
