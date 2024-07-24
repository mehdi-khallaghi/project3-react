import "./Productbox.css"

function Product(){
    return (
        <div className="productbox">
            <img src="jquery.png" alt="jquery"/>
            <h2>jquery</h2>
            <p>jQuery is a JavaScript library designed to simplify 
                HTML DOM tree traversal and manipulation, as well as event handling,
                 CSS animations, and Ajax. It is free, open-source software using the 
                 permissive MIT License. As of August 2022, jQuery is used by 77% of the 
                 10 million most popular websites</p>
            <a href="#">buy this product</a>
        </div>
    )
}

export default Product;