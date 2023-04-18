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

export const sortByKey = (data: any[], key: string, order: string) => {
    const sortOrder = order === "desc" ? "desc" : 'asc';
    return sortOrder === "desc" ? data.sort((a, b) => b[key] - a[key]) : data.sort((a, b) => a[key] - b[key]);
}

export const filterByColor = (data: any[], color: string) => {
    return color !== "" ? data.filter(item => item.color.split(',').includes(color.toUpperCase())) : data;
}