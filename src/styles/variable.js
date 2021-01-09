const style = {
  app: {
    themeGradient: 'linear-gradient(72deg, #291e95, #cc007a);',
    topHeaderTextColor: '#fff;',
  },
  light: {
    body: {
      backgroundColor: '#fff;',
      textShadow: '0 0 0.1px rgba(0, 0, 0, 0.3);',
      hoverTextShadow: '0 0 6px rgba(0, 0, 0, 0.2);',
    },
    index: {
      dimmedColor: '#eef5db;',
      linkColor: '#000080;',
      darkGray: '#333;',
      middleGray: '#7d7d7d;',
      lightGray: '#aaa;',
    },
    blogTemplates: {
      navigatorTextColor: '#cc007a;',
      navigatorBackgroundColor: '#fceff7;',
      blockquoteTextColor: '#999;',
    },
    code: {
      inlineDimmedColor: '#ece5f1;',
      inlineTextColor: '#4b2043;',
    },
    category: {
      categoryBorderColor: '#ecf0f2;',
      categoryHighlightBorderColor: '#909da1;',
      categoryBackgroundColor: '#f4f7f8;',
      categoryTextColor: '#666;',
      categoryHighlightTextColor: '#636c6e;',
      categoryItemColor: '#fff;',
    },
  },
  dark: {
    backgroundColor: '#282c35;',
    linkColor: '#bb72ec;',
    lightestFontColor: '#fff;',
    lightFontColor: '#eeeeee;',
    middleFontColor: '#d8d7d7;',
    textShadow: '0 0 0.1px rgba(255, 255, 255, 0.3);',
    hoverTextShadow: '0 0 6px rgba(255, 255, 255, 0.2);',
  },
}

const dummy = `
/**
 * @dark theme
 */
$dark-category-item-color: #282c35;
$dark-category-background-color: #24272c;

$dark-category-border-color: rgb(56, 54, 54);
$dark-category-text-color: #d8d7d7;

$dark-category-highlight-border-color: #666;
$dark-category-highlight-text-color: #fff;
`
