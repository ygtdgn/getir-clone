import {AiOutlinePlus} from 'react-icons/ai'


export default function ProductItem({product}) {
    return(
        <div className="p-3 bg-white">
			<picture className="relative block">
				<button className="w-8 h-8 flex absolute top-0 right-2 border shadow-md rounded-lg border-gray-200 text-purple-700 transition-colors bg-white hover:bg-purple-50 items-center justify-center">
					<AiOutlinePlus />
				</button>
				<img src={product.image} className="w-full"/>
			</picture>
            <div className="text-sm font-semibold text-brand-color ">{product.title}</div>
            <div className="text-sm font-semibold text-gray-900">{product.price}</div>
            <div className="text-sm text-gray-500">{product.alt}</div>
        </div>
    )



}