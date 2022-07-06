// https://styled-components.com/docs/api#create-a-declarations-file
import "styled-components";
import mixins from "./src/styles/mixins";
import { mediaQueries } from "./src/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    mediaQueries: typeof mediaQueries;
    mixins: typeof mixins;
  }
}
