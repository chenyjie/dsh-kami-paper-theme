window.__ModuleLoader__.load({
  id: '@local/kami-paper-theme',
  factory() {
    // Kami's screen palette: warm paper, warm neutrals, and one ink-blue accent.
    // Dark values adapt the same language to warm charcoal instead of pure black.
    const tokens = {
      '--dsw-alias-bg-base': {
        light: '#f5f4ed',
        dark: '#141413',
      },
      '--dsw-alias-bg-layer-1': {
        light: '#faf9f5',
        dark: '#242421',
      },
      '--dsw-alias-bg-layer-2': {
        light: '#f0eee6',
        dark: '#30302e',
      },
      '--dsw-alias-bg-overlay': {
        light: '#faf9f5',
        dark: '#30302e',
      },
      '--dsw-alias-border-l1': {
        light: '#e5e3d8',
        dark: '#3d3d3a',
      },
      '--dsw-alias-border-l2': {
        light: '#d8d5c8',
        dark: '#504e49',
      },
      '--dsw-alias-brand-primary': {
        light: '#1B365D',
        dark: '#b9c6d8',
      },
      '--dsw-alias-label-primary': {
        light: '#141413',
        dark: '#f5f4ed',
      },
      '--dsw-alias-label-secondary': {
        light: '#504e49',
        dark: '#c7c2b6',
      },
      '--dsw-alias-label-on-color': {
        light: '#faf9f5',
        dark: '#141413',
      },
      '--dsw-alias-state-error-primary': {
        light: '#8b4513',
        dark: '#d89a8a',
      },
      '--dsw-alias-state-idle-primary': {
        light: '#6b6a64',
        dark: '#8b887e',
      },
      '--dsw-alias-state-success-primary': {
        light: '#47664a',
        dark: '#a8b89f',
      },
      '--dsw-alias-state-warn-primary': {
        light: '#8b6a2b',
        dark: '#d0b783',
      },
      '--dsw-specific-sidebar-fill': {
        light: '#f0eee6',
        dark: '#1d1d1b',
      },
    };

    return {
      inject: ['theme'],
      apply(ctx) {
        return ctx.theme.overrideTokens('@local/kami-paper-theme', tokens);
      },
    };
  },
});
