const theme = {
  palette: {
    // Primary colors - using the warm, earthy tones
    primary1: "#BD5527",        // Burnt Orange/Terracotta
    primary2: "#F4E27B",        // Light Yellow/Cream
    
    // Secondary colors - using the lighter, neutral tones
    secondary1: "#FFFFF2",      // Off-White/Cream
    secondary2: "#F4E27B",      // Light Yellow/Cream
    
    // Background colors - using the darker tones
    background: "#4D7F84",      // Dark Brown/Black
    secondarybackground: "#FFFFF2", // Off-White/Cream
    
    // Font colors - using contrasting colors for readability
    font: "#FFFFF2",            // Off-White/Cream (light text on dark backgrounds)
    secondaryfont: "#2A1A0F",   // Dark Brown/Black (dark text on light backgrounds)
    
    // Accent colors - using the blue and green tones
    accent1: "#73C37B",         // Muted Green/Sage
    accent2: "#3493AD",         // Medium Blue/Teal
    accent3: "#4D7F84",         // Desaturated Blue-Gray/Slate
    
    // Gradient using the palette colors
    gradient: "linear-gradient(90deg, #BD5527 0%, #F4E27B 50%, #73C37B 100%)",
    
    // Alert color - keeping a bright red for warnings
    alert: "#FF3F3F",
  },
  decoration: {
    border: "5px solid #FFFFF2",        // Off-White/Cream borders
    borderHover: "5px solid #3493AD",   // Burnt Orange on hover
    boxShadowHover: "5px 5px 0px #3493AD", // Medium Blue/Teal shadow on hover
    boxShadow: "5px 5px 0px #3493AD",      // Dark Brown/Black shadow
  },
};

// 2024: 
/*
 palette: {
    primary1: "#ED8666",
    primary2: "#F3E87E",
    secondary1: "#FBF3ED",
    secondary2: "#FBF3ED",
    background: "#1d0f0f",
    secondarybackground: "#FBF3ED",
    font: "#FBF3ED",
    secondaryfont: "#030303",
    gradient: "linear-gradient(90deg, #F3E87E 0%, #ED8666 100%)",
    alert: "#FF3F3F",
  },
  decoration: {
    border: "5px solid #FBF3ED",
    borderHover: "5px solid #ED8666",
    boxShadowHover: "5px 5px 0px #0CB1BC",
    boxShadow: "5px 5px 0px #000",
  },
*/
// rainbow: "linear-gradient(90deg, #376d9c 0%,#88b4a8 40%, #dfb255 78%, #c34238 100%)",

export default theme;
