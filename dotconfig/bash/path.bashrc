# user bin to path
if ! [[ "$PATH" =~ "$HOME/.local/bin:$HOME/bin:" ]]
then
    PATH="$HOME/.local/bin:$HOME/bin:$PATH"
fi

# custom bash scripts
if ! [[ "$PATH" =~ "$HOME/.bashscripts:" ]]
then
    PATH="$HOME/.bashscripts:$PATH"
fi

# jdtls
if ! [[ "$PATH" =~ "$HOME/.local/bin/jdtls/bin/:" ]]
then
    PATH="$HOME/.local/bin/jdtls/bin/:$PATH"
fi

export PATH
