import { Helmet } from "react-helmet-async";
import Container from "../../Components/Shared/Container";
import Tags from "../../Components/HomeComponents/AllTechTags/Tags";
import HomeBanner from "../../Components/HomeComponents/HomeBanner/HomeBanner";
import FeaturedProducts from "../../Components/HomeComponents/FeaturedProducts/FeaturedProducts";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>TLI | Home</title>
            </Helmet>
            {/* ----------home body start---------- */}
            <Container>

                <div className="grid grid-cols-12 gap-4 font-mono">

                    {/* all tags section  */}
                    <div className="col-span-3">
                        <Tags/>
                    </div>

                    {/*  Featured Products Section */}
                    <div className="col-span-7">
                       <div><HomeBanner/></div>
                       <div><FeaturedProducts/></div>
                    </div>

                    {/* Trending Products Section:  */}
                    <div className="col-span-2 min-h-screen border-2 border-black">
                        Trending Products Section
                    </div>

                </div>
            </Container>
            {/* ---------------home body end-------------  */}
        </>

    );
};

export default Home;