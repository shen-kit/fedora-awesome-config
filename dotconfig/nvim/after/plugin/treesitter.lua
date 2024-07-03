require'nvim-treesitter.configs'.setup {
  -- A list of parser names, or "all" (first five should always be installed)
  ensure_installed = { "javascript", "typescript", "java", "c", "lua", "vim", "vimdoc", "query", "markdown", "markdown_inline" },

  -- Install parsers synchronously (only applied to `ensure_installed`)
  sync_install = false,

  -- Automatically install missing parsers when entering buffer
  auto_install = true,

  highlight = {
    enable = true,
    additional_vim_regex_highlighting = false,
    uselanguagetree = false,

    -- disable treesitter for files over 256MB as it gets slow
    disable = function(_, bufnr)
        local buf_name = vim.api.nvim_buf_get_name(bufnr)
        local file_size = vim.api.nvim_call_function("getfsize", { buf_name })
        return file_size > 256 * 1024
    end
  },
}
