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
      '--dsw-alias-border-l3': {
        light: '#d8d5c8',
        dark: '#504e49',
      },
      '--dsw-alias-border-selected': {
        light: '#1B365D',
        dark: '#b9c6d8',
      },
      '--dsw-alias-brand-primary': {
        light: '#1B365D',
        dark: '#b9c6d8',
      },
      '--dsw-alias-brand-text': {
        light: '#1B365D',
        dark: '#b9c6d8',
      },
      '--dsw-alias-link': {
        light: '#1B365D',
        dark: '#b9c6d8',
      },
      '--dsw-alias-state-business-primary': {
        light: '#1B365D',
        dark: '#b9c6d8',
      },
      '--dsw-alias-state-business-tertiary': {
        light: '#E4ECF5',
        dark: '#303f52',
      },
      '--dsw-alias-button-primary-fill': {
        light: '#1B365D',
        dark: '#b9c6d8',
      },
      '--dsw-alias-button-primary-hover': {
        light: '#2D5A8A',
        dark: '#d6e1ee',
      },
      '--dsw-alias-button-primary-dimmed': {
        light: '#E4ECF5',
        dark: '#303f52',
      },
      '--dsw-alias-button-info-fill': {
        light: '#1B365D',
        dark: '#b9c6d8',
      },
      '--dsw-alias-button-info-hover': {
        light: '#2D5A8A',
        dark: '#d6e1ee',
      },
      // Elevated actions keep their ordinary label-primary text, so use a tint.
      '--dsw-alias-button-elevated-fill': {
        light: '#E4ECF5',
        dark: '#303f52',
      },
      '--dsw-alias-button-floating-hover': {
        light: '#d6e1ee',
        dark: '#3d5068',
      },
      '--dsw-alias-interactive-bg-active': {
        light: 'rgba(27, 54, 93, 0.10)',
        dark: 'rgba(185, 198, 216, 0.14)',
      },
      '--dsw-alias-interactive-bg-hover-accent': {
        light: 'rgba(27, 54, 93, 0.14)',
        dark: 'rgba(185, 198, 216, 0.20)',
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
      '--dsw-alias-label-primary-foreground': {
        light: '#faf9f5',
        dark: '#141413',
      },
      '--dsw-alias-label-primary-inverted': {
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
      '--dsw-specific-input-major': {
        light: '#faf9f5',
        dark: '#242421',
      },
      '--dsw-specific-sidebar-fill': {
        light: '#f0eee6',
        dark: '#1d1d1b',
      },
      '--dsw-specific-sidebar-nav-item-active-accent': {
        light: '#E4ECF5',
        dark: '#303f52',
      },
      '--dsw-specific-sidebar-nav-item-active': {
        light: '#E4ECF5',
        dark: '#303f52',
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
