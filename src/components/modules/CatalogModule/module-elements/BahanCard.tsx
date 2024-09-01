import { Minus, Plus, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { catalogType } from "../catalogData";
import Image from "next/image";
import { useCartContext } from "@/components/contexts/CartContext";
import { ProductType } from "@/components/contexts/type";

function BahanCard({item} : {item: catalogType}) {
    const [inCart, setInCart] = useState(false);
    const { 
        addItemToCart, 
        deleteItemFromCart, 
        reduceQuantity, 
        cart } = useCartContext()
        
    const quantity = cart?.find(cartItem => cartItem.name == item.name)?.quantity ?? 0
    const handleAddToCart = () => {
        addItemToCart({
            name: item.name,
            price: item.price,
            image: item.image
        })
        setInCart(true)
    };

    const handleReduceQuantity = () => {
        if (quantity > 1) {
            reduceQuantity(item.name)
        } else {
            handleRemoveFromCart()
        }
    }

    const handleRemoveFromCart = () => {
        deleteItemFromCart(item.name)
        setInCart(false)
    };

    useEffect(() => {
        const isItemExist = cart.find(cartItem => cartItem.name == item.name)
        if (isItemExist) {
            setInCart(true)
        }
      }, []);
    

  return (
    <div>
                    <div style={{
                        width: 190,
                        height: 260,
                        position: 'relative',
                        background: 'white',
                        boxShadow: '0px 0px 9px rgba(0, 0, 0, 0.10)',
                        borderRadius: 14,
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={100}
                            height={75}
                            style={{
                                marginBottom: '10px'
                            }}
                        />

                        <div style={{
                            width: '100%',
                            textAlign: 'left'
                        }}>
                            <div style={{
                                color: 'black',
                                fontSize: 16,
                                fontFamily: 'Poppins',
                                fontWeight: '400',
                                wordWrap: 'break-word'
                            }}>{item.name}
                            </div>
                            <div style={{
                                color: '#4EA339',
                                fontSize: 18,
                                fontFamily: 'Poppins',
                                fontWeight: '500',
                                wordWrap: 'break-word'
                            }}>Rp{item.price.toLocaleString('ID-id')}
                            </div>
                            <div style={{
                                color: '#928A8A',
                                fontSize: 14,
                                fontFamily: 'Poppins',
                                fontWeight: '400',
                                wordWrap: 'break-word'
                            }}>Terjual {item.sold}
                            </div>
                        </div>

                        {!inCart && (
                            <div
                                onClick={handleAddToCart}
                                style={{
                                    width: 120,
                                    height: 30,
                                    background: 'linear-gradient(243deg, #ABCB92 0%, #4EA339 97%)',
                                    boxShadow: '0px 0px 10px 1px rgba(196.62, 231.80, 168.98, 0.80)',
                                    borderRadius: 3,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '10px'
                                }}
                            >
                <span style={{
                    color: 'white',
                    fontSize: 14,
                    fontFamily: 'Poppins',
                    fontWeight: '500',
                }}>Add to cart</span>
                            </div>
                        )}

                {inCart && (
                    <div className="flex items-center gap-3 mt-4">
                        <Trash2 size={20} className="hover:text-red-500 hover:cursor-pointer"
                                onClick={handleRemoveFromCart}/>
                        <div
                            onClick={handleReduceQuantity}
                            className="p-1 hover:bg-black/20 rounded-[50%] hover:cursor-pointer"
                        >
                            <Minus size={14}/>
                        </div>
                        {quantity}
                        <div
                            onClick={handleAddToCart}
                            className="p-1 hover:bg-black/20 rounded-[50%] hover:cursor-pointer"
                        >
                            <Plus size={14}/>
                        </div>
                    </div>
                )}
                    </div>
                </div>
  )
}

export default BahanCard;
