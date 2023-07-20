import { toast } from "react-toastify";
import { useProductValue } from "../productContext";
import { useUserValue } from "../userContext";

const ProductCard = ({product}) => {
    const {isLoggedIn,pageToggler} = useUserValue();
    const {removeFromCart,addToCart,navigate,loadingProduct} = useProductValue();
    // console.log(cart)
    return (<div id="card" className=" cursor-pointer transition ease-in-out delay-150 border flex flex-col w-[300px] items-left p-5 m-5 shadow-2xl ">
            <img 
                src={product.url}
                className="w-[200px] h-[300px] m-2"  />
                <h1 className="font-bold m-2">{product.name}</h1>
                <h1 className="font-bold m-2">&#8377;{product.price}</h1>
                {pageToggler === 'cart' ? <div className="flex flex-row">
                <span><i className="fa-solid fa-minus"></i></span>
                <h1>{product.qty}</h1>
                <span><i className="fa-solid fa-plus"></i></span>
                </div> : undefined}
                {pageToggler === 'cart' ? <button onClick={() => removeFromCart(product)} className="m-2 bg-red-800 text-white p-2 hover:shadow-2xl hover:text-black ">Remove from cart</button> : <button onClick={isLoggedIn ? () => addToCart(product) : () => (navigate('/sign-in')) } className="m-2 bg-zinc-950 text-white p-2 hover:bg-lime-400 hover:text-black">{loadingProduct[product.id] ? 'Adding to cart' : 'Add to cart'}</button>}
                <h1 className="desc hidden transition ease-in-out m-2">{product.description}</h1>

    </div>)
}

export default ProductCard;