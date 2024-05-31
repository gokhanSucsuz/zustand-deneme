import Show from "./Show"

const Home = () => {
    const { productDetail, loading, error, getProductDetail } = useStore();

    return (
        <div>
            <Show productId={count} />
        </div>
    );
};

export default Home;
