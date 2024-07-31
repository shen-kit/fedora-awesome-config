-- lsp keymaps
vim.api.nvim_create_autocmd('LspAttach', {
  desc = 'LSP actions',
  callback = function()
    local bufmap = function(mode, lhs, rhs)
      local opts = {buffer = true}
      vim.keymap.set(mode, lhs, rhs, opts)
    end

    bufmap('n', 'K', '<cmd>lua vim.lsp.buf.hover()<cr>') -- Displays hover information about the symbol under the cursor
    bufmap('n', 'gd', '<cmd>lua vim.lsp.buf.definition()<cr>') -- Jump to the definition
    bufmap('n', 'gD', '<cmd>lua vim.lsp.buf.declaration()<cr>') -- Jump to declaration
    bufmap('n', 'gi', '<cmd>lua vim.lsp.buf.implementation()<cr>') -- Lists all the implementations for the symbol under the cursor
    bufmap('n', 'go', '<cmd>lua vim.lsp.buf.type_definition()<cr>') -- Jumps to the definition of the type symbol
    bufmap('n', 'gr', '<cmd>lua vim.lsp.buf.references()<cr>') -- List all references
    bufmap('n', 'gs', '<cmd>lua vim.lsp.buf.signature_help()<cr>') -- Displays a function's signature information
    bufmap('n', '<F2>', '<cmd>lua vim.lsp.buf.rename()<cr>') -- Renames all references to the symbol under the cursor
    bufmap('n', '<leader>ca', '<cmd>lua vim.lsp.buf.code_action()<cr>') -- Selects a code action available at the current cursor position
    bufmap('n', 'gl', '<cmd>lua vim.diagnostic.open_float()<cr>') -- Show diagnostics in a floating window
    bufmap('n', '[d', '<cmd>lua vim.diagnostic.goto_prev()<cr>') -- Move to the previous diagnostic
    bufmap('n', ']d', '<cmd>lua vim.diagnostic.goto_next()<cr>') -- Move to the next diagnostic
  end
})
