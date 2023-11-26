/* eslint-disable react/prop-types */

import { useSearchParams } from "react-router-dom";
import TagCard from "./TagCard";
import { tagsList } from "./tagsList";

const Tags = () => {
    const [params, setPsrams] = useSearchParams()
    const selectedTag = params.get('tag')
    return (
        <div className="max-h-screen overflow-y-auto scroll-smooth md:scroll-auto">
            {tagsList.map(tag => (
                <TagCard
                    key={tag.label}
                    title={tag.label}
                    icon={tag.icon} 
                    selected ={selectedTag === tag.label}/>))}
        </div>
    );
};

export default Tags;