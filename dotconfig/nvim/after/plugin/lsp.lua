local lspconfig = require('lspconfig')
local capabilities = require('cmp_nvim_lsp').default_capabilities()

-- setup lsp servers
lspconfig.basedpyright.setup({ capabilities = capabilities })

lspconfig.tsserver.setup({
  filetypes = {
    "javascript",
    "typescript",
  },
  capabilities = capabilities,
})
