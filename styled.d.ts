// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    queries: {
      phoneAndUp: string;
      tabletAndUp: string;
      laptopAndUp: string;
    };
  }
}
