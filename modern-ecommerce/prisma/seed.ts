const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    // Seed categories
    const categories = await prisma.category.createMany({
        data: [
            { name: 'Electronics' },
            { name: 'Fashion' },
            { name: 'Home & Garden' },
            { name: 'Sports' },
            { name: 'Toys' },
        ],
    });

    // Seed products
    const products = await prisma.product.createMany({
        data: [
            {
                name: 'Smartphone',
                price: 699.99,
                description: 'Latest model smartphone with advanced features.',
                categoryId: 1,
                imageUrl: 'https://example.com/smartphone.jpg',
                stock: 50,
            },
            {
                name: 'T-Shirt',
                price: 19.99,
                description: 'Comfortable cotton t-shirt.',
                categoryId: 2,
                imageUrl: 'https://example.com/tshirt.jpg',
                stock: 100,
            },
            {
                name: 'Garden Chair',
                price: 89.99,
                description: 'Stylish garden chair for outdoor relaxation.',
                categoryId: 3,
                imageUrl: 'https://example.com/garden-chair.jpg',
                stock: 30,
            },
            {
                name: 'Soccer Ball',
                price: 29.99,
                description: 'Official size soccer ball for practice and play.',
                categoryId: 4,
                imageUrl: 'https://example.com/soccer-ball.jpg',
                stock: 75,
            },
            {
                name: 'Action Figure',
                price: 14.99,
                description: 'Collectible action figure from your favorite movie.',
                categoryId: 5,
                imageUrl: 'https://example.com/action-figure.jpg',
                stock: 200,
            },
        ],
    });

    // Seed users
    const users = await prisma.user.createMany({
        data: [
            {
                email: 'user1@example.com',
                password: 'password123',
            },
            {
                email: 'user2@example.com',
                password: 'password123',
            },
        ],
    });

    console.log({ categories, products, users });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });