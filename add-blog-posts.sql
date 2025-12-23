-- Inserir usuário admin se não existir
INSERT INTO users (email, name, role, created_at, updated_at)
VALUES ('admin@lidasec.com.br', 'Admin Lidasec', 'admin', NOW(), NOW())
ON CONFLICT (email) DO NOTHING;

-- Inserir categorias
INSERT INTO blog_categories (name, slug, created_at, updated_at)
VALUES 
  ('Securitização', 'securitizacao', NOW(), NOW()),
  ('Mercado Financeiro', 'mercado-financeiro', NOW(), NOW()),
  ('Regulamentação', 'regulamentacao', NOW(), NOW()),
  ('Dicas Empresariais', 'dicas-empresariais', NOW(), NOW())
ON CONFLICT (slug) DO NOTHING;

-- Inserir tags
INSERT INTO blog_tags (name, slug, created_at, updated_at)
VALUES 
  ('Recebíveis', 'recebiveis', NOW(), NOW()),
  ('FIDC', 'fidc', NOW(), NOW()),
  ('CVM', 'cvm', NOW(), NOW()),
  ('Capital de Giro', 'capital-de-giro', NOW(), NOW()),
  ('Crédito', 'credito', NOW(), NOW())
ON CONFLICT (slug) DO NOTHING;

-- Inserir posts
INSERT INTO blog_posts (title, slug, excerpt, content, category_id, author_id, status, published_at, created_at, updated_at, view_count)
SELECT 
  'O que é Securitização de Recebíveis e Como Funciona',
  'o-que-e-securitizacao-de-recebiveis',
  'Entenda como a securitização pode transformar os recebíveis da sua empresa em capital de giro imediato.',
  '# O que é Securitização de Recebíveis

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

Entre em contato com a Lidasec para avaliar se a securitização é a solução ideal para sua empresa.',
  (SELECT id FROM blog_categories WHERE slug = 'securitizacao' LIMIT 1),
  (SELECT id FROM users WHERE email = 'admin@lidasec.com.br' LIMIT 1),
  'published',
  NOW(),
  NOW(),
  NOW(),
  0
ON CONFLICT (slug) DO NOTHING;

INSERT INTO blog_posts (title, slug, excerpt, content, category_id, author_id, status, published_at, created_at, updated_at, view_count)
SELECT 
  'FIDC: Entenda os Fundos de Investimento em Direitos Creditórios',
  'fidc-fundos-investimento-direitos-creditorios',
  'Descubra como os FIDCs funcionam e por que são uma excelente opção para empresas e investidores.',
  '# FIDC: Fundos de Investimento em Direitos Creditórios

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

A Lidasec possui expertise na estruturação de FIDCs personalizados para diferentes perfis de empresas.',
  (SELECT id FROM blog_categories WHERE slug = 'securitizacao' LIMIT 1),
  (SELECT id FROM users WHERE email = 'admin@lidasec.com.br' LIMIT 1),
  'published',
  NOW() - INTERVAL '1 day',
  NOW() - INTERVAL '1 day',
  NOW(),
  0
ON CONFLICT (slug) DO NOTHING;

INSERT INTO blog_posts (title, slug, excerpt, content, category_id, author_id, status, published_at, created_at, updated_at, view_count)
SELECT 
  'Mercado de Securitização no Brasil: Tendências para 2025',
  'mercado-securitizacao-brasil-tendencias-2025',
  'Análise das principais tendências e oportunidades no mercado de securitização brasileiro.',
  '# Mercado de Securitização no Brasil: Tendências para 2025

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

## Oportunidades para 2025

- **Expansão do Mercado**: Mais empresas descobrindo os benefícios da securitização
- **Inovação Financeira**: Novos produtos e estruturas
- **Taxas Competitivas**: Ambiente de juros favorável
- **Profissionalização**: Crescimento de securitizadoras especializadas

A Lidasec está preparada para aproveitar essas tendências e oferecer as melhores soluções aos seus clientes.',
  (SELECT id FROM blog_categories WHERE slug = 'mercado-financeiro' LIMIT 1),
  (SELECT id FROM users WHERE email = 'admin@lidasec.com.br' LIMIT 1),
  'published',
  NOW() - INTERVAL '2 days',
  NOW() - INTERVAL '2 days',
  NOW(),
  0
ON CONFLICT (slug) DO NOTHING;

INSERT INTO blog_posts (title, slug, excerpt, content, category_id, author_id, status, published_at, created_at, updated_at, view_count)
SELECT 
  'Regulamentação CVM: O que Empresas Precisam Saber',
  'regulamentacao-cvm-empresas',
  'Guia completo sobre a regulamentação da CVM para operações de securitização.',
  '# Regulamentação CVM para Securitização

A Comissão de Valores Mobiliários (CVM) é o órgão responsável por regular o mercado de securitização no Brasil, garantindo transparência e segurança para todos os participantes.

## Principais Normas

### Instrução CVM 356/01
Regula os Fundos de Investimento em Direitos Creditórios (FIDC), estabelecendo requisitos de constituição, regras de funcionamento e obrigações de divulgação.

### Instrução CVM 400/03
Trata das ofertas públicas de distribuição de valores mobiliários, incluindo Certificados de Recebíveis (CRI/CRA).

## Requisitos para Empresas

Para participar de operações de securitização, as empresas devem:

1. **Documentação Adequada**: Contratos, duplicatas e comprovantes de recebíveis
2. **Transparência Financeira**: Demonstrações financeiras atualizadas
3. **Qualidade dos Recebíveis**: Histórico de pagamento dos devedores
4. **Compliance**: Adequação às normas regulatórias

## Proteções aos Investidores

A regulamentação CVM garante segregação patrimonial, informações periódicas, auditoria independente e regras de governança.

Nossa equipe especializada garante que todas as operações estejam em total conformidade com a regulamentação CVM.',
  (SELECT id FROM blog_categories WHERE slug = 'regulamentacao' LIMIT 1),
  (SELECT id FROM users WHERE email = 'admin@lidasec.com.br' LIMIT 1),
  'published',
  NOW() - INTERVAL '3 days',
  NOW() - INTERVAL '3 days',
  NOW(),
  0
ON CONFLICT (slug) DO NOTHING;

INSERT INTO blog_posts (title, slug, excerpt, content, category_id, author_id, status, published_at, created_at, updated_at, view_count)
SELECT 
  '5 Sinais de que sua Empresa Precisa de Capital de Giro',
  '5-sinais-empresa-precisa-capital-giro',
  'Identifique os principais indicadores de que é hora de buscar soluções de capital de giro.',
  '# 5 Sinais de que sua Empresa Precisa de Capital de Giro

O capital de giro é essencial para manter as operações diárias da empresa funcionando. Identificar quando é necessário reforçá-lo pode evitar problemas maiores.

## 1. Dificuldade para Pagar Fornecedores

Se sua empresa está constantemente negociando prazos ou atrasando pagamentos a fornecedores, é um sinal claro de falta de capital de giro.

**Solução**: A securitização de recebíveis pode antecipar valores e normalizar o fluxo de pagamentos.

## 2. Perda de Oportunidades de Negócio

Quando você precisa recusar pedidos ou oportunidades por falta de recursos para executá-los, está perdendo receita potencial.

## 3. Estoque Desbalanceado

Tanto o excesso quanto a falta de estoque podem indicar problemas de capital de giro.

## 4. Dependência de Descontos

Se sua empresa frequentemente oferece descontos significativos para receber à vista, pode estar sacrificando margem por necessidade de caixa imediato.

## 5. Crescimento Limitado

A falta de recursos para investir em marketing, contratações ou expansão indica que o capital de giro está limitando o potencial da empresa.

## Como Resolver

A Lidasec oferece soluções de securitização que não comprometem limite de crédito bancário, têm taxas competitivas e proporcionam aprovação rápida.

Entre em contato e descubra como podemos ajudar sua empresa a crescer com segurança.',
  (SELECT id FROM blog_categories WHERE slug = 'dicas-empresariais' LIMIT 1),
  (SELECT id FROM users WHERE email = 'admin@lidasec.com.br' LIMIT 1),
  'published',
  NOW() - INTERVAL '4 days',
  NOW() - INTERVAL '4 days',
  NOW(),
  0
ON CONFLICT (slug) DO NOTHING;
