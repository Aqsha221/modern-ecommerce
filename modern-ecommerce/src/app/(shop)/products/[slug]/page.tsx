import { GetServerSideProps } from 'next';
import { prisma } from '@/lib/prisma';
import { Product } from '@/types';

interface ProductPageProps {
  product: Product | null;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-auto" />
      <p className="mt-4">{product.description}</p>
      <p className="mt-2 text-lg font-semibold">${product.price}</p>
      {/* Add to cart button and other functionalities can be added here */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const product = await prisma.product.findUnique({
    where: { slug },
  });

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;