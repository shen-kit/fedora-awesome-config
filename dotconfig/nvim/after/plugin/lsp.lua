local lspconfig = require('lspconfig')

-- setup lsp servers
lspconfig.tsserver.setup({
  filetypes = {
    "javascript",
    "typescript",
  },
  capabilities = capabilities,
})

lspconfig.pyright.setup({})
