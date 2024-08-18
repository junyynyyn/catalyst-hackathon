import prisma from '../lib/prisma'

// Functions relating to currency calculations

async function get_items(game_string: string) {
    const items: any = await prisma.item.findMany({
        where: {game: game_string, price: {gt:0}},
        orderBy: {
            id: 'asc'
        }
    });
    return items;
}

async function get_item(item_id: number) {
    const item: any = await prisma.item.findFirst({
        where: {id: item_id}
    });
    return item;
}

export {
    get_items,
    get_item
};