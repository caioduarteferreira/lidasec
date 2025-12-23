import { db } from './server/db.js';
import { users, blogPosts, blogCategories, blogTags, blogPostTags } from './drizzle/schema.js';
import { eq } from 'drizzle-orm';

async function seedBlogPosts() {
  console.log('🌱 Seeding blog posts...');

  // Buscar ou criar usuário admin
  let admin = await db.select().from(users).where(eq(users.email, 'admin@lidasec.com.br')).limit(1);
  
  if (admin.length === 0) {
    const [newAdmin] = await db.insert(users).values({
      email: 'admin@lidasec.com.br',
      name: 'Admin Lidasec',
      role: 'admin'
    }).returning();
    admin = [newAdmin];
  }

  const adminId = admin[0].id;

  // Criar categorias
  const categories = await db.insert(blogCategories).values([
    { name: 'Securitização', slug: 'securitizacao' },
    { name: 'Mercado Financeiro', slug: 'mercado-financeiro' },
    { name: 'Regulamentação', slug: 'regulamentacao' }
  ]).returning();

  // Criar tags
  const tags = await db.insert(blogTags).values([
    { name: 'Recebíveis', slug: 'recebiveis' },
    { name: 'FIDC', slug: 'fidc' },
    { name: 'CVM', slug: 'cvm' }
  ]).returning();

  // Criar posts
  const posts = [
    {
      title: 'O que é Securitização de Recebíveis e Como Funciona',
      slug: 'o-que-e-securitizacao-de-recebiveis',
      excerpt: 'Entenda como a securitização pode transformar os recebíveis da sua empresa em capital de giro imediato.',
      content: '# O que é Securitização de Recebíveis\n\nA securitização de recebíveis é um processo financeiro que transforma direitos creditórios em títulos negociáveis no mercado de capitais.',
      categoryId: categories[0].id,
      authorId: adminId,
      status: 'published',
      publishedAt: new Date()
    },
    {
      title: 'FIDC: Entenda os Fundos de Investimento em Direitos Creditórios',
      slug: 'fidc-fundos-investimento-direitos-creditorios',
      excerpt: 'Descubra como os FIDCs funcionam e por que são uma excelente opção para empresas e investidores.',
      content: '# FIDC: Fundos de Investimento em Direitos Creditórios\n\nOs Fundos de Investimento em Direitos Creditórios (FIDC) são veículos de investimento regulados pela CVM.',
      categoryId: categories[0].id,
      authorId: adminId,
      status: 'published',
      publishedAt: new Date(Date.now() - 86400000)
    },
    {
      title: 'Mercado de Securitização no Brasil: Tendências para 2025',
      slug: 'mercado-securitizacao-brasil-tendencias-2025',
      excerpt: 'Análise das principais tendências e oportunidades no mercado de securitização brasileiro.',
      content: '# Mercado de Securitização no Brasil\n\nO mercado de securitização brasileiro vem apresentando crescimento consistente.',
      categoryId: categories[1].id,
      authorId: adminId,
      status: 'published',
      publishedAt: new Date(Date.now() - 172800000)
    }
  ];

  const createdPosts = await db.insert(blogPosts).values(posts).returning();

  console.log(`✅ Created ${createdPosts.length} blog posts`);
}

seedBlogPosts()
  .then(() => {
    console.log('✅ Blog seeding completed!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Error seeding blog:', error);
    process.exit(1);
  });
