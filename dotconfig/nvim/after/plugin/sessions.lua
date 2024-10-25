require('auto-session').setup({
  suppressed_dirs = { '~/', '~/Projects', '~/Downloads', '/' },
  post_restore_cmds = {
    function()
      -- Restore nvim-tree after a session is restored
      local nvim_tree_api = require('nvim-tree.api')
      nvim_tree_api.tree.change_root(vim.fn.getcwd())
      nvim_tree_api.tree.reload()
    end
  },
  -- only create sessions automatically if in a git project
  -- use :SessionSave to create a session in a non-git directory (session will be updated automatically once created)
  auto_create = function()
    local cmd = 'git rev-parse --is-inside-work-tree'
    return vim.fn.system(cmd) == 'true\n'
  end,
  session_lens = {
    theme_conf = {
      layout_config = {
        width = 0.8,
        height = 0.5,
      },
    },
  },
})
