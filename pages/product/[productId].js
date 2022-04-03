import React from 'react'
import { useRouter } from 'next/router';
export default function productDetails() {
    const router = useRouter();
    const productId=router.query.productId;
    return (
        <div>product {productId} details</div>
    )
}
