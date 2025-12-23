import { db } from './drizzle/db.js';
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
    { name: 'Regulamentação', slug: 'regulamentacao' },
    { name: 'Dicas Empresariais', slug: 'dicas-empresariais' }
  ]).returning();

  // Criar tags
  const tags = await db.insert(blogTags).values([
    { name: 'Recebíveis', slug: 'recebiveis' },
    { name: 'FIDC', slug: 'fidc' },
    { name: 'CVM', slug: 'cvm' },
    { name: 'Capital de Giro', slug: 'capital-de-giro' },
    { name: 'Crédito', slug: 'credito' },
    { name: 'Investimentos', slug: 'investimentos' }
  ]).returning();

  // Criar posts
  const posts = [
    {
      title: 'O que é Securitização de Recebíveis e Como Funciona',
      slug: 'o-que-e-securitizacao-de-recebiveis',
      excerpt: 'Entenda como a securitização pode transformar os recebíveis da sua empresa em capital de giro imediato.',
      content: `# O que é Securitização de Recebíveis

A securitização de recebíveis é um processo financeiro que transforma direitos creditórios em títulos negociáveis no mercado de capitais. Este mecanismo permite que empresas antecipem o recebimento de valores futuros, melhorando significativamente seu fluxo de caixa.

## Como Funciona

O processo de securitização envolve três etapas principais:

1. **Originação**: A empresa identifica os recebíveis que deseja securitizar (duplicatas, cheques, contratos)
2. **Estruturação**: Uma securitizadora analisa e estrutura a operação, criando títulos lastreados nesses recebíveis
3. **Distribuição**: Os títulos são oferecidos a investidores, e a empresa recebe o valor antecipado

## Vantagens da Securitização

- **Liquidez Imediata**: Transforme recebíveis de longo prazo em capital disponível
- **Taxas Competitivas**: Geralmente mais vantajosas que empréstimos tradicionais
- **Não Compromete Limite de Crédito**: Não aparece como dívida no balanço
- **Flexibilidade**: Pode ser estruturada conforme as necessidades da empresa

## Quando Considerar a Securitização

A securitização é ideal para empresas que:
- Possuem recebíveis de qualidade (bons pagadores)
- Precisam de capital de giro para expansão
- Buscam alternativas aos empréstimos bancários tradicionais
- Querem otimizar sua estrutura de capital

Entre em contato com a Lidasec para avaliar se a securitização é a solução ideal para sua empresa.`,
      categoryId: categories[0].id,
      authorId: adminId,
      status: 'published',
      publishedAt: new Date()
    },
    {
      title: 'FIDC: Entenda os Fundos de Investimento em Direitos Creditórios',
      slug: 'fidc-fundos-investimento-direitos-creditorios',
      excerpt: 'Descubra como os FIDCs funcionam e por que são uma excelente opção para empresas e investidores.',
      content: `# FIDC: Fundos de Investimento em Direitos Creditórios

Os Fundos de Investimento em Direitos Creditórios (FIDC) são veículos de investimento regulados pela CVM que aplicam recursos em direitos creditórios, como duplicatas, cheques e contratos de crédito.

## Estrutura de um FIDC

Um FIDC é composto por:

- **Cedente**: Empresa que vende seus recebíveis ao fundo
- **Administrador**: Instituição financeira responsável pela gestão
- **Custodiante**: Guarda os ativos do fundo
- **Cotistas**: Investidores que compram cotas do fundo

## Tipos de FIDC

### FIDC Padronizado
Investe em recebíveis de diversos cedentes, diluindo riscos.

### FIDC Dedicado
Focado em recebíveis de um único cedente ou grupo econômico.

### FIDC-NP (Não Padronizado)
Destinado a investidores qualificados, com maior flexibilidade.

## Vantagens para Empresas

- **Acesso ao Mercado de Capitais**: Alternativa ao crédito bancário
- **Custo Competitivo**: Taxas geralmente menores que financiamentos tradicionais
- **Preservação de Relacionamento Bancário**: Não compromete linhas de crédito
- **Melhora do Balanço**: Operação não aparece como endividamento

## Regulamentação

Os FIDCs são regulados pela Instrução CVM 356/01 e suas alterações, garantindo transparência e segurança para todos os envolvidos.

A Lidasec possui expertise na estruturação de FIDCs personalizados para diferentes perfis de empresas.`,
      categoryId: categories[0].id,
      authorId: adminId,
      status: 'published',
      publishedAt: new Date(Date.now() - 86400000) // 1 dia atrás
    },
    {
      title: 'Mercado de Securitização no Brasil: Tendências para 2025',
      slug: 'mercado-securitizacao-brasil-tendencias-2025',
      excerpt: 'Análise das principais tendências e oportunidades no mercado de securitização brasileiro.',
      content: `# Mercado de Securitização no Brasil: Tendências para 2025

O mercado de securitização brasileiro vem apresentando crescimento consistente, impulsionado pela busca por alternativas de financiamento e pela sofisticação do mercado de capitais.

## Números do Setor

Em 2024, o mercado de securitização movimentou mais de R$ 150 bilhões, representando um crescimento de 25% em relação ao ano anterior. As projeções para 2025 são ainda mais otimistas.

## Principais Tendências

### 1. Digitalização e Tecnologia

A adoção de blockchain e contratos inteligentes está revolucionando o processo de securitização, tornando-o mais ágil e transparente.

### 2. Diversificação de Ativos

Além dos recebíveis tradicionais, novos tipos de ativos estão sendo securitizados:
- Recebíveis de energia solar
- Royalties de propriedade intelectual
- Recebíveis de plataformas digitais

### 3. ESG e Securitização Verde

Crescimento de operações de securitização vinculadas a critérios ambientais, sociais e de governança.

### 4. Acesso de Médias Empresas

Redução de barreiras de entrada, permitindo que empresas menores acessem o mercado de securitização.

## Regulamentação em Evolução

A CVM tem trabalhado na modernização das regras, facilitando operações e aumentando a proteção aos investidores.

## Oportunidades para 2025

- **Expansão do Mercado**: Mais empresas descobrindo os benefícios da securitização
- **Inovação Financeira**: Novos produtos e estruturas
- **Taxas Competitivas**: Ambiente de juros favorável
- **Profissionalização**: Crescimento de securitizadoras especializadas

A Lidasec está preparada para aproveitar essas tendências e oferecer as melhores soluções aos seus clientes.`,
      categoryId: categories[1].id,
      authorId: adminId,
      status: 'published',
      publishedAt: new Date(Date.now() - 172800000) // 2 dias atrás
    },
    {
      title: 'Regulamentação CVM: O que Empresas Precisam Saber',
      slug: 'regulamentacao-cvm-empresas',
      excerpt: 'Guia completo sobre a regulamentação da CVM para operações de securitização.',
      content: `# Regulamentação CVM para Securitização

A Comissão de Valores Mobiliários (CVM) é o órgão responsável por regular o mercado de securitização no Brasil, garantindo transparência e segurança para todos os participantes.

## Principais Normas

### Instrução CVM 356/01
Regula os Fundos de Investimento em Direitos Creditórios (FIDC), estabelecendo:
- Requisitos de constituição
- Regras de funcionamento
- Limites de concentração
- Obrigações de divulgação

### Instrução CVM 400/03
Trata das ofertas públicas de distribuição de valores mobiliários, incluindo Certificados de Recebíveis (CRI/CRA).

### Resolução CVM 60/22
Modernizou as regras de fundos de investimento, incluindo FIDCs, trazendo mais flexibilidade e eficiência.

## Requisitos para Empresas

Para participar de operações de securitização, as empresas devem:

1. **Documentação Adequada**: Contratos, duplicatas e comprovantes de recebíveis
2. **Transparência Financeira**: Demonstrações financeiras atualizadas
3. **Qualidade dos Recebíveis**: Histórico de pagamento dos devedores
4. **Compliance**: Adequação às normas regulatórias

## Proteções aos Investidores

A regulamentação CVM garante:
- **Segregação Patrimonial**: Ativos do fundo separados do patrimônio da administradora
- **Informações Periódicas**: Relatórios mensais e anuais
- **Auditoria Independente**: Verificação externa das operações
- **Regras de Governança**: Comitê de investimentos e políticas claras

## Vantagens da Regulamentação

- **Credibilidade**: Operações reguladas transmitem confiança
- **Acesso a Investidores Qualificados**: Mercado mais amplo
- **Padronização**: Processos claros e conhecidos
- **Proteção Legal**: Framework jurídico sólido

## Como a Lidasec Pode Ajudar

Nossa equipe especializada garante que todas as operações estejam em total conformidade com a regulamentação CVM, proporcionando segurança e tranquilidade aos nossos clientes.`,
      categoryId: categories[2].id,
      authorId: adminId,
      status: 'published',
      publishedAt: new Date(Date.now() - 259200000) // 3 dias atrás
    },
    {
      title: '5 Sinais de que sua Empresa Precisa de Capital de Giro',
      slug: '5-sinais-empresa-precisa-capital-giro',
      excerpt: 'Identifique os principais indicadores de que é hora de buscar soluções de capital de giro.',
      content: `# 5 Sinais de que sua Empresa Precisa de Capital de Giro

O capital de giro é essencial para manter as operações diárias da empresa funcionando. Identificar quando é necessário reforçá-lo pode evitar problemas maiores.

## 1. Dificuldade para Pagar Fornecedores

Se sua empresa está constantemente negociando prazos ou atrasando pagamentos a fornecedores, é um sinal claro de falta de capital de giro.

**Solução**: A securitização de recebíveis pode antecipar valores e normalizar o fluxo de pagamentos.

## 2. Perda de Oportunidades de Negócio

Quando você precisa recusar pedidos ou oportunidades por falta de recursos para executá-los, está perdendo receita potencial.

**Solução**: Capital de giro adicional permite aceitar mais pedidos e expandir as operações.

## 3. Estoque Desbalanceado

Tanto o excesso quanto a falta de estoque podem indicar problemas de capital de giro:
- **Excesso**: Capital parado que poderia estar sendo usado em outras áreas
- **Falta**: Impossibilidade de atender demanda por falta de recursos para compra

**Solução**: Equilibrar o fluxo de caixa permite gestão mais eficiente do estoque.

## 4. Dependência de Descontos de Clientes

Se sua empresa frequentemente oferece descontos significativos para receber à vista, pode estar sacrificando margem por necessidade de caixa imediato.

**Solução**: Com capital de giro adequado, você pode oferecer prazos competitivos sem comprometer a rentabilidade.

## 5. Crescimento Limitado

A falta de recursos para investir em marketing, contratações ou expansão indica que o capital de giro está limitando o potencial da empresa.

**Solução**: Securitização libera recursos sem comprometer o balanço patrimonial.

## Como Resolver

A Lidasec oferece soluções de securitização que:
- Não comprometem limite de crédito bancário
- Têm taxas competitivas
- Proporcionam aprovação rápida
- Oferecem flexibilidade nas operações

Entre em contato e descubra como podemos ajudar sua empresa a crescer com segurança.`,
      categoryId: categories[3].id,
      authorId: adminId,
      status: 'published',
      publishedAt: new Date(Date.now() - 345600000) // 4 dias atrás
    }
  ];

  const createdPosts = await db.insert(blogPosts).values(posts).returning();

  // Associar tags aos posts
  const postTagAssociations = [
    { postId: createdPosts[0].id, tagId: tags[0].id },
    { postId: createdPosts[0].id, tagId: tags[3].id },
    { postId: createdPosts[1].id, tagId: tags[1].id },
    { postId: createdPosts[1].id, tagId: tags[5].id },
    { postId: createdPosts[2].id, tagId: tags[0].id },
    { postId: createdPosts[2].id, tagId: tags[4].id },
    { postId: createdPosts[3].id, tagId: tags[2].id },
    { postId: createdPosts[3].id, tagId: tags[0].id },
    { postId: createdPosts[4].id, tagId: tags[3].id },
    { postId: createdPosts[4].id, tagId: tags[4].id }
  ];

  await db.insert(blogPostTags).values(postTagAssociations);

  console.log(`✅ Created ${createdPosts.length} blog posts with categories and tags`);
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
