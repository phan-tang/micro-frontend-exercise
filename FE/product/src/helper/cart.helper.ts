import globalStorage, { IItemCart } from "@/utils/loadStorage";

export const addToCart = (item: any) => {
    const data: IItemCart = {
        id: item.id,
        title: item.name,
        qty: 1,
        price: item.price,
        img: item.list_img?.[0].url || require('@/assets/img/default.png')
    }
    globalStorage.addItemToCart(data);
}