-- formatter
require("conform").setup({
  formatters_by_ft = {
    lua = { "stylua" },
    python = { "isort", "black" },
    javascript = { "prettierd", "prettier", stop_after_first = true },
  },
  format_on_save = {
    timeout_ms = 500,
    lsp_format = "fallback",
  },
})

local lspconfig = require('lspconfig')

-- setup lsp servers
lspconfig.ts_ls.setup({})
lspconfig.pyright.setup({})
lspconfig.hls.setup({})
lspconfig.clangd.setup({})
lspconfig.lua_ls.setup({
  on_init = function(client)
    local path = client.workspace_folders[1].name
    if vim.loop.fs_stat(path .. '/.luarc.json') or vim.loop.fs_stat(path .. '/.luarc.jsonc') then
      return
    end
    client.config.settings.Lua = vim.tbl_deep_extend('force', client.config.settings.Lua, {
      runtime = { version = 'LuaJIT' }, -- lua version being used (LuaJIT for Neovim)
      -- Make the server aware of Neovim runtime files
      workspace = {
        checkThirdParty = false,
        library = { vim.env.VIMRUNTIME },
      },
    })
  end,
  settings = { Lua = {} },
})

-- debugger
local dap, dapui = require('dap'), require('dapui')
dapui.setup()

dap.listeners.before.attach.dapui_config = function()
  dapui.open()
end
dap.listeners.before.launch.dapui_config = function()
  dapui.open()
end
dap.listeners.before.event_terminated.dapui_config = function()
  dapui.close()
end
dap.listeners.before.event_exited.dapui_config = function()
  dapui.close()
end

-- C/C++ debug adapters (vscode-cpptools)

dap.adapters.gdb = {
  id = 'gdb',
  type = 'executable',
  command = 'gdb',
  args = { '--quiet', '--interpreter=dap' },
}

dap.adapters.cppdbg = {
  id = 'cppdbg',
  type = 'executable',
  command = '/home/shenkit/.local/bin/vscode-cpptools/extension/debugAdapters/bin/OpenDebugAD7',
}

dap.configurations.c = {
  {
    name = "Run with arguments (vscode-cpptools)",
    type = "cppdbg",
    request = "launch",
    program = function()
      return vim.fn.input('Path to executable: ', vim.fn.getcwd() .. '/', 'file')
    end,
    cwd = '${workspaceFolder}',
    args = function()
      return vim.split(vim.fn.input("Arguments: "), " ")
    end,
    stopAtEntry = true,
  },
  {
    name = 'Run executable with arguments (GDB)',
    type = 'gdb',
    request = 'launch',
    program = function()
      return vim.fn.input('Path to executable: ', vim.fn.getcwd() .. '/', 'file')
    end,
    args = function()
      return vim.split(vim.fn.input("Arguments: "), " ")
    end,
  },
}

dap.configurations.cpp = dap.configurations.c
