import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { Product } from "@/hooks/useProductsByCategory";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(price);
    };

    const renderStars = (rating: number) => {
        return (
            <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        size={12}
                        className={
                            star <= rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                        }
                    />
                ))}
                <span className="text-xs text-gray-500 ml-1">({rating})</span>
            </div>
        );
    };

    return (
        <Link to={`/product/${product.id}`} className="block group">
            <div className="bg-slate-900 border border-slate-700 rounded-lg shadow-lg shadow-black/40 hover:shadow-xl transition-shadow duration-200 overflow-hidden h-full flex flex-col">
                {/* Product Image - Fixed aspect square */}
                <div className="aspect-square overflow-hidden bg-slate-800 shrink-0">
                    {product.images.length > 0 ? (
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            onError={(e) => {
                                e.currentTarget.src = "/placeholder-image.png";
                            }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                            <span className="text-xs sm:text-sm">No Image</span>
                        </div>
                    )}
                </div>

                {/* Product Info - Standardized sections */}
                <div className="p-2 sm:p-3 md:p-4 flex-1 flex flex-col min-h-0">
                    {/* Title Section - Fixed height with line clamp */}
                    <div className="h-8 sm:h-10 md:h-12 mb-1 sm:mb-2">
                        <h3 className="font-medium text-white text-xs sm:text-sm line-clamp-2 group-hover:text-amber-300 transition-colors overflow-hidden h-full truncate">
                            {product.name}
                        </h3>
                    </div>

                    {/* Rating Section - Fixed height */}
                    <div className="h-5 mb-1 sm:mb-2 flex items-center">
                        {renderStars(product.rating)}
                    </div>

                    {/* Price Section - Fixed height, pushes to bottom */}
                    <div className="mt-auto flex items-center gap-1 sm:gap-2">
                        <span className="text-sm sm:text-base md:text-lg font-bold text-white">
                            {formatPrice(
                                product.discountPrice || product.price,
                            )}
                        </span>
                        {product.discountPrice &&
                            product.discountPrice !== product.price && (
                                <span className="text-xs sm:text-sm text-slate-400 line-through">
                                    {formatPrice(product.price)}
                                </span>
                            )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
