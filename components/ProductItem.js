/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';


export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <Image
          width={100}
          height={100}
          src={product.image}
          alt={product.name}
          className="rounded shadow object-cover h-64 w-full"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>₹{product.price}</p>
        {product.countInStock > 0 ? (
          <p className="text-green-600">
            {product.countInStock <= 20
              ? `Only ${product.countInStock} left`
              : 'In Stock'}
          </p>
        ) : (
          <p className="text-red-600">Out of Stock</p>
        )}
        <button
          className="primary-button"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
