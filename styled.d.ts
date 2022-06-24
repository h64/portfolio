// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    mediaQueries: {
      phoneAndUp: string;
      tabletAndUp: string;
      laptopAndUp: string;
    };
  }
}
