import { UserProvider } from "./User";
import { ServicesProvider } from "./Services";
import { RatingsProvider } from "./Ratings";

const Providers = ({ children }) => (
  <UserProvider>
    <ServicesProvider>
      <RatingsProvider>{children}</RatingsProvider>
    </ServicesProvider>
  </UserProvider>
);

export default Providers;
