# Configuração da IA para PDF Converter

## Configuração da OpenAI API

Para usar as funcionalidades de IA (resumos, markdown e análise), você precisa configurar a API key da OpenAI:

### 1. Obter API Key
1. Acesse [OpenAI Platform](https://platform.openai.com/api-keys)
2. Faça login ou crie uma conta
3. Clique em "Create new secret key"
4. Copie a chave gerada (deve começar com `sk-`)

### 2. Configurar no Projeto

#### Opção A: Variável de Ambiente (Recomendado)
1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione a seguinte linha:
```
OPENAI_API_KEY=sk-sua-chave-aqui
```
3. Reinicie o servidor de desenvolvimento

#### Opção B: Configuração no Cliente (Alternativo)
1. Abra o console do navegador (F12)
2. Execute o seguinte comando:
```javascript
localStorage.setItem('OPENAI_API_KEY', 'sk-sua-chave-aqui')
```
3. Recarregue a página

### 3. Funcionalidades Disponíveis

#### 📝 Resumos Inteligentes
- Gera resumos concisos e bem estruturados
- Captura os pontos principais do documento
- Máximo de 300 palavras

#### 📄 Markdown Formatado
- Converte conteúdo em markdown bem estruturado
- Inclui títulos, subtítulos e formatação
- Pronto para uso em blogs, documentação, etc.

#### 🧠 Análise Completa
- Resumo detalhado do documento
- Pontos-chave identificados
- Tópicos principais categorizados

### 4. Solução de Problemas

#### Erro: "OpenAI API key não configurada"
Se você está vendo este erro:

1. **Verifique se o arquivo `.env.local` existe** na raiz do projeto
2. **Confirme que a chave está correta** (deve começar com `sk-`)
3. **Reinicie o servidor** após adicionar a variável de ambiente
4. **Verifique se não há espaços extras** na linha da variável de ambiente

#### Erro: "API key inválida"
1. **Verifique se a chave está correta** no arquivo `.env.local`
2. **Confirme que sua conta OpenAI tem créditos** disponíveis
3. **Verifique se a chave não expirou** na plataforma OpenAI

### 5. Limitações
- Arquivos muito grandes são truncados para otimizar tokens
- Requer conexão com internet para processamento
- Usa o modelo GPT-3.5-turbo da OpenAI

### 6. Custos
- Cada análise consome tokens da OpenAI
- Consulte [OpenAI Pricing](https://openai.com/pricing) para detalhes
- Recomendamos monitorar o uso para controlar custos

### 7. Segurança
⚠️ **Importante**: 
- Nunca compartilhe sua chave da API
- Não inclua a chave em código que será versionado
- O arquivo `.env.local` já está no `.gitignore` para sua segurança
- Use apenas chaves de teste para desenvolvimento 